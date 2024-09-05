//Utilities
import React, { ReactNode } from 'react'

//Mui Components
import TextField from "@mui/material/TextField";

//Types
type CustomInputType = {
    children?: ReactNode,
    id: string
    ref: any,
    label: string,
    multiline?: boolean,
    rows?: number
}


export default function CustomInput({ children, id, ref, label, multiline, rows }: CustomInputType) {
    return (
        <TextField
            id={id}
            label={label}
            type="text"
            multiline={multiline}
            rows={rows}
            variant="outlined"
            required
            onChange={(e) => { ref.current = e?.target?.value }}
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
}
