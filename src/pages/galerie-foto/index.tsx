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
import image12 from "@/assets/carousel/slider-12.webp";
import image13 from "@/assets/carousel/slider-13.webp";
import image14 from "@/assets/carousel/slider-14.webp";
import image15 from "@/assets/carousel/slider-15.webp";
import image16 from "@/assets/carousel/slider-16.webp";
import image17 from "@/assets/carousel/slider-17.webp";
import image18 from "@/assets/carousel/slider-18.webp";
import image19 from "@/assets/carousel/slider-19.webp";
import image20 from "@/assets/carousel/slider-20.webp";
import image21 from "@/assets/carousel/slider-21.webp";
import image22 from "@/assets/carousel/slider-22.webp";
import image23 from "@/assets/carousel/slider-23.webp";
import image24 from "@/assets/carousel/slider-24.webp";
import image25 from "@/assets/carousel/slider-25.webp";
import image26 from "@/assets/carousel/slider-26.webp";
import image27 from "@/assets/carousel/slider-27.webp";
import image28 from "@/assets/carousel/slider-28.webp";
import image29 from "@/assets/carousel/slider-29.webp";
import image30 from "@/assets/carousel/slider-30.webp";
import image31 from "@/assets/carousel/slider-31.webp";
import image32 from "@/assets/carousel/slider-32.webp";



//Components
import Contact from "@/components/homepage/Contact";


//Style
import styles from "../../css/modules/gallery.module.css"


const galleryPhotos = [
    image1, image2, image3,
    image4, image5, image6,
    image7, image8, image9,
    image10, image11, image12,
    image13, image14, image15,
    image16, image17, image18,
    image19, image20, image21,
    image22, image23, image24,
    image25, image26, image27,
    image28, image29, image30,
    image31, image32
]

export default function Gallery() {
    return (
        <>
            <div className={styles.galleryMain}>
                <span className={styles.galleryText}>Galerie foto</span>
            </div>
            <div className={styles.galleryDiv}>
                <span className={styles.galleryDescription}>
                    Suntem transparenți cu clienții noștri asa că, mai jos poți observa poze de la diferite intervenți pe care noi le-am avut.
                    Oferim servicii calitative iar mașina ta este în siguranță cu noi.
                </span>
                <div className={styles.galleryContainer}>
                    {galleryPhotos.map((image: any, index: number) => (
                        <Image className={styles.galleryElement} key={index} src={image} loading="lazy" alt="Poză cu mașina de tractare" />
                    ))}
                </div>
                <Contact />
            </div>
        </>
    );
}