import { useState } from "react";
import heroImage from "../../../assets/hero-image.jpg";
import product2 from "../../../assets/m1.jpg";
import product3 from "../../../assets/m2.jpg";

const Gallery = () => {
  const images = [heroImage, product2, product3];
  const [selectedImage, setSelectedImage] = useState<any>(images[0]);

  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-4 w-25 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Product"
            onClick={() => setSelectedImage(img)}
            className={` rounded-xl cursor-pointer h-30 ${
              selectedImage === img ? "border" : ""
            }`}
          />
        ))}
      </div>

      <div className="flex-1 ">
        <img src={selectedImage} className="h-100 rounded-xl"></img>
      </div>
    </div>
  );
};

export default Gallery;
