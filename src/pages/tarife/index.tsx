import React from "react";

import styles from "../../css/modules/tarife.module.css";
import Contact from "@/components/homepage/Contact";
import Head from "next/head";

export default function Tarife() {
   return (
      <>
         <Head>
            <title>Tarife - Kot Asistență - Tractări 24/7 Prahova</title>
         </Head>
         <div className="w-full flex items-center justify-center flex-col">
            <div className={styles.main}>
               <div className={styles.mainText}>Tarife</div>
            </div>
            <div className={styles.description}>
               Mai jos vei găsi lista cu prețurile noastre, stabilite în funcție de mărimea autoturismului și de distanța parcursă. 
               Punem accent pe transparență și oferim soluții personalizate pentru fiecare client, 
               astfel încât să primești cel mai bun raport calitate-preț pentru serviciile de tractări auto în Prahova.
               Atenție! Prețurile afișate pot varia în funcție de complexitatea situației. 
               Cel mai bine este să ne contactezi direct și să ne oferi detalii despre problema ta. 
               Echipa noastră îți va face o ofertă personalizată pe loc, astfel încât să te asiguri că primești cel mai corect preț pentru intervenția noastră.
            </div>
            <div className={styles.tableContainer}>
               <table className={styles.table}>
                  <thead>
                     <tr>
                        <th>Servicii</th>
                        <td>Preț local</td>
                        <td>Preț în afara localității</td>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th>Tractare autoturism &#62; 1500kg</th>
                        <td>200 RON</td>
                        <td>3 RON / KM</td>
                     </tr>
                     <tr>
                        <th>Tractare autoturism &#62; 2000kg</th>
                        <td>250 RON</td>
                        <td>3 RON / KM</td>
                     </tr>
                     <tr>
                        <th>Tractare autovehicul de marfa / utlitiare 2500kg</th>
                        <td>300 RON</td>
                        <td>4 RON / KM</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <Contact />
         </div>
      </>
   );
}
