//Utilities
import React from "react";

//Components
import CustomReview from "../custom/CustomReview";

//Avatars
import avatar1 from "@/assets/reviews-avatars/avatar-1.webp";
import avatar2 from "@/assets/reviews-avatars/avatar-2.webp";
import avatar3 from "@/assets/reviews-avatars/avatar-3.webp";

//Style
import styles from "../../css/modules/review.module.css";

export default function Review() {
   return (
      <>
         <div className={styles.reviewTitleFlex}>
            <h1 className="title">Ce spun clientii nostri?</h1>
            <h2 className="description">
               Ne pasă profund de clienții noștri și ne străduim să oferim cele mai bune servicii de tractări auto în Prahova.
               Punem accent pe calitate și profesionalism în fiecare intervenție, fie că este vorba de tractări de urgență, asistență rutieră sau transport auto.
               Ne angajăm să fim transparenți și să oferim soluții rapide și eficiente, indiferent de situație.
               Apreciem fiecare părere venită din partea clienților noștri și credem că feedback-ul acestora ne ajută să ne îmbunătățim constant serviciile.
               Mai jos, poți citi câteva dintre recenziile clienților noștri mulțumiți, care au beneficiat de serviciile noastre de tractări în județul Prahova.
               Opiniile lor reflectă angajamentul nostru de a oferi servicii de top în domeniul tractărilor auto.
            </h2>
         </div>
         <div className={styles.reviewContainer} style={{ height: "auto" }}>
            <CustomReview avatar={avatar1.src} name="Costi Cernat" value={5}>
               O firma serioasa cu colaboratori de top si preturi ultraaccesibile! Alin ofera suport
               tehnic si transport la orice ora indiferent de conditiile meteo! apelati cu
               incredere!
            </CustomReview>
            <CustomReview avatar={avatar2.src} name="Claudiu Muc" value={4}>
               Foarte multumit, punctual, profesionist, ok la bani!
            </CustomReview>
            <CustomReview avatar={avatar3.src} name="Veronica Maeschi" value={5}>
               Iti mulțumim frumos pentru ajutor. Promptitudine si Profesionalism
            </CustomReview>
         </div>
      </>
   );
}
