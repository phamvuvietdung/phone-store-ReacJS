import React from "react";
import "../../styles/home/featureproduct.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

// THÊM slider từ THƯ VIỆN react-slick để làm slidebar
import Slider from "react-slick";
/* Thêm thư viện slick-carousel để ảnh tự động chuyển*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var sliderSettings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

const productList = [
  {
    titleProduct: "ĐIỆN THOẠI NỔI BẬT NHẤT",
    titleProductList: [
      "Apple",
      "Samsung",
      "Xiaomi",
      "OPPO",
      "vivo",
      "realme",
      "ASUS",
      "TECNO",
      "Nokia",
      "Infinix",
      "Nothing",
      "Xem tất cả",
    ],
    productDetail: [
      {
        title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
        discount: ["Giảm 3%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1734964624/iphone-16-pro-max_dyazdd.webp",
        price: ["33.890.000đ", "34.990.000đ"],
        memberDiscount: "339.000đ",
        promotion:
          "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng...",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },
      {
        title: "Xiaomi Redmi Note 13 Pro Plus 5G 8GB 256GB",
        discount: ["Giảm 2%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1734964626/xiaomi-redmi-note-13-pro-plus_9__ruqigk.webp",
        price: ["8.490.000đ", "10.990.000đ"],
        memberDiscount: "85.000đ",
        studentDiscount: "300.000",
        promotion:
          "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng...",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },

      {
        title: "Xiaomi 14T 12GB 512GB",
        discount: ["Giảm 7%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1734964626/xiaomi_14t_2__y3pjci.webp",
        price: ["12.990.000đ", "13.990.000đ"],
        memberDiscount: "120.000đ",
        studentDiscount: "300.000",
        promotion:
          "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng...",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },

      {
        title: "OPPO Find X8",
        discount: ["Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1734964624/dien-thoai-oppo-find-x8-xam-1_brlxxv.webp",
        price: ["22.990.000đ"],
        memberDiscount: "230.000đ",
        studentDiscount: "300.000",
        promotion:
          "Tặng kèm bảo hành OPPO Care Plus toàn cầu 24 tháng - Bảo hành màn hình 12 tháng",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },

      {
        title: "Samsung Galaxy S24 FE 5G 8GB 128GB",
        discount: ["Giảm 18%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1734964624/dien-thoai-samsung-galaxy-s24-fe_3__4_z5cfm7.webp",
        price: ["13.990.000đ", "16.990.000đ"],
        memberDiscount: "140.000đ",
        promotion:
          "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },

      {
        title: "Samsung Galaxy Z Fold6 12GB 256GB",
        discount: ["Giảm 18%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1734964625/samsung-galaxy-z-fold-6-xanh_5__pgasz4.webp",
        price: ["32.490.000đ", "43.990.000đ"],
        memberDiscount: "325.000đ",
        studentDiscount: "600.000",
        promotion: "Trả góp 0% đến 12 tháng, 0đ trả trước qua Samsung Finance+",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },
    ],
  },

  {
    titleProduct: "LAPTOP",
    titleProductList: [
      "Macbook",
      "ASUS",
      "MSI",
      "Lenovo",
      "HP",
      "Acer",
      "Delll",
      "Huawei",
      "Xem tất cả",
    ],
    productDetail: [
      {
        title: "Laptop MSI Modern 14 C13M-608VN",
        discount: ["Giảm 30%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738425016/macbook_14C_aghcbh.webp",
        price: ["12.490.000đ", "18.990.000đ"],
        memberDiscount: "130.000đ",
        studentDiscount: "390.000",
        promotion:
          "Tặng Balo trị giá 600k cho thành viên S-Student khi mua Laptop (số lượng có hạn)",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },
      {
        title: "Laptop ASUS Vivobook 15 X1504ZA-NJ517W",
        discount: ["Giảm 20%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738425370/laptop-asus-vivobook-15x-oled-m3504ya-l1268w-thumbnails_kzko1j.webp",
        price: ["13.190.000đ", "16.490.000đ"],
        memberDiscount: "132.000đ",
        studentDiscount: "396.000",
        promotion:
          "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },

      {
        title:
          "Apple MacBook Air M2 2024 8CPU 8GPU 16GB 256GB I Chính hãng Apple Việt Nam",
        discount: ["Giảm 8%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738425456/image_1396_1_owwgxl.webp",
        price: ["22.990.000đ", "24.990.000đ"],
        memberDiscount: "230.000đ",
        studentDiscount: "500.000",
        promotion:
          "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },

      {
        title: "Laptop Acer Aspire Lite AL16-51P-55N7 NX.KX0SV.001",
        discount: ["Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738425712/acer-lite_ah8h8l.webp",
        price: ["13.090.000đ", "14.990.000đ"],
        memberDiscount: "131.000đ",
        studentDiscount: "393.000",
        promotion:
          "Nhập mã TETLAP300 giảm 5% tối đa 300K khi mua laptop từ 17/1 đến 06/2",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },

      {
        title:
          "Mac mini M4 2024 10CPU 10GPU 16GB 256GB | Chính hãng Apple Việt Nam",
        discount: ["Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738425799/macmini-m4_yyp5it.webp",
        price: ["14.990.000đ"],
        memberDiscount: "150.000đ",
        promotion:
          "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },

      {
        title: "Laptop Acer Aspire 3 Spin A3SP14-31PT-387Z",
        discount: ["Giảm 18%", "Trả góp 0%"],
        productImg:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738425871/acer-aspire3_diivmg.webp",
        price: ["9.490.000đ", "14.990.000đ"],
        memberDiscount: "95.000đ",
        studentDiscount: "285.000",
        promotion:
          "Trả góp 0%, kỳ hạn 12 tháng, không phụ phí qua CTTC và thẻ tín dụng (áp dụng tại cửa hàng)",
        startRating: [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ],
      },
    ],
  },
];

const imgProductList = [
  {
    title: "PHỤ KIỆN",
    icon: [
      {
        icontitle: "Phụ kiện Apple",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589550/apple-icon_xa95zh.webp",
      },
      {
        icontitle: "Cáp sạc",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589549/cabble_hjzvfe.webp",
      },
      {
        icontitle: "Pin sạc dự phòng",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589549/sacduphong_vydub4.webp",
      },
      {
        icontitle: "Ốp lưng - bao da",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589549/baodaOplung_w3ynri.webp",
      },
      {
        icontitle: "Dán màn hình",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589549/danmanhinh_ko3vmm.webp",
      },
      {
        icontitle: "Thẻ nhớ, USB",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589549/thenho_c93sjy.webp",
      },
      {
        icontitle: "Gaming Gear, Playstation",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589548/gamingGear_lt1xiv.webp",
      },
      {
        icontitle: "Sim 4G",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589549/sim4G_lu5ywg.webp",
      },
      {
        icontitle: "Thiết bị mạng",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589549/thietbimang_w6eygk.webp",
      },
      {
        icontitle: "Camera",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589549/camera_jyyvor.webp",
      },
      {
        icontitle: "Gimbal",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589550/gimball-icon_er31an.webp",
      },
      {
        icontitle: "Flycam",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589548/flycam_fpafka.webp",
      },
      {
        icontitle: "Máy ảnh",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589548/mayanh_pkdwfc.webp",
      },
      {
        icontitle: "Chuột, bàn phím",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589548/keyboard_zlrhex.webp",
      },
      {
        icontitle: "Balo, túi xách",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589548/balo_lu8csq.webp",
      },
      {
        icontitle: "hub chuyển đổi",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589548/hubchuyendoi_vo1iud.webp",
      },
      {
        icontitle: "Phụ kiện điện thoại",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589548/phukiendienthoai_tuw4jb.webp",
      },
      {
        icontitle: "Phụ kiện Laptop",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738589548/phukienlaptop_r6vjgp.webp",
      },
    ],
  },
  {
    title: "HÀNG CŨ",
    icon: [
      {
        icontitle: "Điện thoại cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738596457/ip-14-hp-cu_ftt1cu.webp",
      },
      {
        icontitle: "Máy tính bảng cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738596512/ipad-cate-cu_ooyjaf.webp",
      },
      {
        icontitle: "Mac cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738596550/cate-392_imafyj.svg",
      },
      {
        icontitle: "Laptop cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738596593/cate-878_mvzoux.svg",
      },
      {
        icontitle: "Tai nghe cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597075/cate-tai-nghe_1_h6knwa.webp",
      },
      {
        icontitle: "Loa cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597078/cate-loa_1_jjpwg4.webp",
      },
      {
        icontitle: "Đồng hồ thông minh cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597146/cate-451_exumov.svg",
      },
      {
        icontitle: "Đồ gia dụng cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597152/cate-846_srtuy5.svg",
      },
      {
        icontitle: "Phụ kiện cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597198/cate-phu-kien_uyoazs.webp",
      },
      {
        icontitle: "Màn hình cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597236/cate-man-hinh_muvcfa.webp",
      },
      {
        icontitle: "Tivi cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597263/tivi-cu-new_1334_mpqqpo.webp",
      },
      {
        icontitle: "Cáp sạc cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597267/cate-114_cw44kh.svg",
      },
      {
        icontitle: "Pin dự phòng cũ",
        iconPicture:
          "https://res.cloudinary.com/dgxmejzk6/image/upload/v1738597300/cate-122_h2ouqn.svg",
      },
    ],
  },
];

function FeatureProduct() {
  return (
    <>
      {productList.map((product, index) => {
        return (
          <div className="featureProduct-container" key={index}>
            <div className="featureProduct-title">
              <h2>{product.titleProduct}</h2>

              <div className="featureProduct-title-list">
                {product.titleProductList.map((title, index) => {
                  return <a href="">{title}</a>;
                })}
              </div>
            </div>

            <div className="featureProduct-list">
              {product.productDetail.map((productInfo, index) => {
                return (
                  <div className="featureProduct-list-info" key={index}>
                    <div className="discount-percent">
                      {productInfo.discount[1] ? (
                        <p>{productInfo.discount[0]}</p>
                      ) : (
                        <p style={{ opacity: 0 }}></p>
                      )}
                      {productInfo.discount[1] ? (
                        <p>{productInfo.discount[1]}</p>
                      ) : (
                        <p>{productInfo.discount[0]}</p>
                      )}
                    </div>

                    <div className="product-image">
                      <img src={productInfo.productImg} alt="anh-san-pham" />
                    </div>

                    <h3> {productInfo.title} </h3>

                    <div className="product-price">
                      <p>{productInfo.price[0]}</p>
                      <p>{productInfo.price[1]}</p>
                    </div>

                    <div className="product-member">
                      <p>
                        Smember giảm thêm đến&nbsp;
                        <span>{productInfo.memberDiscount}</span>
                      </p>

                      {productInfo.studentDiscount ? (
                        <p>
                          Student giảm thêm đến&nbsp;
                          <span>{productInfo.studentDiscount}</span>
                        </p>
                      ) : null}
                    </div>

                    <div className="product-promotion">
                      <p>{productInfo.promotion}</p>
                    </div>

                    <div className="product-rating">
                      <div>{productInfo.startRating}</div>

                      <div>
                        <p>Yêu thích</p>
                        <FaRegHeart />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Thẻ này để thêm các icon hình ảnh. do css khác */}
      {imgProductList.map((icon, index) => {
        return (
          <div className="featureProduct-container" key={index}>
            <div className="featureProduct-title">
              <h2>{icon.title}</h2>
              <div className="featureProduct-title-list">
                <a href="">xem tất cả</a>
              </div>
            </div>
            <div className="imageProduct-list">
              {icon.icon.map((iconDetail, index) => {
                return (
                  <div className="imageProduct-list-detail">
                    <a href="">
                      <img src={iconDetail.iconPicture} alt="phu-kien-apple" />
                      <span>{iconDetail.icontitle}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FeatureProduct;
