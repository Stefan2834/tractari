//Utilities
import React from "react";
import { useDefault } from "@/contexts/useDefault";
import Link from "next/link";
import Image from "next/image";

//Styles
import styles from "../../css/modules/contact.module.css"

//Images
import mailImage from "@/assets/icons/email.webp"
import facebookImage from "@/assets/icons/facebook.webp"
import whatsappImage from "@/assets/icons/whatsapp.webp"
import phoneImage from "@/assets/icons/phone.png"
import map from "@/assets/map.png";

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
                        <Image className={styles.img} src={phoneImage} alt="Telefon" />
                     </div>
                     <span className={styles.span}>+4 075 475 4215</span>
                  </Link>
                  <Link href="/" className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <Image className={styles.img} src={mailImage} alt="Gmail" />
                     </div>
                     <span className={styles.span}>contact@kotasistenta.ro</span>
                  </Link>
                  <Link href="/" className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <Image className={styles.img} src={facebookImage} alt="Facebook" />
                     </div>
                     <span className={styles.span}>kotasistenta</span>
                  </Link>
                  <Link href="/" className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <Image className={styles.img} src={whatsappImage} alt="Whatsapp" />
                     </div>
                     <span className={styles.span}>Whatsapp</span>
                  </Link>
               </div>
               <div
                  className={styles.image}
                  style={{ height: `${screenWidth > 1200 ? "500px" : "auto"}` }}
               >
                  <Image src={map} alt="Mapă" className="w-full h-full object-contain" />
               </div>
            </div >
         </div>
      </>
   );
}
