import React from 'react'
import "../../styles/home/featureproduct.css"
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const productList = ["Apple", "Samsung","Xiaomi","OPPO","vivo","realme","ASUS","TECNO",
                    "Nokia","Infinix","Nothing","Xem tất cả"]




function FeatureProduct() {
  return (
    <div className='featureProduct-container'>
        <div className='featureProduct-title'>
            <h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
            <div className='featureProduct-title-list'>
                {
                    productList.map((product,index)=>{
                        return(
                            <a href="">{product}</a>
                        )
                    })
                }
            </div>
        </div>

        <div className='featureProduct-list'>
            <div className='featureProduct-list-info'>
                <div className='discount-percent'>
                    <p>Giảm 3%</p>
                    <p>Trả góp 0%</p>
                </div>
                <div className='product-image'>
                    <img src="https://res.cloudinary.com/dgxmejzk6/image/upload/v1734964624/iphone-16-pro-max_dyazdd.webp" 
                    alt="anh-san-pham" />
                </div>
                <h3>iPhone 16 Pro Max 256GB | Chính hãng VN/A</h3>
                <div className='product-price'>
                    <p>33.890.000đ</p>
                    <p>34.990.000đ</p>
                </div>
                <div className='product-memember'>
                    <p>Smember giảm đến <span>339.000đ</span></p>
                </div>
                <div className='product-promotion'>
                    <p>Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng</p>
                </div>
                <div className='product-rating'>
                    <div>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div>
                        <p>yêu thích</p>
                        <FaHeart />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureProduct