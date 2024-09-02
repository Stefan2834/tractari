import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import map from "@/assets/photo/Vector.png";
import { useDefault } from "@/contexts/useDefault";

export default function Contact() {
   const { screen } = useDefault();

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
            style={{ height: `${screen > 1200 ? "600px" : "auto"}` }}
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
               <TextField
                  id="outlined-basic"
                  label="Numele tău"
                  type="text"
                  variant="outlined"
                  required
                  onChange={(e) => (name.current = e?.target?.value)}
                  sx={{
                     width: "100%",
                     marginBottom: "20px",
                     boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                     borderRadius: "8px",
                     backgroundColor: "#fcfcfc",
                  }}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <PersonOutlineOutlinedIcon />
                        </InputAdornment>
                     ),
                  }}
               />
               <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  required
                  variant="outlined"
                  onChange={(e) => (email.current = e?.target?.value)}
                  sx={{
                     width: "100%",
                     marginBottom: "20px",
                     boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                     borderRadius: "8px",
                     backgroundColor: "#fcfcfc",
                  }}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <EmailOutlinedIcon />
                        </InputAdornment>
                     ),
                  }}
               />
               <TextField
                  id="standard-multiline-static"
                  label="Mesajul tău..."
                  multiline
                  required
                  onChange={(e) => (message.current = e?.target?.value)}
                  sx={{
                     width: "100%",
                     boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                     borderRadius: "8px",
                     backgroundColor: "#fcfcfc",
                  }}
                  rows={12}
                  variant="outlined"
               />
               <Button
                  variant="contained"
                  type="submit"
                  sx={{
                     width: "100%",
                     marginTop: "40px",
                     textTransform: "none",
                     color: "white",
                     backgroundColor: "#F9CB38",
                     fontSize: `${screen > 600 ? "24px" : "18px"}`,
                     boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                     padding: `${screen > 600 ? "10px 28px" : "8px 14px"}`,
                  }}
               >
                  Trimite-ne mesajul tău
               </Button>
            </form>
            <div
               className="mx-8 xl:w-[calc(100%-50px)] w-2/5 xl:my-4"
               style={{ height: `${screen > 1200 ? "500px" : "auto"}` }}
            >
               <img src={map.src} alt="Map" className="w-full h-full object-contain" />
            </div>
         </div>
      </>
   );
}
