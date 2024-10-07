//Utilities
import React from "react";
import Link from "next/link";
import { useDefault } from "@/contexts/useDefault";
import Image from "next/image";

//Components
import CustomButton from "./custom/CustomButton";

//Images
import email from "../assets/icons/email.webp";
import whatsapp from "../assets/icons/whatsapp.webp";
import facebook from "../assets/icons/facebook.webp";
import logo from "../assets/logo.webp";
import phone from "../assets/icons/phone.webp";

import sol from "../assets/sol.webp";
import sal from "../assets/sal.webp";

//Style
import styles from "../css/modules/footer.module.css";

export default function Footer() {
   const { screenWidth, data } = useDefault();

   return (
      <footer className="bg-white">
         <div className={`${styles.footer} grad-footer`}>
            <Link href="/">
               <Image src={logo} alt="Logo" className="w-64" />
            </Link>
            <Link href={`tel:+4${data.phoneLink}`}>
               <CustomButton
                  fontSize={`${screenWidth > 600 ? "18px" : "14px"}`}
                  padding={`${screenWidth > 900 ? "14px 20px" : "8px 16px"}`}
               >
                  <div className={styles.buttonFlex}>
                     <span>
                        {screenWidth > 600 && "DISPONIBILI NON STOP, "}SUNĂ ACUM - {data.phone}
                     </span>
                  </div>
               </CustomButton>
            </Link>
            <div className={styles.containerLink}>
               <Link href={data.tarifePage} className={styles.link}>
                  Tarife
               </Link>
               <Link href={data.galleryPage} className={styles.link}>
                  Galerie foto
               </Link>
            </div>
            <div className={styles.containerMedia}>
               <Link href={`https://wa.me/+4${data.phoneLink}`}>
                  <Image
                     src={whatsapp}
                     alt="Logo whatsapp"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
               <Link href={data.emailLink}>
                  <Image
                     src={email}
                     alt="Logo email"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
               <Link href={data.facebookLink}>
                  <Image
                     src={facebook}
                     alt="Logo facebook"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
            </div>
            <div className={styles.anpcContainer}>
               <Link href="https://anpc.ro/ce-este-sal/">
                  <Image
                     src={sal}
                     width="201"
                     height="50"
                     alt="Soluționarea alternativă a litigiilor"
                  />
               </Link>
               <Link href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
                  <Image src={sol} width="201" height="50" alt="Soluționarea online a litigiilor" />
               </Link>
            </div>
         </div>
         <div className={styles.bottomContainer}>
            <p className={styles.bottomText}>@2024 - All rights reserved</p>
            <p className={styles.bottomText}>
               Designed and Developed by{" "}
               <Link href="https://www.linkedin.com/in/stefan2834/" className="underline">
                  Iosif Ștefan
               </Link>{" "}
               &{" "}
               <Link href="https://www.linkedin.com/in/mares-gabriel/" className="underline">
                  Mareș Gabriel
               </Link>
            </p>
         </div>
      </footer>
   );
}
