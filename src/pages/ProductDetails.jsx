import React from "react";
import { useParams } from "react-router-dom";
// import productDetails from "../datas/productDetails";
import { productPhoneInfo, productLaptopInfo } from "../datas/featureProduct";

import "../styles/productdetails/productdetails.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidesettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

function ProductDetails() {
  let idRouting = useParams();

  // console.log(productDetails);
  const phoneDetails = productPhoneInfo.filter((item) => {
    return (
      // item.id == idRouting.id
      // Thay link số bằng tên sản phẩm
      item.productLink === idRouting.id
    );
  });

  const laptopDetails = productLaptopInfo.filter((item) => {
    return item.productLink === idRouting.id;
  });

  return (
    <>
      {phoneDetails.map((item) => {
        return (
          <div className="product-detail-container">
            <h1>{item.title}</h1>
            <div className="product-detail-image">
              <div className="product-image">
                <div>
                  <Slider {...slidesettings}>
                    {item.imgSlide.map((image) => {
                      return (
                        <div>
                          <img src={image} alt={item.title} />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="product-detail-description">
              <h2>Chỗ này để thêm mô tả sản phẩm</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductDetails;
