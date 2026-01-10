import React, { useEffect, useState } from "react";
import image1 from "../images/Screenshot (146).png";
import image2 from "../images/Screenshot (132).png";
import image3 from "../images/Screenshot (135).png";
import image4 from "../images/Screenshot (131).png";
import image5 from "../images/Screenshot (134).png";
import image6 from "../images/Screenshot (137).png";
import image7 from "../images/Screenshot (147).png";
import image8 from "../images/Screenshot (145).png";


import "../Styles/imagesSlider.css";
function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  

  

  const images = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
  ];
    useEffect(()=>{
      const IntervalID = setInterval(()=>{
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      },3000);
      return ()=> clearInterval(IntervalID)
  }, [images.length])
  // function handlesNext() {
  //   setImageIndex((NextIndex) => (NextIndex + 1) % images.length);
  // }
  // function handlesPrev() {
  //   setImageIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // }
  function handleIndicator(index){
      setImageIndex(index)
  }
  
  return (
    <div className="Image_Slider_container">
      
        {images &&
          images.map((image, index) => (
            <img
              src={image.src}
              alt=""
              key={image.id}
              className={index === imageIndex ? "Image_active" : "none"}
            />
          ))}
      
     
      <span className="indicators"> {images &&
          images.map((image, index) => (
            <button
              className={
                imageIndex === index ? "active" : "inactive"
              }
            onClick={()=> handleIndicator(index)}></button>
          ))}</span>
          <div className="iNTRO">
            <h1 className="title">IT'S TIME TO</h1>
            <h1 className="another_title">GET BACK TO SCHOOL</h1>
            <h2 className="intor_subtitle">CHECK OUT OUR NEW PROGRAMS</h2>
          </div>
    </div>
  );
}
export default ImageSlider;
