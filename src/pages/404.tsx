import React from 'react'

import styles from "../css/modules/404.module.css"
import CustomButton from '@/components/custom/CustomButton'
import Link from 'next/link'

export default function Custom404() {
    return (
        <>
            <div className={styles.main}>
                <span className={styles.mainText}>
                    Te-ai pierdut...<br />
                    Te tractăm noi?
                </span>
            </div>
            <div className={styles.element}>
                <div className={styles.photo}>
                    <span className={styles.errorCode}>404</span>
                    <span className={styles.description}>
                        Ne pasă de clienții noștri, și apreciem o muncă de calitate, așa că...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <Link href="/">
                        <CustomButton>
                            <span className={styles.buttonText}>
                                Haide să te tractăm acasă
                            </span>
                        </CustomButton>
                    </Link>
                </div>
            </div>
        </>
    )
}
