import React from "react";
import "../../styles/home/featureproduct.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import {
  productPhoneInfo,
  productLaptopInfo,
  imgProductList,
} from "../../datas/featureProduct";

// THÊM slider từ THƯ VIỆN react-slick để làm slidebar
import Slider from "react-slick";
/* Thêm thư viện slick-carousel để ảnh tự động chuyển*/
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

var sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

function FeatureProduct() {
  return (
    <>
      {/* Điện thoại */}
      <div className="featureProduct-container">
        <div className="featureProduct-title">
          <h2>ĐIỆN THOẠI NỔI BẬT</h2>

          <div className="featureProduct-title-list">
            <ul>
              <li>
                <a href="">APPLE</a>
              </li>
              <li>
                <a href="">Samsung</a>
              </li>
              <li>
                <a href="">Xiaomi</a>
              </li>
              <li>
                <a href="">OPPO</a>
              </li>
              <li>
                <a href="">Vivo</a>
              </li>
              <li>
                <a href="">Realme</a>
              </li>
              <li>
                <a href="">ASUS</a>
              </li>
              <li>
                <a href="">TECNO</a>
              </li>
              <li>
                <a href="">Nokia</a>
              </li>
              <li>
                <a href="">Ininix</a>
              </li>
              <li>
                <a href="">Nothing</a>
              </li>
              <li>
                <a href="">Xem tất cả</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="featureProduct-list">
          <Slider {...sliderSettings}>
            {productPhoneInfo.map((productInfo, index) => {
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
          </Slider>
        </div>
      </div>

      {/* Laptop */}
      <div className="featureProduct-container">
        <div className="featureProduct-title">
          <h2>LAPTOP</h2>

          <div className="featureProduct-title-list">
            <ul>
              <li>
                <a href="">Macbook</a>
              </li>
              <li>
                <a href="">ASUS</a>
              </li>
              <li>
                <a href="">MSI</a>
              </li>
              <li>
                <a href="">Lenovo</a>
              </li>
              <li>
                <a href="">HP</a>
              </li>
              <li>
                <a href="">Acer</a>
              </li>
              <li>
                <a href="">Dell</a>
              </li>
              <li>
                <a href="">Huawei</a>
              </li>
              <li>
                <a href="">Gigabyte</a>
              </li>
              <li>
                <a href="">Laptop AI</a>
              </li>
              <li>
                <a href="">Xem tất cả</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="featureProduct-list">
          <Slider {...sliderSettings}>
            {productLaptopInfo.map((productInfo, index) => {
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
          </Slider>
        </div>
      </div>

      {/* Thẻ này để thêm các icon hình ảnh. do css khác */}
      {imgProductList.map((icon, index) => {
        return (
          <div className="featureProduct-container" key={index}>
            <div className="featureProduct-title">
              <h2>{icon.title}</h2>
              <div className="featureProduct-title-list">
                <a href="">Xem tất cả</a>
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
