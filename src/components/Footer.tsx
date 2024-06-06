import React from "react";
import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<div
				className="mt-20 w-full grad-2 flex items-center justify-center flex-col"
				style={{
					height: "600px",
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
					<Link href="/" className="mx-3">
						Serviciile noastre
					</Link>
					<Link href="/" className="mx-3">
						Cine suntem?
					</Link>
					<Link href="/" className="mx-3">
						Galerie foto
					</Link>
				</div>
				<div className="flex items-center justify-center text-white font-semibold text-2xl mt-8">
					<Link href="/">
						<EmailOutlinedIcon
							className="mx-3"
							sx={{ fontSize: "50px" }}
						/>
					</Link>
					<Link href="/">
						<WhatsAppIcon
							className="mx-3"
							sx={{ fontSize: "50px" }}
						/>
					</Link>
					<Link href="/">
						<FacebookIcon
							className="mx-3"
							sx={{ fontSize: "50px" }}
						/>
					</Link>
				</div>
			</div>
			<div className="w-full h-20 bg-black flex items-center justify-between -mt-1">
				<div className="text-white font-normal text-lg ml-24">
					@2024 - All rights reserved
				</div>
				<div className="text-white font-normal text-lg mr-24">
					Designed and Developed by Iosif Ștefan & Mareș Gabriel
				</div>
			</div>
		</footer>
	);
}
