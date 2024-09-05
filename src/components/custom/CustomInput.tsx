//Utilities
import React, { ReactNode, forwardRef } from 'react'

//Mui Components
import TextField from "@mui/material/TextField";

//Types
type CustomInputType = {
    children?: ReactNode,
    id: string
    label: string,
    multiline?: boolean,
    rows?: number
}

const CustomInput = forwardRef(function CustomInput({
    children, id, label, multiline, rows
}: CustomInputType, ref: React.Ref<HTMLInputElement>) {

    return (
        <TextField
            id={id}
            label={label}
            type="text"
            multiline={multiline}
            rows={rows}
            variant="outlined"
            inputRef={ref}
            required
            sx={{
                width: "100%",
                marginBottom: "20px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                backgroundColor: "#fcfcfc",
            }}
            InputProps={{
                startAdornment: (
                    children
                ),
            }}
        />
    )
})

export default CustomInput