import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(
      "http://zinopetstore.com/api/products/productsListAPI.php/" + productId
    )
      .then((res) => setProduct(res.productsInfo));
  }, [productId]);

  console.log(product);

  return <div></div>;
}
