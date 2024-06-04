import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Link from "next/link";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BoltIcon from "@mui/icons-material/Bolt";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const containerRef = useRef();

	useGSAP(
		() => {
			gsap.to(".moving-element", {
				scrollTrigger: {
					trigger: ".moving-element",
					scrub: 3,
				},
				x: "100vw",
				duration: 3,
			});
		},
		{ scope: containerRef }
	);

	return (
		<div className="w-full font" style={{ height: "400vh" }}>
			<Navbar />
			<div className="bg-main" />
			<div className="main-element">
				<div className="main-flex">
					<div className="mb-4">
						Tractări auto și asistență rutieră
					</div>
					<div className="mt-4 text-7xl">KOT ASISTENȚĂ RUTIERĂ</div>
					<div className="font-second text-2xl">
						Probleme pe drum? Suna-ne acum!
					</div>
					<Button
						variant="contained"
						sx={{
							color: "white",
							textTransform: "none",
							marginTop: "40px",
							fontSize: "20px",
							padding: "10px 20px",
						}}
					>
						Disponibili NON STOP, sună acum
					</Button>
					<Link
						href="/"
						className="mt-2 font-second text-lg hover:underline"
					>
						* sau lasă-ne un mesaj pe whatsapp
						<ArrowRightAltIcon />
						<WhatsAppIcon />
					</Link>
				</div>
			</div>
			<div className="main-absolute"></div>
			<div className="main-absolute-flex">
				<div className="main-absolute-element">
					<div className="flex items-start justify-start">
						<div className="w-10 h-full mr-3 flex items-center justify-center">
							<BoltIcon
								style={{ fontSize: "50px", color: "#eec337" }}
							/>
						</div>
						<div>
							<p className="text-lg mt-3">Simplu și rapid</p>
							<div className="w-full h-1 bg-black" />
						</div>
					</div>
					<p className="mt-2 text-sm text-gray-700 text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam
					</p>
				</div>
				<div className="main-absolute-element">
					<div className="flex items-start justify-start">
						<div className="w-10 h-full mr-3 flex items-center justify-center">
							<TimelapseIcon
								style={{ fontSize: "50px", color: "#eec337" }}
							/>
						</div>
						<div>
							<p className="text-lg mt-3">Oriunde și oricâ nd</p>
							<div className="w-full h-1 bg-black" />
						</div>
					</div>
					<p className="mt-2 text-sm text-gray-700 text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam
					</p>
				</div>
				<div className="main-absolute-element">
					<div className="flex items-start justify-start">
						<div className="w-10 h-full mr-3 flex items-center justify-center">
							<CheckCircleOutlineIcon
								style={{ fontSize: "50px", color: "#eec337" }}
							/>
						</div>
						<div>
							<p className="text-lg mt-3">Servicii calitative</p>
							<div className="w-full h-1 bg-black" />
						</div>
					</div>
					<p className="mt-2 text-sm text-gray-700 text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam
					</p>
				</div>
			</div>
			<div
				style={{ height: "900px" }}
				className="w-full mt-40 relative flex items-center justify-start"
				ref={containerRef}
			>
				<div className="moving-element">
					<img
						src="/photo/truck.png"
						alt="truck"
						className="moving-img"
					/>
					<div className="moving-text">
						Peste
						<br />
						<span className="text-5xl primary-color">1452</span>
						<br />
						Clienți mulțumiți
					</div>
				</div>
			</div>
		</div>
	);
}
