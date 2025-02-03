import React from 'react'
import { useParams } from 'react-router-dom'
import productDetails from "../datas/productDetails"

function ProductDetails() {
  let {id} = useParams()

  console.log("id",id)
  console.log(productDetails.title)
  
  return (
    <div>
      Product details
    </div>
  )
}

export default ProductDetails