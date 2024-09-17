//Utilities
import React from "react";
import { useDefault } from "@/contexts/useDefault";

//Images
import map from "@/assets/map.png";

//Components
import CustomForm from "../custom/CustomForm";

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
         <div className={styles.container}>
            <h2 className={styles.text}>
               Probleme pe drum? <br />
               Contactează-ne acum!
            </h2>
            <p className={styles.paragraph}>
               Nu ezita să ne contactezi dacă ai probleme cu mașina sau dacă ai vreo
               <br />
               curiozitate legată de noi. Răspundem la orice oră în cel mai scurt timp posibil.
            </p>
            <div
               className={styles.form}
               style={{ height: `${screenWidth > 1200 ? "600px" : "auto"}` }}
            >
               <div className={styles.contactFlex}>
                  <div className={styles.containerFlex}>
                     <Link href="/" className={styles.circle}>
                        <img className={styles.img} src={phoneImage.src} />
                     </Link>
                     <span className={styles.span}>+4 075 475 4215</span>
                  </div>
                  <div className={styles.containerFlex}>
                     <Link href="/" className={styles.circle}>
                        <img className={styles.img} src={mailImage.src} />
                     </Link>
                     <span className={styles.span}>contact@kotasistenta.ro</span>
                  </div>
                  <div className={styles.containerFlex}>
                     <Link href="/" className={styles.circle}>
                        <img className={styles.img} src={facebookImage.src} />
                     </Link>
                     <span className={styles.span}>kotasistenta</span>
                  </div>
                  <div className={styles.containerFlex}>
                     <Link href="/" className={styles.circle}>
                        <img className={styles.img} src={whatsappImage.src} />
                     </Link>
                     <span className={styles.span}>Whatsapp</span>
                  </div>
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
