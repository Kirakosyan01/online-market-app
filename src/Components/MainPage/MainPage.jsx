import "./MainPage.css";
import { Navigation } from "../Navigation/Navigation";
import { useState, useEffect } from "react";
import { MarketProducts } from "../MarketProducts/MarketProducts";

export function MainPage() {
  const [productsData, setProductsData] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);

  useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProductsData(data.products));
  }, [])

  return (
    <div className="main__page">
      <Navigation basketProducts={basketProducts} setBasketProducts={setBasketProducts}/>
      <MarketProducts productsData={productsData} basketProducts={basketProducts} setBasketProducts={setBasketProducts} />
    </div>
  );
}
