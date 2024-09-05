//Utilities
import React from "react";
import { useDefault } from "@/contexts/useDefault";

//Mui Components
import { Avatar, Rating } from "@mui/material";

//Components
import CustomReview from "../custom/CustomReview";

//Avatars
import avatar1 from "@/assets/reviews-avatars/avatar-1.webp";
import avatar2 from "@/assets/reviews-avatars/avatar-2.webp";
import avatar3 from "@/assets/reviews-avatars/avatar-3.webp";

export default function Review() {
   return (
      <>
         <h2 className="w-full text-2xl text-center mb-10 m:text-lg">- RECOMANDĂRILE NOASTRE -</h2>
         <div
            className="w-full flex items-start justify-center mt-8 xl:flex-wrap xl:justify-around"
            style={{ height: "auto" }}
         >
            <CustomReview avatar={avatar1.src} name="Andrei Comșa" value={5.0} reverse={false}>
               De fiecare dată când l-am sunat pe Alin, a venit fără ezitare, chiar și în miez de
               noapte. Super băiat. Nota 10!
            </CustomReview>
            <CustomReview avatar={avatar2.src} name="Iosif Ștefan" value={4.5} reverse={true}>
               Nu știu ce mă făceam fără serviciile prestate de acest băiat. A reușit să ma
               salveze dintr-o situație inimaginabilă. Recomand!
            </CustomReview>
            <CustomReview avatar={avatar3.src} name="Mareș Gabriel" value={5.0} reverse={false}>
               Având în vedere că l-am sunat la 2 noaptea, a venit la sute de kilometri distanță
               ca să mă ajute. Nu știu ce mă faceam fără el. Sunați cu încredere!
            </CustomReview>
         </div>
      </>
   );
}
