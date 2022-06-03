import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import Gallery from "./Gallery";

const Home = () => {
  const product = useContext(ProductContext);
  console.log(product);
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
        <div className="col-lg-6">
          <h6 className="bg-white text-dark p-4 shadow-lg rounded-3">
            <span className="fw-bold">Product Title</span>: {product.title}
          </h6>
          <h6 className="bg-white text-dark p-4 shadow-lg rounded-3">
            <span className="fw-bold">Price</span>:
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
