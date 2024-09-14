//Utilities
import React from "react";
import { useDefault } from "@/contexts/useDefault";

//Images
import map from "@/assets/map.png";

//Components
import CustomForm from "../custom/CustomForm";

//Styles
import styles from "../../css/modules/contact.module.css"

export default function Contact() {
   const { screenWidth } = useDefault();

   return (
      <>
         <h2 className={styles.text}>
            Probleme pe drum? <br />
            Contactează-ne acum!
         </h2>
         <p className={styles.paragraph}>
            Nu ezita să ne contactezi dacă ai probleme cu mașina sau dacă ai vreo
            <br />
            curiozitate legată de noi. Răspundem la orice oră în cel mai scurt timp posibil.
         </p>
         <div
            className={styles.form}
            style={{ height: `${screenWidth > 1200 ? "600px" : "auto"}` }}
         >
            <CustomForm />
            <div
               className={styles.image}
               style={{ height: `${screenWidth > 1200 ? "500px" : "auto"}` }}
            >
               <img src={map.src} alt="Map" className="w-full h-full object-contain" />
            </div>
         </div>
      </>
   );
}
