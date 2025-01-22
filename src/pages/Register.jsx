import React from 'react';
import "../styles/register/register.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

// Dùng usenavigate để chuyển trang
import { useNavigate } from 'react-router-dom';


function Register() {


  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

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
        <input type="text" placeholder="Nhập họ và tên" {...register("fullname")} />
        <input type="tel" placeholder="Nhập số điện thoại" {...register("phone")}/>
        <input type="email" placeholder="Nhập email" {...register("email")} />
        <input type="date" {...register("birthday")} />
        <input type="password" placeholder="Nhập mật khẩu" {...register("password")} />
        <input type="password" placeholder="Nhập lại mật khẩu" {...register("repassword")} />
        <input type="submit" value="Đăng ký" />
        <a href="/login"> <p> Đã có tài khoản? Đăng nhập ngay </p></a>
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