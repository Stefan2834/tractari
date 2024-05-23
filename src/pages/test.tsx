import React from "react";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";

export default function Home() {
	return (
		<div className="w-full font bg-red-400" style={{ height: "200vh" }}>
			<Navbar />
			<div className="bg-main-1" />
			<div className="bg-main-2" />
			<div className="w-full h-screen text-2xl flex items-center justify-between flex-col z-10 relative">
				<div />
				<div className="flex items-center justify-center flex-col w-full">
					<span className="text-white text-center text-6xl mb-8">
						Probleme pe drum?
						<br />
						Sună-ne acum!
					</span>
					<Button
						variant="contained"
						href="#contained-buttons"
						sx={{
							color: "secondary.main",
							fontSize: "24px",
							fontFamily: "'GetVoIP Grotesque', sans-serif",
							marginTop: "32px",
							marginBottom: "48px",
							px: 6,
							py: 1,
							border: "1px solid",
							backgroundColor: "primary.main",
							"&:hover": {
								color: "white",
								backgroundColor: "transparent",
							},
						}}
					>
						+40 712 345 678
					</Button>
				</div>
				<div className="h-24 flex flex-col text-white items-center justify-center cursor-pointer p-2 down-hover">
					<span>Află mai multe</span>
					<ChangeHistoryRoundedIcon
						sx={{
							color:"white",
							fontSize: "60px",
							mb: 8,
							transform: "rotate(180deg)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
