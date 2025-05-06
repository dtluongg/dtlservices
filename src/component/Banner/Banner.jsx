import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = ({images = []}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="banner-container">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`banner-${idx}`}
          className={`banner-img${idx === current ? " active" : ""}`}
        />
      ))}
      <div className="banner-dots">
        {images.map((_, idx) => (
          <span key={idx} className={idx === current ? "dot active" : "dot"}></span>
        ))}
      </div>
    </div>
  );
};

export default Banner; 