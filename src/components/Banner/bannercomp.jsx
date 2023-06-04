import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from "../../Assests/img/anima/1 (1).png";
import img2 from "../../Assests/img/anima/1 (2).png";
import img3 from "../../Assests/img/anima/1 (3).png";
import img4 from "../../Assests/img/anima/1 (4).png";
import img5 from "../../Assests/img/anima/1 (5).png";
import img6 from "../../Assests/img/anima/1 (6).png";

const Banner = () => {
  const images = [img2, img3, img4, img5, img6];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img src={img1} alt="Image 1" className="fixed-image" />
      <div className="image-container">
        {images.map((img, i) => (
          <motion.img
            src={img}
            key={i}
            alt={`Image ${i + 2}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: i === current ? 1 : 0, scale: i === current ? 1 : 1.1 }}
            transition={{ duration: 1 }}
            className="overlay-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;


