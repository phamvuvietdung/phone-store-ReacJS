import React, {useEffect, useState} from 'react'
import { IoMdListBox } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


// Import file css cho header. Dấu ../ cho phép lùi lại thư mục cha
import "../../styles/home/header.css"

function Header() {

  const navigate = useNavigate()

  // Dùng useState để lấy chiều rộng của màn hình
  // Dùng chiều rộng của màn hình để dùng hiển thị các thành phần của header
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // tạo biến user để hiển thị tên người đăng nhập sau khi login
  const dataUser = JSON.parse(localStorage.getItem("register"))

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
    
  }, [])
  // console.log(windowWidth)

  const handleLogout = () =>{
    localStorage.removeItem("register")
    navigate("/register")
    // window.location.reload()
  }

  return (
    <div className='header-bgcolor'>
      <div className='header-container'>
        <div className='header-logo'>

          {
            windowWidth > 820 ? <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1731597116/logo-cellphones_tnfdzh.jpg" 
            alt="logo-cellphones" />
            : <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1731596568/cellphones-social-preview_w8clck.png" 
            alt="logo-cellphones" />
          }

        </div>

        <div className='header-listBox'>
          <IoMdListBox />
          <h2>Danh mục</h2>
        </div>

        <div className='header-locationPrice'>
          <CiLocationOn />
          <div>
            <div>
              <p>Xem giá tại</p>
              <MdKeyboardArrowDown />
            </div>
            <h2>Hồ Chí Minh</h2>
          </div>
        </div>

        <div className='header-search'>
          <IoSearchOutline />
          <input type='text' placeholder='Bạn cần tìm gì?' />
        </div>

        <div className='header-phone'> 
          <FiPhone />
          <div>
            
            {
              windowWidth > 1100? <p>Gọi mua hàng <br/> 1800.2097</p> : <p>Gọi mua <br/> hàng..1800.2097</p>
            }
            
          </div>
        </div>

        <div className='header-locationStore'>
          <CiLocationOn />
          
          {
            windowWidth > 1100 ? <h2>Cửa hàng <br/> gần bạn</h2> : <h2>Cửa <br/> hàng gần bạn</h2>
          }
            
          
        </div>

        <div className='header-truckDelivery'>
          <LiaShippingFastSolid />
          
          {
            windowWidth > 1100 ? <h2>Tra cứu <br/> đơn hàng</h2> :<h2>Tra <br/> cứu đơn hàng</h2>
          }
          
        </div>

        <div className='header-shoppingBag'>
          <IoBagOutline />
          {
            windowWidth > 770 ? <h2>Giỏ <br/> hàng</h2> :<h2>Giỏ hàng</h2>
          }
          <span>0</span>
          
        </div>

        <div className='header-userLogin'>
          <Link to="/login">
            <FaRegUserCircle />
            {/* Dùng toán tử 3 ngôi hiển thị tên người dùng sau đăng nhập */}
            {dataUser ? <h2>{dataUser.fullname}</h2> : <h2>Đăng nhập</h2>}
          </Link>
        </div>

        {/* Dùng toán tử 3 ngôi để hiển thị thẻ logout */}
        {dataUser ? <div onClick={handleLogout} className='header-userLogout'>
          <h2>Log out</h2></div> 
        : ""}
        
      </div>

    </div>
  )
}

export default Header