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
    value: number
}

export default function CustomReview({ children, avatar, name, value }: CustomReviewProps) {

    const { screenWidth } = useDefault()

    return (
        <div className="review-element">
            <Avatar
                alt="Remy Sharp"
                src={avatar}
                sx={{
                    width: 110,
                    height: 110,
                    transform: "translateY(-50%)",
                    position: "absolute",
                    scale: `${screenWidth > 600 ? "1" : "0.8"}`,
                }}
            />
            <Rating
                name="half-rating-read"
                defaultValue={value}
                precision={0.5}
                readOnly
                size="large"
                sx={{ marginTop: "60px", color: "#E3B626" }}
            />
            <p
                className="mt-2 font-light"
                style={{
                    fontSize: `${screenWidth > 600 ? "18px" : "14px"}`,
                }}
            >
                {children}
            </p>
            <p
                className="mt-4 mb-8 font-medium uppercase text-left w-full m:mt-2 m:mb-4"
                style={{
                    fontSize: `${screenWidth > 600 ? "18px" : "14px"}`,
                }}
            >
                {name}
            </p>
        </div>
    )
}
