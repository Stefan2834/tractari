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

//Style
import styles from "../../css/slider.module.css"

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
         <div className={styles.container}>
            <div
               className={`${styles.containerClipPath} grad-slider`}
            />
            <div
               className="slider-container"
               style={{
                  transform: `translateX(${-(currentElement - 1) * 456 + (screenWidth - 456 * 3) / 2}px)`,
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
         <div className={styles.buttonContainer}>
            <div
               className={styles.sliderButton}
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
               className={styles.sliderButton}
               onClick={() =>
                  currentElement < sliders.length - 1
                     ? setCurrentElement((c) => c + 1)
                     : setCurrentElement(0)
               }
            >
               <img src={rightArrow.src} alt="Right arrow" className="h-7 w-auto rotate-180 relative" />
            </div>
         </div>
         <div className={styles.buttonMore}>
            <Link href="/galerie-foto">
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
