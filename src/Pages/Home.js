import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import Gallery from "./Gallery";

const Home = () => {
  const product = useContext(ProductContext);
  console.log(product.gallery);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="row g-4">
            {product?.gallery?.map((img, index) => (
              <Gallery img={img} key={index} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 bg-danger">
          <h2>Right sigth</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
