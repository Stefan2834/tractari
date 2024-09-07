//Utilities
import React, { forwardRef } from 'react'

//Mui components
import { InputAdornment } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

//Components
import CustomButton from "../custom/CustomButton";
import CustomInput from '../custom/CustomInput';
import { useDefault } from '@/contexts/useDefault';


export default function CustomForm() {

    const { screenWidth, contactNameRef, contactEmailRef, contactMessageRef } = useDefault();


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("name:", contactNameRef?.current?.value);
        console.log("email:", contactEmailRef?.current?.value);
        console.log("message", contactMessageRef?.current?.value);
    }


    return (
        <form
            onSubmit={handleFormSubmit}
            className="w-1/3 h-full mx-8 flex items-center justify-start flex-col xl:w-[calc(100%-50px)] xl:justify-center"
        >
            <CustomInput id="outlined-basic" ref={contactNameRef} label="Numele tău">
                <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                </InputAdornment>
            </CustomInput>

            <CustomInput id="outlined-basic" ref={contactEmailRef} label="Email">
                <InputAdornment position="start">
                    <EmailOutlinedIcon />
                </InputAdornment>
            </CustomInput>

            <CustomInput id="standard-multiline-static" ref={contactMessageRef} label="Mesajul tău..." multiline={true} rows={12} />

            <span className="mt-4 w-full">
                <CustomButton
                    fontSize={`${screenWidth > 600 ? "24px" : "18px"}`}
                    padding={`${screenWidth > 600 ? "10px 28px" : "8px 14px"}`}
                    width="100%"
                >
                    Trimite-ne mesajul tău
                </CustomButton>
            </span>

        </form>
    )
}
