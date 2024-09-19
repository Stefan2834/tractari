//Utilities
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { useDefault } from "@/contexts/useDefault";

//Components
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
import styles from "../../css/modules/slider.module.css"

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
               className={styles.containerMap}
               style={{
                  transform: `translateX(${-(currentElement - 1) * 456 + (screenWidth - 456 * 3) / 2}px)`,
               }}
            >
               {sliders.map((img: any, index: number) => {
                  const rotate: number = currentElement - index;
                  if (rotate === 0) {
                     return (
                        <div>
                           <Image src={img} alt="Poză cu mașina de tractare" />
                        </div>
                     );
                  } else {
                     return (
                        <div
                           onClick={() => setCurrentElement(index)}
                           className={styles.sliderInactive}
                           style={{
                              filter: `brightness(${1 / Math.abs(rotate / 0.6)}`,
                           }}
                        >
                           <Image src={img} alt="Poză cu mașina de tractare" />
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
               <Image src={leftArrow} alt="Săgeată stânga" className={styles.sliderLeft} />
            </div>
            <div
               className={styles.sliderButton}
               onClick={() =>
                  currentElement < sliders.length - 1
                     ? setCurrentElement((c) => c + 1)
                     : setCurrentElement(0)
               }
            >
               <Image src={rightArrow} alt="Săgeată dreapta" className={styles.sliderRight} />
            </div>
         </div>
         <div className={styles.buttonMore}>
            <Link href="/galerie-foto">
               <CustomButton
                  padding={`${screenWidth > 600 ? "14px 110px" : "10px 40px"}`}
                  fontSize={`${screenWidth > 600 ? "22px" : "18px"}`}
               >
                  <h1>
                     Vezi întreaga galerie foto!
                  </h1>
               </CustomButton>
            </Link>
         </div>
      </>
   );
}
