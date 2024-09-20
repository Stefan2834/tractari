//Utilities
import React from "react";

//Components
import CustomReview from "../custom/CustomReview";

//Avatars
import avatar1 from "@/assets/reviews-avatars/avatar-1.webp";
import avatar2 from "@/assets/reviews-avatars/avatar-2.webp";
import avatar3 from "@/assets/reviews-avatars/avatar-3.webp";

//Style
import styles from "../../css/modules/review.module.css"

export default function Review() {
   return (
      <>
         <div className={styles.reviewTitleFlex}>
            <h1 className="title">Ce spun clientii nostri?</h1>
            <h2 className="description">Ne pasă de clienții noștri, și apreciem o muncă de calitate,
               așa că... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
               Aliquam in hendrerit urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            </h2>
         </div>
         <div
            className={styles.reviewContainer}
            style={{ height: "auto" }}
         >
            <CustomReview avatar={avatar1.src} name="Andrei Comșa" value={5.0}>
               De fiecare dată când l-am sunat pe Alin, a venit fără ezitare, chiar și în miez de
               noapte. Super băiat. Nota 10!
            </CustomReview>
            <CustomReview avatar={avatar2.src} name="Iosif Ștefan" value={4.5}>
               Nu știu ce mă făceam fără serviciile prestate de acest băiat. A reușit să ma
               salveze dintr-o situație inimaginabilă. Recomand!
            </CustomReview>
            <CustomReview avatar={avatar3.src} name="Mareș Gabriel" value={5.0}>
               Având în vedere că l-am sunat la 2 noaptea, a venit la sute de kilometri distanță
               ca să mă ajute. Nu știu ce mă faceam fără el. Sunați cu încredere!
            </CustomReview>
         </div>
      </>
   );
}
