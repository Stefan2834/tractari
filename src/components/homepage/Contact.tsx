//Utilities
import React, { useRef } from "react";
import { useDefault } from "@/contexts/useDefault";

//Images
import map from "@/assets/map.png";

//Mui components 
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

//Components
import CustomButton from "../custom/CustomButton";
import CustomInput from '../custom/CustomInput';

export default function Contact() {
   const { screenWidth } = useDefault();

   const name = useRef<any>();
   const email = useRef<any>();
   const message = useRef<any>();

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
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  console.log("name:", name?.current);
                  console.log("email:", email?.current);
                  console.log("message", message?.current);
               }}
               className="w-1/3 h-full mx-8 flex items-center justify-start flex-col xl:w-[calc(100%-50px)] xl:justify-center"
            >
               <CustomInput id="outlined-basic" ref={name} label="Numele tău">
                  <InputAdornment position="start">
                     <PersonOutlineOutlinedIcon />
                  </InputAdornment>
               </CustomInput>
               <CustomInput id="outlined-basic" ref={email} label="Email">
                  <InputAdornment position="start">
                     <EmailOutlinedIcon />
                  </InputAdornment>
               </CustomInput>
               <CustomInput id="standard-multiline-static" ref={message} label="Mesajul tău..." multiline={true} rows={12} />
               <span className="mt-4 w-full">
                  <CustomButton
                     fontSize={`${screenWidth > 600 ? "24px" : "18px"}`}
                     padding={`${screenWidth > 600 ? "10px 28px" : "8px 14px"}`}
                     width="100%"
                  >
                     Trimite-ne mesajul tău
                  </CustomButton>
               </span>
            </form>
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
