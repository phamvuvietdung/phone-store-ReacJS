import React from 'react';
import "../styles/login/login.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

// Dùng usenavigate để chuyển trang
import { useNavigate, Link } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

// Lấy dữ liệu đã đăng ký tại register so sánh dữ liệu đăng nhập và chuyển về trang home nếu đúng
  const handleLogin = (dataLogin) => {

    // Lấy dữ liệu từ local storage. Lưu ý dùng JSON.parse() để chuyển lại thành data có thể so sánh
    const dataRegister = JSON.parse(localStorage.getItem("register"))

    // So sánh 2 dữ liệu
    if (dataLogin.phone === dataRegister.phone && dataLogin.password === dataRegister.password) {
      toast.success("Đăng nhập thành công!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Chuyển về trang home
      setTimeout(() => navigate('/'), 3100);
      
    } else {
      toast.error("Số điện thoại hoặc mật khẩu không đúng!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Dùng reset để clear toàn bộ dữ liệu nhập vào
      reset();
    }
  }


  return (    
    <div className="login-container">
      <h2>Đăng nhập tài khoản</h2>

      <form className="form" onSubmit={handleSubmit(handleLogin)}>        
        <input type="tel" placeholder="Nhập số điện thoại" {...register("phone")}/>
        <input type="password" placeholder="Nhập mật khẩu" {...register("password")} />
        <input type="submit" value="Đăng nhập" />
        <Link to="/register"> <p> Chưa có tài khoản? Đăng ký ngay </p></Link>
      </form>

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

export default Login