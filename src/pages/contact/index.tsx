//Utilities
import React from 'react'
import Link from 'next/link'

//Styles
import styles from "../../css/modules/contact.module.css"

//Custom
import CustomForm from '@/components/custom/CustomForm'

//Images
import mailImage from "@/assets/icons/email.webp"
import facebookImage from "@/assets/icons/facebook.webp"
import whatsappImage from "@/assets/icons/whatsapp.webp"
import phoneImage from "@/assets/icons/phone.png"


export default function Contact() {
    return (
        <>
            <div className={styles.main}>
                <span className={styles.mainText}>
                    Probleme pe drum? <br />
                    Contactează-ne acum!
                </span>
            </div>
            <div className={styles.pageFlex}>
                <CustomForm />
                <div className={styles.contactFlex}>
                    <div className={styles.description}>
                        Ne pasă de clienții noștri, și apreciem o muncă de calitate, așa că...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className={styles.containerFlex}>
                        <Link href="/" className={styles.circle}>
                            <img className={styles.img} src={phoneImage.src} />
                        </Link>
                        <span className={styles.span}>+4 075 475 4215</span>
                    </div>
                    <div className={styles.containerFlex}>
                        <Link href="/" className={styles.circle}>
                            <img className={styles.img} src={mailImage.src} />
                        </Link>
                        <span className={styles.span}>contact@kotasistenta.ro</span>
                    </div>
                    <div className={styles.containerFlex}>
                        <Link href="/" className={styles.circle}>
                            <img className={styles.img} src={facebookImage.src} />
                        </Link>
                        <span className={styles.span}>kotasistenta</span>
                    </div>
                    <div className={styles.containerFlex}>
                        <Link href="/" className={styles.circle}>
                            <img className={styles.img} src={whatsappImage.src} />
                        </Link>
                        <span className={styles.span}>Whatsapp</span>
                    </div>
                </div>
            </div>
        </>
    )
}
