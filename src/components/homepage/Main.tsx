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
import phone from "@/assets/icons/phone.webp"


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
                  TRACTĂRI AUTO ORIUNDE ÎN PRAHOVA
               </p>
               <h1>KOT ASISTENȚĂ RUTIERĂ</h1>
               <h2>
                  Probleme pe drum? Sună-ne acum!
               </h2>
               <Link href={`tel:+4${data.phoneLink}`} className={styles.buttonFlex}>
                  <CustomButton
                     fontSize={`${screenWidth > 600 ? "20px" : "16px"}`}
                     padding={`${screenWidth > 600 ? "10px 20px" : "6px 12px"}`}
                  >
                     <div>
                        <Image alt="Telefon" src={phone} />
                        <span>
                           {screenWidth > 600 && "DISPONIBILI ORICAND, "}SUNĂ ACUM - {data.phone}
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
            </div>
         </div>
         <div className={styles.cardContainer}>
            <CustomCard
               icon={lightning}
               title="Simplu și rapid"
            >
               Sărim în ajutorul tău în cel mai scurt timp posibil. Nu te îngrijora, vom fi acolo în cel mai scurt timp posibil.
            </CustomCard>
            <CustomCard
               icon={hours24}
               title="Oriunde și oricând"
            >
               Venim oriunde în Prahova dar și în țară. Contactează-ne la telefon sau pe whatsapp iar noi îți vom răspunde la orice oră.
            </CustomCard>
            <CustomCard
               icon={checked}
               title="Servicii calitative"
            >
               Oferim servicii de calitate superioară. Nu contează cât de avariată este mașina, noi o să ne ocupăm de tractat.
            </CustomCard>
         </div>
      </>
   );
}
