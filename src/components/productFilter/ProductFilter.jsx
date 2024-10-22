import React from "react";
import { useState } from "react";
import "./ProductFilter.css";
import { data } from "../../data/data";
const ProductFilter = () => {
  const [product, setProduct] = useState(data);

  const handelFilter = (brandName) => {
      const filteProduct = data.filter((item) => {
          return item.brand === brandName
         
      })
       setProduct(filteProduct);
  };
  return (
    <>
      <div className="container">
        <div className="btn">
          <button onClick={() => setProduct(data)}>All</button>
          <button onClick={() => handelFilter("Samsung")}>Samsung</button>
          <button onClick={() => handelFilter("Apple")} >Apple</button>
          <button onClick={() => handelFilter("OnePlus")}>OnePlus</button>
          <button onClick={() => handelFilter("Realme")}>Realme</button>
        </div>
        <div className="products">
          {product.map((item, index) => {
            return (
              <div className="productCard" key={index}>
                {item.discount_applied && <div className="sale">Sale</div>}

                <div className="cardImage">
                  <img
                    src={item.image_url}
                    alt={item.model}
                    className="w-auto h-full"
                  />
                </div>
                <div className="cardText">
                  <h2 className="brand">{item.brand}</h2>
                  <h2 className="model">{item.model}</h2>
                  <p>Year of Release: {item.release_year}</p>
                  <ul className="specifications">
                    <li>{`RAM: ${item.specs.ram}`}</li>
                    <li> {`ROM: ${item.specs.storage}`}</li>
                    <li> {`Dsiply: ${item.specs.screen_size}`}</li>
                  </ul>
                  <h2 className="price">
                    Price:{" "}
                    <span
                      className={item.discount_applied ? "discount" : "regular"}
                    >
                      {" "}
                      {` $${item.price}`}
                    </span>
                    {item.discount_applied && (
                      <span className="offer"> ${item.discounted_price} </span>
                    )}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
