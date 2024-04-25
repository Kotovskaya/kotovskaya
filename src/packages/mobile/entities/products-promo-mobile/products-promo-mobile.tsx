import "./products-promo-mobile.css";
import mock from "../../assets/mock.png";
import { ProductCard } from "../../../../entities/productCard/productCard";
import showall from "./../../assets/showall.svg";
import { Product } from "../../../../shared/types/product";

import { Link } from "react-router-dom";
import { ProductCardMobile } from "../product-card-mobile";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../shared/api/config";

export function ProductsPromoMobile(props: any) {
  const productsArray: Product[] = props.array;
  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div className="wrapper">{props.category}</div>
      </div>
      <div className="productspromo__main">
        <div className="productspromo__grid__mobile">
          {productsArray?.map((product: Product) => {
            console.log(product.quantity);
            return (
              <ProductCardMobile
                id={product.id}
                photo={mock}
                name={product.name}
                quantity={product.quantity}
                price={product?.salePrices?.[0]?.value}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="productspromo__footer">
        <Link to={props.link}>
          <div className="wrapper">
            <p>смотреть все</p>
            <img src={showall} alt="" />
          </div>
        </Link>
      </div> */}
    </div>
  );
}
