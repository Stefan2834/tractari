import React from 'react'

import image1 from "@/assets/carousel/slider-1.webp";
import image2 from "@/assets/carousel/slider-2.webp";
import image3 from "@/assets/carousel/slider-3.webp";
import image4 from "@/assets/carousel/slider-4.webp";
import image5 from "@/assets/carousel/slider-5.webp";
import image6 from "@/assets/carousel/slider-6.webp";
import image7 from "@/assets/carousel/slider-7.webp";
import image8 from "@/assets/carousel/slider-8.webp";
import image9 from "@/assets/carousel/slider-9.webp";
import image10 from "@/assets/carousel/slider-10.webp";
import image11 from "@/assets/carousel/slider-11.webp";

export default function test() {
    return (
        <div className='gal-app'>
            <div className='gal-card'>
                <img src={image1.src} />
                <img src={image2.src} />
                <img src={image3.src} />
                <img src={image4.src} />
                <img src={image5.src} />
                <img src={image6.src} />
                <img src={image7.src} />
                <img src={image8.src} />
                <img src={image9.src} />
                <img src={image10.src} />
                <img src={image11.src} />
            </div>
        </div>
    )
}
