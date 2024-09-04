//Utilities
import React, { useState } from "react";
import Link from "next/link";
import { useDefault } from "@/contexts/useDefault";

//Components
import { Button } from "@mui/material";
import CustomButton from "../custom/CustomButton";

//Carousel
import photo1 from "@/assets/carousel/slider-1.webp";
import photo2 from "@/assets/carousel/slider-2.webp";
import photo3 from "@/assets/carousel/slider-3.webp";
import photo4 from "@/assets/carousel/slider-4.webp";
import photo5 from "@/assets/carousel/slider-5.webp";
import photo6 from "@/assets/carousel/slider-6.webp";
import photo7 from "@/assets/carousel/slider-7.webp";
import photo8 from "@/assets/carousel/slider-8.webp";
import photo9 from "@/assets/carousel/slider-9.webp";
import photo10 from "@/assets/carousel/slider-10.webp";
import photo11 from "@/assets/carousel/slider-11.webp";

import leftArrow from "@/assets/icons/arrow.webp";
import rightArrow from "@/assets/icons/arrow.webp";

export default function Slider() {
   const { screenWidth } = useDefault();
   const [currentElement, setCurrentElement] = useState<number>(2);

   const sliders = [
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
      photo11,
   ];

   return (
      <>
         <div className="mt-32 w-screen relative" style={{ height: "800px" }}>
            <div
               className="absolute w-full h-full overflow-visible grad-slider"
               style={{
                  clipPath: "polygon(0 30%, 100% 0, 100% 70%, 0 100%)",
               }}
            />
            <div
               className="slider-container"
               style={{
                  transform: `translateX(${-(currentElement - 1) * 456 + (screenWidth - 456 * 3) / 2
                     }px)`,
               }}
            >
               {sliders.map((img: any, index: number) => {
                  const rotate: number = currentElement - index;
                  if (rotate === 0) {
                     return (
                        <div
                           className="slider slider-active"
                           style={{
                              transform: `translateY(${rotate * 150}px)`,
                           }}
                        >
                           <img src={img.src} alt="avatar" className="slider-img" />
                        </div>
                     );
                  } else {
                     return (
                        <div
                           onClick={() => setCurrentElement(index)}
                           className="slider slider-inactive"
                           style={{
                              transform: `translateY(${rotate * 150}px)`,
                              filter: `brightness(${1 / Math.abs(rotate / 0.6)}`,
                           }}
                        >
                           <img src={img.src} alt="avatar" className="slider-img" />
                        </div>
                     );
                  }
               })}
            </div>
         </div>
         <div className="w-full flex items-center justify-center -mt-32 relative z-10 text-white">
            <div
               className="w-16 h-16 mx-4 rounded-full flex items-center justify-center cursor-pointer"
               style={{
                  boxShadow: "0px 2px 4px rgb(0,0,0,0.15)",
                  backgroundColor: "#F9CB38",
               }}
               onClick={() => {
                  console.log(currentElement);
                  currentElement === 0
                     ? setCurrentElement(sliders.length - 1)
                     : setCurrentElement((c) => c - 1);
               }}
            >
               <img src={leftArrow.src} alt="Left Arrow" className="h-7 w-auto" />
            </div>
            <div
               className="w-16 h-16 mx-4 rounded-full flex items-center justify-center cursor-pointer"
               style={{
                  boxShadow: "0px 2px 4px rgb(0,0,0,0.15)",
                  backgroundColor: "#F9CB38",
               }}
               onClick={() =>
                  currentElement < sliders.length - 1
                     ? setCurrentElement((c) => c + 1)
                     : setCurrentElement(0)
               }
            >
               <img src={rightArrow.src} alt="Right arrow" className="h-7 w-auto rotate-180 relative" />
            </div>
         </div>
         <div className="mt-20 w-full flex items-center justify-center">
            <Link href="/gallery">
               <CustomButton
                  padding={`${screenWidth > 600 ? "14px 110px" : "10px 40px"}`}
                  fontSize={`${screenWidth > 600 ? "22px" : "18px"}`}
               >
                  Vezi Galeria noastră foto!
               </CustomButton>
            </Link>
         </div>
      </>
   );
}
