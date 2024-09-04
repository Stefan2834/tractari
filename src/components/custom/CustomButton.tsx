//Utilities
import React from 'react'


//Types
type CustomButtonProps = {
    children: React.ReactNode;
    padding?: string;
    fontSize?: string;
    width?: string;
}

export default function CustomButton({ children, padding, fontSize, width }: CustomButtonProps) {

    return (
        <button className='custom-button'
            style={{ padding: padding, fontSize: fontSize, width: width }}
        >
            {children}
        </button>
    )
}
