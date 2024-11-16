import React from 'react'
import { IoMdListBox } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

// Import file css cho header. Dấu ../ cho phép lùi lại thư mục cha
import "../../styles/home/header.css"

function Header() {
  return (
    <div className='header-bgcolor'>
      <div className='header-container'>
        <div className='header-logo'>
          <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1731597116/logo-cellphones_tnfdzh.jpg" 
          alt="logo-cellphones" />
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
            <p>Gọi mua hàng</p>
            <p>1800.2097</p>
          </div>
        </div>

        <div className='header-locationStore'>
          <CiLocationOn />
          <h2>Cửa hàng <br/> gần bạn</h2>
        </div>

        <div className='header-truckDelivery'>
          <LiaShippingFastSolid />
          <h2>Tra cứu <br/> đơn hàng</h2>
        </div>

        <div className='header-shoppingBag'>
          <IoBagOutline />
          <h2>Giỏ <br/> hàng</h2>
        </div>

        <div className='header-userLogin'>
          <FaRegUserCircle />
          <h2>Đăng nhập</h2>
        </div>

      </div>


    </div>
  )
}

export default Header