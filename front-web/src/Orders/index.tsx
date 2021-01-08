import React from "react";
import ProductList from "./ProductList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { fetchProducts } from "../api";
import OrderLocation from "./OrderLocation";

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
      console.log(products);

    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data)).catch(error => console.log(error))

    },
    
    []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductList products={products} />
      <OrderLocation />

    </div>
  );
}

export default Orders;
