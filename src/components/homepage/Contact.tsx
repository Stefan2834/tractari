//Utilities
import React from "react";
import { useDefault } from "@/contexts/useDefault";

//Images
import map from "@/assets/map.png";

//Styles
import styles from "../../css/modules/contact.module.css"

import Link from "next/link";

//Images
import mailImage from "@/assets/icons/email.webp"
import facebookImage from "@/assets/icons/facebook.webp"
import whatsappImage from "@/assets/icons/whatsapp.webp"
import phoneImage from "@/assets/icons/phone.png"

export default function Contact() {
   const { screenWidth } = useDefault();

   return (
      <>
         <div className={styles.container} id="contact">
            <h2 className={styles.text}>
               Probleme pe drum? <br />
               Contactează-ne acum!
            </h2>
            <p className={styles.paragraph}>
               Nu ezita să ne contactezi dacă ai probleme cu mașina sau dacă ai vreo
               curiozitate legată de noi. Răspundem la orice oră în cel mai scurt timp posibil.
            </p>
            <div
               className={styles.form}
               style={{ height: `${screenWidth > 1200 ? "600px" : "auto"}` }}
            >
               <div className={styles.contactFlex}>
                  <Link href="/" className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <img className={styles.img} src={phoneImage.src} />
                     </div>
                     <span className={styles.span}>+4 075 475 4215</span>
                  </Link>
                  <Link href="/" className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <img className={styles.img} src={mailImage.src} />
                     </div>
                     <span className={styles.span}>contact@kotasistenta.ro</span>
                  </Link>
                  <Link href="/" className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <img className={styles.img} src={facebookImage.src} />
                     </div>
                     <span className={styles.span}>kotasistenta</span>
                  </Link>
                  <Link href="/" className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <img className={styles.img} src={whatsappImage.src} />
                     </div>
                     <span className={styles.span}>Whatsapp</span>
                  </Link>
               </div>
               <div
                  className={styles.image}
                  style={{ height: `${screenWidth > 1200 ? "500px" : "auto"}` }}
               >
                  <img src={map.src} alt="Map" className="w-full h-full object-contain" />
               </div>
            </div >
         </div>
      </>
   );
}
