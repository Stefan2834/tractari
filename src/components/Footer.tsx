//Utilities
import React from "react";
import Link from "next/link";
import { useDefault } from "@/contexts/useDefault";


//Mui Components
import PhoneIcon from "@mui/icons-material/Phone";

//Components
import CustomButton from "./custom/CustomButton";


//Images
import email from "../assets/icons/email.webp";
import whatsapp from "../assets/icons/whatsapp.webp";
import facebook from "../assets/icons/facebook.webp";
import logo from "../assets/logo.png";

//Style
import styles from "../css/modules/footer.module.css"


export default function Footer() {
   const { screenWidth } = useDefault();

   return (
      <footer className="bg-white">
         <div className={`${styles.footer} grad-footer`}>
            <Link href="/">
               <img src={logo.src} alt="logo" className="w-64" />
            </Link>
            <Link href="tel:+40730222643">
               <CustomButton
                  fontSize={`${screenWidth > 600 ? "18px" : "14px"}`}
                  padding={`${screenWidth > 900 ? "14px 20px" : "8px 16px"}`}
               >
                  <PhoneIcon />
                  DISPONIBILI NON STOP, SUNĂ ACUM - 0712 345 678
               </CustomButton>
            </Link>
            <div className={styles.containerLink}>
               <Link href="/" className={styles.link}>
                  Cine suntem?
               </Link>
               <Link href="/gallery" className={styles.link}>
                  Galerie foto
               </Link>
            </div>
            <div className={styles.containerMedia}>
               <Link href="/">
                  <img
                     src={whatsapp.src}
                     alt="Whatsapp"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
               <Link href="/">
                  <img
                     src={email.src}
                     alt="Email"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
               <Link href="/">
                  <img
                     src={facebook.src}
                     alt="Facebook"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
            </div>
         </div>
         <div className={styles.bottomContainer}>
            <p className={styles.bottomText}>@2024 - All rights reserved</p>
            <p className={styles.bottomText}>
               Designed and Developed by {" "}
               <Link href="/" className="underline">Iosif Ștefan</Link> &{" "}
               <Link href="/" className="underline">Mareș Gabriel</Link>
            </p>
         </div>
      </footer>
   );
}
