
import imagem1 from "../../Assests/img/7294743.png";
import imagem2 from "../../Assests/img/7294745.png";
import imagem3 from "../../Assests/img/7294765.png";
import imagem4 from "../../Assests/img/7309669.png";
import imagem5 from "../../Assests/img/7309676.png";
import imagem6 from "../../Assests/img/7309684.png";
import imagem7 from "../../Assests/img/7309686.png";
import imagem8 from "../../Assests/img/7309711.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContainerAvatar } from "./style"

export const Avatar = () => {
  const imagens = [
    imagem1,
    imagem7,
    imagem2,   
    imagem3,
    imagem8,
    imagem4,
    imagem5,
    imagem6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);  
    return () => clearInterval(interval);  
  }, []);

  return (
    <ContainerAvatar>
      <div className="carousel-container">
      <motion.img
          key={currentIndex}
          src={imagens[currentIndex]}
          alt=""
          className="carousel-image"
          initial={{ opacity: 0, scale: 0.9 }}  
          animate={{ opacity: 1, scale: 1 }}  
          exit={{ opacity: 0, scale: 0.9 }} 
          transition={{ duration: 1, ease: "easeInOut" }}  
        />
      </div>
    
    </ContainerAvatar>
  );
};