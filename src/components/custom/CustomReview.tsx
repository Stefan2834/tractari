//Utilities
import React from 'react'
import { useDefault } from '@/contexts/useDefault'

//Mui Components
import { Avatar, Rating } from "@mui/material";

//Types
type CustomReviewProps = {
    children: React.ReactNode,
    avatar: string,
    name: string,
    value: number,
}

//Style
import styles from "../../css/modules/review.module.css"

export default function CustomReview({ children, avatar, name, value }: CustomReviewProps) {

    const { screenWidth } = useDefault()

    return (
        <div className={styles.reviewElement}>
            <Avatar
                alt="Avatar"
                src={avatar}
                sx={{
                    width: 110,
                    height: 110,
                    position: "absolute",
                    top: "-50px",
                    scale: `${screenWidth > 600 ? "1" : "0.8"}`,
                }}
            />
            <p
                className={styles.reviewName}
                style={{
                    fontSize: `${screenWidth > 600 ? "18px" : "14px"}`,
                }}
            >
                {name}
            </p>
            <Rating
                name="half-rating-read"
                defaultValue={value}
                precision={0.5}
                readOnly
                size="large"
                sx={{
                    marginTop:"8px",
                    color: "#E3B626"
                }}
            />
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
