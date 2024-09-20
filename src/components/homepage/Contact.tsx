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
import phoneImage from "@/assets/icons/phone.svg"
import map from "@/assets/map.png";

export default function Contact() {
   const { screenWidth, data } = useDefault();

   return (
      <>
         <div className={styles.container} id="contact">
            <h2 className="title">
               Probleme pe drum? <br />
               Sună-ne acum!
            </h2>
            <p className="description">
               Nu ezita să ne contactezi dacă ai probleme cu mașina sau dacă ai vreo
               curiozitate legată de noi. Răspundem la orice oră în cel mai scurt timp posibil.
            </p>
            <div
               className={styles.form}
               style={{ height: `${screenWidth > 1200 ? "600px" : "auto"}` }}
            >
               <div className={styles.contactFlex}>
                  <Link href={`tel:+4${data.phoneLink}`} className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <Image className={styles.img} src={phoneImage} alt="Logo telefon" />
                     </div>
                     <span className={styles.span}>{data.phone}</span>
                  </Link>
                  <Link href={data.emailLink} className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <Image className={styles.img} src={mailImage} alt="Logo email" />
                     </div>
                     <span className={styles.span}>{data.email}</span>
                  </Link>
                  <Link href={data.facebookLink} className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <Image className={styles.img} src={facebookImage} alt="Logo facebook" />
                     </div>
                     <span className={styles.span}>{data.facebook}</span>
                  </Link>
                  <Link href={`https://wa.me/+4${data.phoneLink}`} className={styles.containerFlex}>
                     <div className={styles.circle}>
                        <Image className={styles.img} src={whatsappImage} alt="Logo whatsapp" />
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
