import React from "react";
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

export default function Gallery() {
    return (
        <>
            <div className="gallery-main">
                <span className="gallery-text">Galerie foto</span>
            </div>
            <div className="w-full flex items-center justify-center flex-col px-6">
                <span className="gallery-description">
                    Ne pasă de clienții noștri, și apreciem o muncă de calitate, așa că... <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
                <div className="flex items-start justify-around w-full h-auto flex-wrap">
                    <div className="gallery-column">
                        <img src={image1.src} className="grid-img" />
                        <img src={image2.src} className="grid-img" />
                        <img src={image3.src} className="grid-img" />
                        <img src={image4.src} className="grid-img" />
                    </div>
                    <div className="gallery-column">
                        <img src={image5.src} className="grid-img" />
                        <img src={image6.src} className="grid-img" />
                        <img src={image7.src} className="grid-img" />
                    </div>
                    <div className="gallery-column">
                        <img src={image8.src} className="grid-img" />
                        <img src={image9.src} className="grid-img" />
                        <img src={image10.src} className="grid-img" />
                        <img src={image11.src} className="grid-img" />
                    </div>
                    <div className="gallery-column">
                        <img src={image8.src} className="grid-img" />
                        <img src={image9.src} className="grid-img" />
                        <img src={image10.src} className="grid-img" />
                        <img src={image11.src} className="grid-img" />
                    </div>
                </div>
            </div>
        </>
    );
}

