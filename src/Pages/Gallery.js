import React from "react";

const Gallery = ({ img }) => {
  const { url } = img;
  return (
    <div className="col-lg-6">
      <img className="w-100 rounded-2" src={url} alt="" />
    </div>
  );
};

export default Gallery;
