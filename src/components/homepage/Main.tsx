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


//Custom Components
import CustomButton from "../custom/CustomButton";
import CustomCard from "../custom/CustomCard";

export default function Main() {
   const { screenWidth } = useDefault();

   return (
      <>
         <div className="bg-main" />
         <div className="main-bar" />
         <div className="main-element">
            <div className="main-flex">
               <p
                  className="mb-4 font-semibold m:mb-2"
                  style={{
                     fontSize: `${screenWidth > 600 ? "20px" : "16px"}`,
                  }}
               >
                  TRACTĂRI AUTO ȘI ASISTENȚĂ RUTIERĂ
               </p>
               <h1 className="mt-4 text-8xl font-bold m:text-5xl">KOT ASISTENȚĂ RUTIERĂ</h1>
               <h3 className="font-second text-3xl font-normal m:text-lg">
                  Probleme pe drum? Sună-ne acum!
               </h3>
               <Link href="tel:+40730222643" className="mt-10">
                  <CustomButton
                     fontSize={`${screenWidth > 600 ? "20px" : "16px"}`}
                     padding={`${screenWidth > 600 ? "10px 20px" : "6px 12px"}`}
                  >
                     DISPONIBILI NON STOP, SUNĂ ACUM
                  </CustomButton>
               </Link>
               <Link
                  href="https://wa.me/+400730222643"
                  className="mt-2 text-lg font-normal hover:underline"
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
         <Link href="/">
            <div className="main-absolute" />
         </Link>
         <div className="main-absolute-flex">
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
