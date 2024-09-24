import React from 'react'

import styles from "../../css/modules/tarife.module.css"
import Contact from '@/components/homepage/Contact'

export default function Tarife() {
    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <div className={styles.main}>
                <div className={styles.mainText}>
                    Tarife
                </div>
            </div>
            <div className={styles.description}>
                Iată mai jos lista cu prețurile noastre în funcție de mărimea autoturismului tău și de distanța parcursă. 
                Atenție! *Prețurile pot varia dar cel mai bine contactează-ne și lasă-ne detalii despre situația ta iar noi îți facem prețul pe loc.
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
                            <th>Tractare autovehicul de marfa / utlitiare  2500kg</th>
                            <td>300 RON</td>
                            <td>4 RON / KM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Contact />
        </div>
    )
}
