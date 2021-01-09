import React from "react";
import ProductList from "./ProductList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { useEffect, useState } from "react";
import { OrderLocationdata, Product } from "./types";
import { fetchProducts } from "../api";
import OrderLocation from "./OrderLocation";

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
      console.log(products);

    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data)).catch(error => console.log(error))

    },
    
    []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>

    </div>
  );
}

export default Orders;
