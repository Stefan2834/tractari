import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";


const StyledIcon = styled(ChangeHistoryRoundedIcon)(({ theme }) => ({
	color: "white",
	fontSize: "60px",
	marginBottom: theme.spacing(8),
	transform: "rotate(180deg)",
}));

export default function Home() {
	const theme = useTheme();

	return (
		<div className="w-full font" style={{ height: "200vh" }}>
			<Navbar />
			<div className="bg-main-1">
				{Array.from({ length: 15 }).map((_, i_) => (
					<div className="bg-elem" />
				))}
			</div>
			<div className="bg-main-2" />
			<div className="absolute-div">
				<span className="text-white text-center text-lg">
					Florești, Prahova
				</span>
			</div>
			<div className="w-full h-screen text-2xl flex items-center justify-between flex-col z-10 relative">
				<div />
				<div className="flex items-center justify-center flex-col w-full">
					<span className="text-white text-center text-6xl mb-8">
						Probleme pe{" "}
						<span style={{ color: theme?.palette?.primary?.main }}>
							drum?
						</span>
						<br />
						Sună-ne acum!
					</span>
					<Button
						variant="contained"
						href="/"
						sx={{
							color: "secondary.main",
							fontSize: "24px",
							fontFamily: "'GetVoIP Grotesque', sans-serif",
							marginTop: "32px",
							marginBottom: "48px",
							px: 6,
							py: 1,
							border: "1px solid",
							boxShadow: "5px 6px 34px -3px rgba(0,0,0,0.75)",
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
					<StyledIcon />
				</div>
			</div>
		</div>
	);
}
