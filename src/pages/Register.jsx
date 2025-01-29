import React,{useEffect} from 'react';
import "../styles/register/register.css";

// dùng react hook form để quản lý form
import { useForm } from "react-hook-form";

// toastify dùng để hiển thị thông báo popup
import { ToastContainer, toast } from 'react-toastify';

// Dùng usenavigate để chuyển trang
import { useNavigate, Link } from 'react-router-dom';

// Thêm thư viện yup để validate dữ liệu
import * as yup from 'yup'

// thêm yuprsolvers để liên kết hookform và yup
import {yupResolver} from '@hookform/resolvers/yup'

function Register() {


  const navigate = useNavigate()

  // Kiểm tra dataUser có dữ liệu chưa. Nếu có sẽ điều hướng về home
  // Dùng useEffect để cập nhật thay đổi của trang
  // useEffect(() => {
  //   const dataUser = JSON.parse(localStorage.getItem("register"))
  //   if(dataUser) {
  //     navigate("/")
  //   }
  // },[])

  // tạo schema của yup để validation
  const registerSchema = yup.object().shape({
    fullname: yup.string().required("Bạn chưa nhập tên").matches(/^[a-zA-Z0-9]{4,}$/,"Họ tên chưa đúng, cần ít nhất 4 ký tự, bắt đầu bằng chữ"),
    phone: yup.string().required("Bạn chưa nhập số điện thoại").min(9,"Số điện thoại quá ngắn").matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Số điện thoại không hợp lệ"),
    email: yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    // birthday: yup.date().required("Vui lòng chọn ngày sinh"),
    password: yup.string().required("Vui lòng nhập mật khẩu").min(6, "Mật khẩu phải ít nhất 6 kí tự"),
    repassword: yup.string().required("Vui lòng nhập lại mật khẩu").oneOf([yup.ref("password"), null], "Mật khẩu không trùng nhau"),
  })
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  // tạo hàm để lấy dữ liệu khi click nút đăng ký
  const handleRegister = (value) => {
    
    // Lưu dữ liệu vào local storage dưới dạng JSON dùng hàm JSON.stringify()
    localStorage.setItem('register', JSON.stringify(value))
    toast.success('Đăng ký thành công', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
    //dùng settimeout để chờ hiển thị rồi mới chuyển trang 
    setTimeout(()=>navigate("/login"),3100)
  }

  return (    
    <div className="register-container">
      <h2>Đăng ký tài khoản</h2>

      <form className="form" onSubmit={handleSubmit(handleRegister)}>
        {/* Dùng error của reac-hook form để hiển thị lỗi */}
        <p>{errors.fullname?.message}</p>
        <input type="text" placeholder="Nhập họ và tên" {...register("fullname")} />
        
        <p>{errors.phone?.message}</p>
        <input type="tel" placeholder="Nhập số điện thoại" {...register("phone")}/>

        <p>{errors.email?.message}</p>
        <input type="email" placeholder="Nhập email" {...register("email")} />

        {/* <p>{errors.birthday?.message}</p> */}
        <input type="date" {...register("birthday")} />

        <p>{errors.password?.message}</p>
        <input type="password" placeholder="Nhập mật khẩu" {...register("password")} />

        <p>{errors.repassword?.message}</p>
        <input type="password" placeholder="Nhập lại mật khẩu" {...register("repassword")} />

        <input type="submit" value="Đăng ký" />
        <Link to="/login"> <p> Đã có tài khoản? Đăng nhập ngay </p></Link>
      </form>

      {/* Dùng toast để hiển thị thông báo đăng ký thành công */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Register