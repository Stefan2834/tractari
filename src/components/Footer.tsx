import React from "react";
import { Button } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
	return (
		<footer>
			<div
				className="mt-20 w-full grad-2 flex items-center justify-center flex-col"
				style={{
					height: "700px",
					clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
				}}
			>
				<img src="/photo/logo.png" alt="logo" className="w-64" />
				<Button
					variant="contained"
					sx={{ fontSize: "20px", color: "white" }}
                    startIcon={<PhoneIcon />}
				>
					DISPONIBILI NON STOP, SUNĂ ACUM - 0733 472 123
				</Button>
				<div className="flex items-center justify-center text-white font-semibold text-2xl mt-16">
                    <div className="mx-3">Serviciile noastre</div>
                    <div className="mx-3">Cine suntem?</div>
                    <div className="mx-3">Galerie foto</div>
                </div>
			</div>
			<div className="w-full h-20 bg-black flex items-center justify-center -mt-1"></div>
		</footer>
	);
}
