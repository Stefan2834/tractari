//Utilities
import React from 'react'
import Image, { StaticImageData } from "next/image"

//Style
import styles from "../../css/modules/main.module.css"

type CardProps = {
    children: string;
    title: string;
    icon: StaticImageData;
}

export default function CustomCard({ children, title, icon }: CardProps) {
    return (
        <div className={styles.cardAbsoluteElement}>
            <div className={styles.cardElement}>
                <Image src={icon} alt="Icon card" />
                <div>
                    <h1>
                        {title}
                    </h1>
                    <div style={{ height: "1px", marginTop: "4px", width: "100%", backgroundColor: "#9ca3af" }} />
                </div>
            </div>
            <p>
                {children}
            </p>
        </div>
    )
}
