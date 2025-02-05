import React from "react";
import { useParams } from "react-router-dom";
import productDetails from "../datas/productDetails";

function ProductDetails() {
  let idRouting = useParams();

  const contentDetails = productDetails.filter((item) => {
    return item.id == idRouting.id;
  });
  return (
    <div>
      {contentDetails.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
            <p>{item.des}</p>
          </>
        );
      })}
    </div>
  );
}

export default ProductDetails;
