import React from 'react'
import "../../styles/home/tophome.css"
import { IoIosPhonePortrait } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { RiHomeWifiLine } from "react-icons/ri";
import { BsFillUsbPlugFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { PiTelevisionThin } from "react-icons/pi";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { MdOutlineCameraswitch } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";


// THÊM slider từ THƯ VIỆN react-slick để làm slidebar
import Slider from "react-slick"
/* Thêm thư viện slick-carousel để ảnh tự động chuyển*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// tạo biến seeting để dùng slide
var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


function TopHome() {
  return (
    <div className='topHome-container'>

      <div className='topHome-menuMain'>
        <div className='topHome-menuMain-item'>
          <div>
            <IoIosPhonePortrait />
            <h2>Điện thoại, Tablet</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <FaLaptop />
            <h2>Laptop</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <FaHeadphones />
            <h2>Âm thanh</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <BsSmartwatch />
            <h2>Đồng hồ, Camera</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <RiHomeWifiLine />
            <h2>Đồ gia dụng</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <BsFillUsbPlugFill />
            <h2>Phụ kiện</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <FaComputer />
            <h2>PC, Màn hình, Máy in</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <PiTelevisionThin />
            <h2>Tivi</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            < MdOutlineCurrencyExchange/>
            <h2>Thu cũ đổi mới</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <MdOutlineCameraswitch />
            <h2>Hàng cũ</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <HiOutlineSpeakerphone />
            <h2>Khuyến mãi</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>

        <div className='topHome-menuMain-item'>
          <div>
            <FaRegNewspaper />
            <h2>Tin công nghệ</h2>
          </div>
          <MdKeyboardArrowRight/>
        </div>
        
      </div>

      <div className='topHome-sliding'>
        <Slider {...settings}>
          <div className='topHome-sliding-image'>
            <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190244/khai-truong-gia-lai-dong-nai-22-11-2024-home_ulccbk.webp" 
            alt="tuan-le-khai-truong" />
          </div>

          <div className='topHome-sliding-image'>
            <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190244/sliding-home-iphone-16-pro-km-moi_nkityv.webp" 
            alt="iphone16" />
          </div>

          <div className='topHome-sliding-image'>
            <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732201512/samsung-s24-ultra-home-20-11_eg0ibj.webp" 
            alt="galaxyS24" />
          </div>

          <div className='topHome-sliding-image'>
            <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190244/ipad-mini-7-sliding-home-20-11_ooh7l1.webp" 
            alt="ipadmini7" />
          </div>

          <div className='topHome-sliding-image'>
            <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190244/tecno-camon-30s-banner-home_tkr2dk.webp" 
            alt="tecno-camon30" />
          </div>        
        </Slider>

        <div className='topHome-sliding-tab'>
          <div>
            MỪNG KHAI TRƯƠNG
            <br/>
            Ưu đãi cực khủng
          </div>

          <div>
            IPHONE 16 SERIES
            <br/>
            Mua ngay
          </div>

          <div>
            GALAXY S24 ULTRA
            <br/>
            Giá tốt chốt ngay
          </div>

          <div>
            IPAD MINI 7
            <br/>
            Mua ngay
          </div>

          <div>
            TECNO CAMON30
            <br/>
            Giá tốt chốt ngay
          </div>

        </div>

      </div>

      <div className='topHome-rightBanner'>
          <a href="">
            <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190243/home-m55-10190-12-11_lonnjb.webp" 
            alt="" />
          </a>

          <a href="">
            <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190243/right-banner-14-10_jp4gdy.webp" 
            alt="" />
          </a>

          <a href="">
            <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190243/udsv-right-laptop_x3eajg.webp" 
            alt="" />
          </a>
      </div>

    </div>
  )
}

export default TopHome