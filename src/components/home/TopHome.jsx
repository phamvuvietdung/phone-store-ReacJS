import React, { useState, useEffect, useRef } from "react";
import "../../styles/home/tophome.css";
// Dùng react nên sẽ tìm icon trên reac-icon
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
import Slider from "react-slick";
/* Thêm thư viện slick-carousel để ảnh tự động chuyển*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// tạo biến setting để dùng slide
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

// Tạo mảng để dùng map đưa dữ liệu vào từng phần
const topHomeArr = [
  {
    id: 0,
    linkImage:
      "https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190244/khai-truong-gia-lai-dong-nai-22-11-2024-home_ulccbk.webp",
    title: "MỪNG KHAI TRƯƠNG",
    des: "Ưu đãi cực khủng",
  },

  {
    id: 1,
    linkImage:
      "https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190244/sliding-home-iphone-16-pro-km-moi_nkityv.webp",
    title: "IPHONE 16 SERIES",
    des: "Mua ngay",
  },

  {
    id: 2,
    linkImage:
      "https://res.cloudinary.com/dgxmejzk6/image/upload/v1732201512/samsung-s24-ultra-home-20-11_eg0ibj.webp",
    title: "GALAXY S24 ULTRA",
    des: "Giá tốt chốt ngay",
  },

  {
    id: 3,
    linkImage:
      "https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190244/ipad-mini-7-sliding-home-20-11_ooh7l1.webp",
    title: "IPAD MINI 7",
    des: "Mua ngay",
  },

  {
    id: 4,
    linkImage:
      "https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190244/tecno-camon-30s-banner-home_tkr2dk.webp",
    title: "TECNO CAMON30",
    des: "Mua ngay",
  },

  {
    id: 5,
    linkImage:
      "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738427909/samsung-s25-pha-gia-moi-home_pl4hmi.webp",
    title: "GALAXY S25 ULTRA",
    des: "Đặt trước ngay",
  },
];

// Tạo mảng cho menu list cho topHome-menuMain
const menuItemList = [
  {
    id: 0,
    title: "Điện thoại, Tablet",
    icon: <IoIosPhonePortrait />,
    contentTitle: [
      {
        id: 0,
        titleItem: "Hãng điện thoại",
        contentTitleItem: [
          "iPhone",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "realme",
          "TECNO",
          "vivo",
          "Infinix",
          "Nokia",
          "Nubia",
          "Nothing Phone",
          "Masstel",
          "Sony",
        ],
      },
      {
        id: 1,
        titleItem: "Mức giá điện thoại",
        contentTitleItem: [
          "Dưới 2 triệu",
          "Từ 2 đến 4 triệu",
          "Từ 4 đến 7 triệu",
          "Từ 7 đến 13 triệu",
          "Từ 13 đến 20 triệu",
          "Trên 20 triệu",
        ],
      },
      {
        id: 2,
        titleItem: "Điện thoại HOT",
        contentTitleItem: [
          "iPhone 16 series",
          "iPhone 15 Promax",
          "Galaxy Z Fold6",
          "Galaxy Flip6",
          "Galaxy S24FE",
          "OPPO Find X8",
          "Realme 13+5G",
          "Techo CAMON 30S",
          "Xiaomi 14T Pro",
          "Oppo Reno12 5G",
          "Samsung Galyxy M55",
          "Xiamoi redmi 14C",
          "Poco M6",
        ],
      },
      {
        id: 3,
        titleItem: "Hãng máy tính bảng",
        contentTitleItem: [
          "Dưới 2 triệu",
          "Từ 2 đến 4 triệu",
          "Từ 4 đến 7 triệu",
          "Từ 7 đến 13 triệu",
          "Từ 13 đến 20 triệu",
          "Trên 20 triệu",
        ],
      },
      {
        id: 4,
        titleItem: "Máy tính bảng HOT",
        contentTitleItem: [
          "Dưới 2 triệu",
          "Từ 2 đến 4 triệu",
          "Từ 4 đến 7 triệu",
          "Từ 7 đến 13 triệu",
          "Từ 13 đến 20 triệu",
          "Trên 20 triệu",
        ],
      },
    ],
  },

  {
    id: 1,
    title: "Laptop",
    icon: <FaLaptop />,
    contentTitle: [
      {
        id: 0,
        titleItem: "Thương hiệu",
        contentTitleItem: [
          "Mac",
          "ASUS",
          "Lenovo",
          "Dell",
          "HP",
          "Acer",
          "LG",
          "Huawei",
          "MSI",
          "Gigabyte",
          "Vaio",
          "Masstel",
        ],
      },
      {
        id: 1,
        titleItem: "Phân khúc giá",
        contentTitleItem: [
          "Dưới 10 triệu",
          "Từ 10 đến 15 triệu",
          "Từ 15 đến 20 triệu",
          "Từ 20 đến 25 triệu",
          "Từ 25 đến 30 triệu",
          "Trên 30 triệu",
        ],
      },
      {
        id: 2,
        titleItem: "Nhu cầu sử dụng",
        contentTitleItem: [
          "Văn phòng",
          "Gaming",
          "Đồ họa - Kỹ thuật",
          "Sinh viên",
          "Cảm ứng",
          "Laptop AI",
          "Mac CTO - Nâng cấp theo cách của bạn",
        ],
      },
      {
        id: 3,
        titleItem: "Dòng chip",
        contentTitleItem: [
          "Laptop core i3",
          "Laptop core i5",
          "Laptop core i7",
          "Laptop core i9",
          "Apple M1 series",
          "Apple M3 series",
          "Apple M4 series",
          "AMD Ryzen",
          "Intel Core Ultra",
        ],
      },
      {
        id: 4,
        titleItem: "Kích thước màn hình",
        contentTitleItem: [
          "Laptop 12 inch",
          "Laptop 13 inch",
          "Laptop 14 inch",
          "Laptop 15.6 inch",
          "Laptop 15 inch",
          "Laptop 16 inch",
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Âm thanh",
    icon: <FaHeadphones />,
    contentTitle: [
      {
        id: 0,
        titleItem: "Chọn loại tay nghe",
        contentTitleItem: [
          "Bluetooth",
          "Chụp tai",
          "Nhét tai",
          "Có dây",
          "Gaming",
          "Thể thao",
          "Gaming",
          "Xem tất cả tai nghe",
        ],
      },
      {
        id: 1,
        titleItem: "Hãng tai nghe",
        contentTitleItem: [
          "Apple",
          "Sony",
          "JBL",
          "Samsung",
          "Marshall",
          "Soundpeats",
          "Bose",
          "Edifier",
          "Xiaomi",
          "Huwei",
          "Senheiser",
          "Assus",
          "Havit",
        ],
      },
      {
        id: 2,
        titleItem: "Chọn theo giá",
        contentTitleItem: [
          "Tai nghe dưới 200k",
          "Tai nghe dưới 500k",
          "Tai nghe dưới 1 triệu",
          "Tai nghe dưới 2 triệu",
          "Tai nghe dưới 5 triệu",
        ],
      },
      {
        id: 3,
        titleItem: "Chọn loại loa",
        contentTitleItem: [
          "Loa bluetooth",
          "Loa Karaoke",
          "Loa mini",
          "Loa Soundbar",
          "Loa vi tính",
          "Xem tất cả các loa",
        ],
      },
      {
        id: 4,
        titleItem: "Hãng loa",
        contentTitleItem: [
          "JBL",
          "Marshall",
          "Harmon Kadon",
          "Acnos",
          "Samsung",
          "Sony",
          "Arirang",
          "LG",
          "Alpha work",
          "Edifier",
          "Bose",
          "Nanomax",
        ],
      },
      {
        id: 5,
        titleItem: "Sản phẩm nổi bật",
        contentTitleItem: [
          "Airpod 4",
          "Airpod Pro 2",
          "Galaxy bud 3 pro",
          "JPL tour pro 2",
        ],
      },
      {
        id: 6,
        titleItem: "Mic",
        contentTitleItem: ["Mic kông dây", "Mic thu âm"],
      },
    ],
  },

  {
    title: "Đồng hồ, Camera",
    icon: <BsSmartwatch />,
    contentTitle: [
      {
        titleItem: "Loại đồng hồ",
        contentTitleItem: [
          "Đồng hồ thông minh",
          "Vòng đeo tay thông minh",
          "Đồng hồ định vị trẻ em",
          "Dây đeo",
        ],
      },
      {
        titleItem: "Chọn theo thương hiệu",
        contentTitleItem: ["Apple watch", "Samsung", "Xiaomi", "Garmin"],
      },
      {
        titleItem: "Sản phẩm nổi bật",
        contentTitleItem: [
          "Apple watch series 10",
          "Samsung Galaxy watch 7",
          "Xiaomi miband 9",
          "Garmin Vivoactive 5",
        ],
      },
      {
        titleItem: "Camera",
        contentTitleItem: [
          "Camera an ninh",
          "Camera hành trình",
          "Camera AI",
          "Flycam",
          "Xem tất cả camera",
        ],
      },
      {
        titleItem: "Camera nổi bật",
        contentTitleItem: ["Máy ảnh Fujifilm", "Máy ảnh Canon", "Máy ảnh Sony"],
      },
    ],
  },

  {
    title: "Đồ gia dụng",
    icon: <RiHomeWifiLine />,
    contentTitle: [
      {
        titleItem: "Gia dụng nhà bếp",
        contentTitleItem: [
          "Nồi chiên không dầu",
          "Máy rửa bát",
          "Nồi cơm điện",
          "Máy xay sinh tố",
          "Lò vi sóng",
        ],
      },
      {
        titleItem: "Sức khỏe - Làm đẹp",
        contentTitleItem: [
          "Máy sấy tóc",
          "Máy lọc không khí",
          "Máy đo huyết áp",
          "Máy massagae",
          "Máy cạo râu",
        ],
      },
      {
        titleItem: "Thiết bị gia đình",
        contentTitleItem: [
          "Robot hút bụi",
          "Quạt",
          "Máy hút bụi cầm tay",
          "TV box",
        ],
      },
      {
        titleItem: "Sản phẩm nổi bật",
        contentTitleItem: [
          "Robot hút bụi Extrax U5",
          "Máy playstation PS5 Slim",
        ],
      },
      {
        titleItem: "Thương hiệu gia dụng",
        contentTitleItem: ["Philips", "Sunhouse", "Panasonic"],
      },
    ],
  },

  {
    title: "Phụ kiện",
    icon: <BsFillUsbPlugFill />,
    contentTitle: [
      {
        titleItem: "Phụ kiện di động",
        contentTitleItem: [
          "Mac",
          "ASUS",
          "Lenovo",
          "Dell",
          "HP",
          "Acer",
          "LG",
          "Huawei",
          "MSI",
          "Gigabyte",
          "Vaio",
          "Masstel",
        ],
      },
      {
        titleItem: "Phụ kiện laptop",
        contentTitleItem: [
          "Dưới 10 triệu",
          "Từ 10 đến 15 triệu",
          "Từ 15 đến 20 triệu",
          "Từ 20 đến 25 triệu",
          "Từ 25 đến 30 triệu",
          "Trên 30 triệu",
        ],
      },
      {
        titleItem: "Thiết bị mạng",
        contentTitleItem: [
          "Văn phòng",
          "Gaming",
          "Đồ họa - Kỹ thuật",
          "Sinh viên",
          "Cảm ứng",
          "Laptop AI",
          "Mac CTO - Nâng cấp theo cách của bạn",
        ],
      },
      {
        titleItem: "Gaming gear",
        contentTitleItem: [
          "Dưới 10 triệu",
          "Từ 10 đến 15 triệu",
          "Từ 15 đến 20 triệu",
          "Từ 20 đến 25 triệu",
          "Từ 25 đến 30 triệu",
          "Trên 30 triệu",
        ],
      },
      {
        titleItem: "Phụ kiện khác",
        contentTitleItem: [
          "Dưới 10 triệu",
          "Từ 10 đến 15 triệu",
          "Từ 15 đến 20 triệu",
          "Từ 20 đến 25 triệu",
          "Từ 25 đến 30 triệu",
          "Trên 30 triệu",
        ],
      },
    ],
  },

  {
    title: "PC, Màn hình, Máy in",
    icon: <FaComputer />,
    contentTitle: [
      {
        titleItem: "Loại PC",
        contentTitleItem: ["Máy bộ", "All in One", "Build PCR"],
      },
      {
        titleItem: "Màn hình",
        contentTitleItem: ["ASUS", "Samsung", "Dell", "LG"],
      },
      {
        titleItem: "Thiết bị văn phòng",
        contentTitleItem: ["Máy in", "Phần mềm", "Decor"],
      },
    ],
  },

  {
    title: "Tivi",
    icon: <PiTelevisionThin />,
    contentTitle: [
      {
        titleItem: "Chọn theo hãng",
        contentTitleItem: ["samsung", "LG", "Sony", "Coocaa"],
      },
      {
        titleItem: "Chọn theo kích thước",
        contentTitleItem: [
          "Dưới 32 inch",
          "Từ 32 đến 45 inch",
          "Từ 45 đến 60 inch",
          "Trên 60 inch",
        ],
      },
      {
        titleItem: "Chọn theo độ phân giải",
        contentTitleItem: [
          "Tivi 4k",
          "Tivi 8K",
          "Tivi full HD",
          "Tivi OLED",
          "Tivi QLED",
        ],
      },
      {
        titleItem: "Sản phẩm nổi bật",
        contentTitleItem: [
          "Google Tivi Coocaa khung tranh QLED 4K 55 inch",
          "Smart Tivi NanoCell LG 4K 55 inch",
        ],
      },
    ],
  },

  {
    title: "Thu cũ đổi mới",
    icon: <MdOutlineCurrencyExchange />,
    contentTitle: [
      {
        titleItem: "Chọn theo sản phẩm",
        contentTitleItem: ["Thu cũ iPhone", "Thu cũ Tivi", "Thu cũ Laptop"],
      },
      {
        titleItem: "Sản phẩm trợ giá cao",
        contentTitleItem: [
          "iphone 16/ 15/ 14",
          "Galaxy Z-Fold/ Z-Flip",
          "Macbook",
        ],
      },
      {
        titleItem: "Sản phẩm giá thu cao",
        contentTitleItem: [
          "iphone 16 series",
          "Macbook M1",
          "Galaxy S24 Ultra",
        ],
      },
    ],
  },

  {
    title: "Hàng cũ",
    icon: <MdOutlineCameraswitch />,
    contentTitle: [
      {
        titleItem: "Chọn loại sản phẩm cũ",
        contentTitleItem: [
          "Điện thoại cũ",
          "Máy tính bảng cũ",
          "Laptop cũ",
          "Mac cũ",
          "Tai nghe cũ",
          "Loa cũ",
          "Tivi cũ",
        ],
      },
      {
        titleItem: "Chọn dòng Iphone cũ",
        contentTitleItem: [
          "Iphone 16 series cũ",
          "Iphone 15 series cũ",
          "Iphone 14 series cũ",
          "Iphone 13 series cũ",
          "Iphone 12 series cũ",
        ],
      },
      {
        titleItem: "Điện thoại android cũ",
        contentTitleItem: [
          "Samsung cũ",
          "Nokia cũ",
          "Oppo cũ",
          "Realme cũ",
          "Infinix cũ",
        ],
      },
      {
        titleItem: "Sản phẩm nổi bật",
        contentTitleItem: [
          "Dưới 10 triệu",
          "Từ 10 đến 15 triệu",
          "Từ 15 đến 20 triệu",
          "Từ 20 đến 25 triệu",
          "Từ 25 đến 30 triệu",
          "Trên 30 triệu",
        ],
      },
    ],
  },

  {
    title: "Khuyến mãi",
    icon: <HiOutlineSpeakerphone />,
    contentTitle: [
      {
        titleItem: "Khuyến mãi",
        contentTitleItem: [
          "Hot sale cuối tuần",
          "Siêu sale phụ kiện",
          "Ưu đãi thanh toán",
        ],
      },
      {
        titleItem: "Thu cũ đổi mới giá hời",
        contentTitleItem: ["Iphone 16 trợ giá", "Galaxy Z-fold 6 trợ giá"],
      },
      {
        titleItem: "Ưu đãi sinh viên",
        contentTitleItem: [
          "Nhập hội S-student",
          "Laptop giảm giá",
          "Điện thoại giảm giá",
          "Hàng cũ giảm thêm",
        ],
      },
    ],
  },

  {
    title: "Tin công nghệ",
    icon: <FaRegNewspaper />,
    contentTitle: [
      {
        titleItem: "Chuyên mục",
        contentTitleItem: [
          "Tin công nghệ",
          "Khám phá",
          "S-game",
          "Tư vấn",
          "Trên tay",
          "Thị trường",
          "Thủ thuật - Hỏi đáp",
        ],
      },
    ],
  },
];

function TopHome() {
  // trường hợp tạo 2 slide liên kết với nhau
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <div className="topHome-container">
      <div className="topHome-menuMain">
        {menuItemList.map((item, index) => {
          return (
            <div className="topHome-menuMain-item" key={index}>
              <div>
                {item.icon}
                <h2>{item.title}</h2>
              </div>
              <MdKeyboardArrowRight />
              <div className="topHome-menuMain-popup" key={index}>
                {item.contentTitle.map((contentItem, contentIndex) => {
                  return (
                    <div key={contentIndex}>
                      <h3>{contentItem.titleItem}</h3>
                      <ul>
                        {contentItem.contentTitleItem.map(
                          (contentTitleItem, contentTitleIndex) => {
                            return (
                              <li key={contentTitleIndex}>
                                {contentTitleItem}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="topHome-sliding">
        <div className="topHome-sliding-image">
          <Slider {...settings}>
            {topHomeArr.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.linkImage} alt="img" style={{}} />
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="topHome-sliding-tab">
          {topHomeArr.map((item, index) => {
            return (
              <div>
                {item.title}
                <br />
                {item.des}
              </div>
            );
          })}
        </div>
      </div>

      <div className="topHome-rightBanner">
        <a href="">
          <img
            src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190243/home-m55-10190-12-11_lonnjb.webp"
            alt=""
          />
        </a>

        <a href="">
          <img
            src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190243/right-banner-14-10_jp4gdy.webp"
            alt=""
          />
        </a>

        <a href="">
          <img
            src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1732190243/udsv-right-laptop_x3eajg.webp"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default TopHome;
