import React from 'react'

import styles from "../css/404.module.css"
import CustomButton from '@/components/custom/CustomButton'

export default function Custom404() {
    return (
        <>
            <div className={styles.main}>
                <span className={styles.mainText}>
                    Te-ai pierdut...<br />
                    Te tractăm noi?
                </span>
            </div>
            <div className='flex items-center justify-center'>
                <div className={styles.photo}>
                    <span className={styles.errorCode}>404</span>
                    <span className={styles.description}>
                        Ne pasă de clienții noștri, și apreciem o muncă de calitate, așa că...<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <CustomButton>
                        Click aici ca să te tractăm acasa
                    </CustomButton>
                </div>
            </div>
        </>
    )
}
