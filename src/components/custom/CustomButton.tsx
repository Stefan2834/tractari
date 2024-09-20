//Utilities
import React from 'react'


//Types
type CustomButtonProps = {
    children: React.ReactNode;
    padding?: string;
    fontSize?: string;
    width?: string;
    background?: string;
}

export default function CustomButton({ children, padding, fontSize, width, background }: CustomButtonProps) {

    return (
        <button className='custom-button'
            style={{ padding: padding, fontSize: fontSize, width: width, backgroundColor: background }}
        >
            {children}
        </button>
    )
}
