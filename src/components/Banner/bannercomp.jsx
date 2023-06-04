import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../../Assests/img/anima/1 (1).png"
import img2 from "../../Assests/img/anima/1 (2).png"
import img3 from "../../Assests/img/anima/1 (3).png"
import img4 from "../../Assests/img/anima/1 (4).png"
import img5 from "../../Assests/img/anima/1 (5).png"
import img6 from "../../Assests/img/anima/1 (6).png"

const Banner = () => {
  const images = [img2, img3, img4, img5, img6]; 

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className="banner">
      <img src={img1} alt="Image 1" className="fixed-image" />
      <div className="image-container">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Image ${index + 2}`}
              initial="initial"
              animate="animate"
              variants={imageVariants}
              className="overlay-image"
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
              style={{ zIndex: images.length - index }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Banner;

