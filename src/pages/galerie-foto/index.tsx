//Utilities
import React from "react";
import Image from "next/image"

//Images
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

//Components
import Contact from "@/components/homepage/Contact";


//Style
import styles from "../../css/modules/gallery.module.css"


const galleryPhotos = [
    image1, image2, image3,
    image4, image5, image6,
    image7, image8, image9,
    image10, image11
]

export default function Gallery() {
    return (
        <>
            <div className={styles.galleryMain}>
                <span className={styles.galleryText}>Galerie foto</span>
            </div>
            <div className={styles.galleryDiv}>
                <span className={styles.galleryDescription}>
                    Ne pasă de clienții noștri, și apreciem o muncă de calitate, 
                    așa că... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut et massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut et massa mi.
                </span>
                <div className={styles.galleryContainer}>
                    {galleryPhotos.map((image: any, index: number) => (
                        <Image className={styles.galleryElement} key={index} src={image} alt="Poză cu mașina de tractare" />
                    ))}
                </div>
                <Contact />
            </div>
        </>
    );
}