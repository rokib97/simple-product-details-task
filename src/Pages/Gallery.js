import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";

const Gallery = ({ img }) => {
  const { image, color, size } = useContext(ProductContext);
  console.log(image);

  const { url } = img;
  return (
    <div className="col-lg-6">
      <img
        className="w-100 rounded-2"
        src={color && size ? image : url}
        alt=""
      />
    </div>
  );
};

export default Gallery;
