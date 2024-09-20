//Utilities
import React from "react";
import Link from "next/link";
import { useDefault } from "@/contexts/useDefault";
import Image from "next/image"


//Mui Components
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


//Icons
import lightning from "@/assets/icons/lightning.webp";
import hours24 from "@/assets/icons/24.webp";
import checked from "@/assets/icons/checked.webp";
import arrow from "@/assets/icons/arrow.webp"
import phone from "@/assets/icons/phone.svg"


//Custom Components
import CustomButton from "../custom/CustomButton";
import CustomCard from "../custom/CustomCard";

//Style
import styles from "../../css/modules/main.module.css"

export default function Main() {
   const { screenWidth, data } = useDefault();

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
               <h2>
                  Probleme pe drum? Sună-ne acum!
               </h2>
               <Link href={`tel:+4${data.phoneLink}`} className="mt-10">
                  <CustomButton
                     fontSize={`${screenWidth > 600 ? "20px" : "16px"}`}
                     padding={`${screenWidth > 600 ? "10px 20px" : "6px 12px"}`}
                  >
                     <div className={styles.buttonFlex}>
                        <Image alt="Telefon" src={phone} />
                        <span>
                           DISPONIBILI ORICAND, SUNĂ ACUM - {data.phone}
                        </span>
                     </div>
                  </CustomButton>
               </Link>
               <Link
                  href={`https://wa.me/+4${data.phoneLink}`}
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
                  <Image src={arrow} alt="Săgeată jos" />
               </Link>
            </div>
         </div>
         <div className={styles.cardContainer}>
            <CustomCard
               icon={lightning}
               title="Simplu și rapid"
            >
               Sărim în ajutorul tău în cel mai scurt timp posibil. Nu te îngrijora, vom fi acolo cât mai rapid. Lorem ipsum Lorem ipsum Lorem ipsum
            </CustomCard>
            <CustomCard
               icon={hours24}
               title="Oriunde și oricând"
            >
               Venim oriunde în țară, la orice oră din zi și din noapte. Nu ezita să ne contactezi. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </CustomCard>
            <CustomCard
               icon={checked}
               title="Servicii calitative"
            >
               Oferim servicii de calitate superioară. Nu contează cât de avariată este mașina, noi o vom tracta. Lorem ipsum Lorem ipsum Lorem ipsum
            </CustomCard>
         </div>
      </>
   );
}
