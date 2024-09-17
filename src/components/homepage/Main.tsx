//Utilities
import React from "react";
import Link from "next/link";
import { useDefault } from "@/contexts/useDefault";


//Mui Components
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


//Icons
import lightning from "@/assets/icons/lightning.webp";
import hours24 from "@/assets/icons/24.webp";
import checked from "@/assets/icons/checked.webp";
import arrow from "@/assets/icons/arrow.webp"


//Custom Components
import CustomButton from "../custom/CustomButton";
import CustomCard from "../custom/CustomCard";

//Style
import styles from "../../css/modules/main.module.css"

export default function Main() {
   const { screenWidth } = useDefault();

   return (
      <>
         <div className={styles.background} />
         <div className={styles.bar} />
         <div className={styles.element}>
            <div className={styles.flex}>
               <p>
                  TRACTĂRI AUTO ȘI ASISTENȚĂ RUTIERĂ
               </p>
               <h1>KOT ASISTENȚĂ RUTIERĂ</h1>
               <h3 className="font-second">
                  Probleme pe drum? Sună-ne acum!
               </h3>
               <Link href="tel:+40730222643" className="mt-10">
                  <CustomButton
                     fontSize={`${screenWidth > 600 ? "20px" : "16px"}`}
                     padding={`${screenWidth > 600 ? "10px 20px" : "6px 12px"}`}
                  >
                     DISPONIBILI NON STOP, SUNĂ ACUM - 0712 345 678
                  </CustomButton>
               </Link>
               <Link
                  href="https://wa.me/+400730222643"
                  className={styles.linkButton}
                  style={{
                     fontSize: `${screenWidth > 600 ? "16px" : "12px"}`,
                  }}
               >
                  * sau lasă-ne un mesaj pe whatsapp
                  <ArrowRightAltIcon />
                  <WhatsAppIcon />
               </Link>
               <Link href="/" className={styles.more}>
                  <p>Află mai multe</p>
                  <img src={arrow.src} alt="Săgeată" />
               </Link>
            </div>
         </div>
         <div className={styles.cardContainer}>
            <CustomCard
               icon={lightning.src}
               title="Simplu și rapid"
            >
               Sărim în ajutorul tău în cel mai scurt timp posibil. Nu te îngrijora, vom fi acolo cât mai rapid.
            </CustomCard>
            <CustomCard
               icon={hours24.src}
               title="Oriunde și oricând"
            >
               Venim oriunde în țară, la orice oră din zi și din noapte. Nu ezita să ne contactezi.
            </CustomCard>
            <CustomCard
               icon={checked.src}
               title="Servicii calitative"
            >
               Oferim servicii de calitate superioară. Nu contează cât de avariată este mașina, noi o vom tracta.
            </CustomCard>
         </div>
      </>
   );
}
