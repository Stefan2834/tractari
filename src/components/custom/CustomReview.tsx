//Utilities
import React from 'react'
import { useDefault } from '@/contexts/useDefault'
import Image from 'next/image';

//Types
type CustomReviewProps = {
    children: React.ReactNode,
    avatar: string,
    name: string,
    value: number,
}

//Style
import styles from "../../css/modules/review.module.css"

//Images 
import star from "../../assets/icons/star.webp"
import emptyStar from "../../assets/icons/empty-star.webp"

export default function CustomReview({ children, avatar, name, value }: CustomReviewProps) {

    const { screenWidth } = useDefault()

    return (
        <div className={styles.reviewElement}>
            <Image
                alt="Avatar"
                src={avatar}
                width={90} height={90}
            />
            <p
                className={styles.reviewName}
                style={{
                    fontSize: `${screenWidth > 600 ? "18px" : "14px"}`,
                }}
            >
                {name}
            </p>
            <div className={styles.starContainer}>
                {Array.from({ length: value }).map((_, index) => (
                    <Image alt="Stea" src={star} key={index} />
                ))}
                {Array.from({ length: 5 - value }).map((_, index) => (
                    <Image alt="Stea" src={emptyStar} key={index} />
                ))}
            </div>
            <p
                className={styles.reviewDescription}
                style={{
                    fontSize: `${screenWidth > 600 ? "18px" : "14px"}`,
                }}
            >
                {children}
            </p>
        </div>
    )
}
