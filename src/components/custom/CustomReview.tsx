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
    reverse: boolean;
}

export default function CustomReview({ children, avatar, name, value, reverse }: CustomReviewProps) {

    const { screenWidth } = useDefault()

    return (
        <div className={`review-element ${reverse && screenWidth > 1200 ? "flex-col-reverse" : "flex-col"}`}>
            <Avatar
                alt="Avatar"
                src={avatar}
                sx={{
                    width: 110,
                    height: 110,
                    bottom: `${reverse && screenWidth > 1200 ? "0" : "calc(100% - 110px)"}`,
                    transform: `${reverse && screenWidth > 1200 ? "translateY(50%)" : "translateY(-50%)"}`,
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
                sx={{
                    marginBottom: `${reverse && screenWidth > 1200 ? "60px" : "0px"}`,
                    marginTop: `${reverse && screenWidth > 1200 ? "0px" : "60px"}`,
                    color: "#E3B626"
                }}
            />
            <div>
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
        </div>
    )
}
