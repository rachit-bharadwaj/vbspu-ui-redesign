import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const Slideshow = () => {
  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpeg",
    "images/4.jpg",
    "images/5.jpeg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpeg",
    "images/9.jpeg",
    "images/10.jpeg",
    "images/11.jpeg",
    "images/12.jpeg",
    "images/13.jpeg",
    "images/14.jpeg",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,



    prevArrow: (
      <div className="w-7 -mr-7 cursor-pointer">
      <HiChevronLeft className="text-3xl md:text-4xl lg:text-5xl hover:border rounded-full"/>
      </div>
    ),

    nextArrow: (
      <div className="w-7 -ml-7 lg:-ml-14 cursor-pointer">
      <HiChevronRight className="text-3xl md:text-4xl lg:text-5xl hover:border rounded-full"/>
      </div>
    ),
  };

  return (
      <Zoom {...zoomInProperties}>
          {images.map((each, index) => (
              <div key={index} className="flex justify-center w-full h-full">
                  <img src={each} className="w-5/6 lg:w-3/4 object-cover rounded-lg shadow-xl" />
              </div>
          ))}
      </Zoom>
  )
};

export default Slideshow;