//Utilities
import React, { useRef } from "react";
import { useDefault } from "@/contexts/useDefault";

//Images
import map from "@/assets/map.png";

//Mui components 
import { InputAdornment } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

//Components
import CustomForm from "../custom/CustomForm";

export default function Contact() {
   const { screenWidth } = useDefault();

   const name = useRef<HTMLInputElement | null>(null);
   const email = useRef<HTMLInputElement | null>(null);
   const message = useRef<HTMLInputElement | null>(null);

   return (
      <>
         <h2 className="w-full text-center text-6xl mt-40 font-semibold m:text-3xl">
            Probleme pe drum? <br />
            Contactează-ne acum!
         </h2>
         <p className="w-full text-center font-light text-3xl mt-10 m:text-xl m:mb-4">
            Nu ezita să ne contactezi dacă ai probleme cu mașina sau dacă ai vreo
            <br />
            curiozitate legată de noi. Răspundem la orice oră în cel mai scurt timp posibil.
         </p>
         <div
            className="w-full flex items-start justify-center mt-20 xl:flex-col xl:items-center m:mt-8"
            style={{ height: `${screenWidth > 1200 ? "600px" : "auto"}` }}
         >
            <CustomForm />
            <div
               className="mx-8 xl:w-[calc(100%-50px)] w-2/5 xl:my-4"
               style={{ height: `${screenWidth > 1200 ? "500px" : "auto"}` }}
            >
               <img src={map.src} alt="Map" className="w-full h-full object-contain" />
            </div>
         </div>
      </>
   );
}
