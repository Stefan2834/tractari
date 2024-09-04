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
   const { screenWidth } = useDefault();
   return (
      <>
         <h2 className="w-full text-2xl text-center mb-10 m:text-lg">- RECOMANDĂRILE NOASTRE -</h2>
         <div
            className="w-full flex items-start justify-center mt-8 xl:flex-wrap xl:justify-around"
            style={{ height: "auto" }}
         >
            <CustomReview avatar={avatar1.src} name="Andrei Comșa" value={5.0}>
               De fiecare dată când l-am sunat pe Alin, a venit fără ezitare, chiar și în miez de
               noapte. Super băiat. Nota 10!
            </CustomReview>
            <div className="review-element">
               <div>
                  <p
                     className="mt-2 font-light"
                     style={{
                        fontSize: `${screenWidth > 600 ? "18px" : "14px"}`,
                     }}
                  >
                     Nu știu ce mă făceam fără serviciile prestate de acest băiat. A reușit să ma
                     salveze dintr-o situație inimaginabilă. Recomand!
                  </p>
                  <p
                     className="mt-4 mb-8 font-medium uppercase text-left w-full m:mt-2 m:mb-4"
                     style={{
                        fontSize: `${screenWidth > 600 ? "18px" : "14px"}`,
                     }}
                  >
                     Iosif Ștefan
                  </p>
               </div>
               <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                  size="large"
                  sx={{
                     marginBottom: `${screenWidth > 1200 ? "60px" : "0px"}`,
                     marginTop: `${screenWidth > 1200 ? "0px" : "60px"}`,
                     color: "#E3B626",
                  }}
               />
               <Avatar
                  alt="Remy Sharp"
                  src={avatar2.src}
                  sx={{
                     width: 110,
                     height: 110,
                     bottom: `${screenWidth > 1200 ? "0" : "calc(100% - 110px)"}`,
                     transform: `${screenWidth > 1200 ? "translateY(50%)" : "translateY(-50%)"}`,
                     position: "absolute",
                     scale: `${screenWidth > 600 ? "1" : "0.8"}`,
                  }}
               />
            </div>
            <CustomReview avatar={avatar3.src} name="Mareș Gabriel" value={5.0}>
               Având în vedere că l-am sunat la 2 noaptea, a venit la sute de kilometri distanță
               ca să mă ajute. Nu știu ce mă faceam fără el. Sunați cu încredere!
            </CustomReview>
         </div>
      </>
   );
}
