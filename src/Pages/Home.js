import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { ProductContext } from "../Context/Context";
import Gallery from "./Gallery";

const Home = () => {
  const { product, productDitchpatch, color } = useContext(ProductContext);
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
          <h6 className="bg-white text-dark p-4 shadow-lg rounded-3">
            <span className="fw-bolder mt-2">Color</span>: {color}
            <div className="d-flex">
              <div className="mt-2 me-3">
                <Card
                  onClick={() =>
                    productDitchpatch({
                      type: "COLORNAME",
                      payload: product?.variation?.props[0]?.values[0]?.title,
                    })
                  }
                  style={
                    color === "Black"
                      ? { width: "6rem", border: "3px solid red" }
                      : { width: "6rem" }
                  }
                >
                  <Card.Img
                    variant="top"
                    className="p-2"
                    src={product?.variation?.props[0]?.values[0]?.thumb}
                  />
                </Card>
              </div>
              <div className="mt-2">
                <Card
                  onClick={() =>
                    productDitchpatch({
                      type: "COLORNAME",
                      payload: product?.variation?.props[0]?.values[1]?.title,
                    })
                  }
                  style={{ width: "6rem" }}
                >
                  <Card.Img
                    variant="top"
                    className="p-2"
                    src={product?.variation?.props[0]?.values[1]?.thumb}
                  />
                </Card>
              </div>
            </div>
          </h6>
          <h6 className="bg-white text-dark p-4 shadow-lg rounded-3">
            <span className="fw-bold">Size</span>:
            <div className="mt-3">
              {product?.variation?.props[1]?.values.map((value) => (
                <button className="btn btn-light w-25 shadow-lg m-2">
                  {value.title}
                </button>
              ))}
            </div>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
