import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BoltIcon from "@mui/icons-material/Bolt";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { Rating, Avatar } from "@mui/material";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TextField from "@mui/material/TextField";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const containerRef: any = useRef();
	const [currentElement, setCurrentElement] = useState<number>(0);

	useGSAP(
		() => {
			gsap.to(".moving-img", {
				scrollTrigger: {
					trigger: ".moving-img",
					scrub: 3,
					start: "top 99%",
					end: "bottom 30%",
				},
				x: "100vw",
				duration: 3,
			});
			gsap.to(".moving-text", {
				scrollTrigger: {
					trigger: ".moving-text",
					scrub: 3,
					start: "top 80%",
					end: "bottom 80%",
				},
				x: "50vw",
				duration: 3,
			});
		},
		{ scope: containerRef }
	);

	const sliders = [
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
		"/photo/slider/slider-1.jpg",
	];

	return (
		<div className="w-full font" style={{ height: "600vh" }}>
			<Navbar />
			<div className="bg-main" />
			<div className="main-element">
				<div className="main-flex">
					<div
						className="mb-4 font-bold"
						style={{ fontSize: "20px" }}
					>
						TRACTĂRI AUTO ȘI ASISTENȚĂ RUTIERĂ
					</div>
					<div className="mt-4 text-8xl font-bold">
						KOT ASISTENȚĂ RUTIERĂ
					</div>
					<div className="font-second text-3xl font-normal">
						Probleme pe drum? Sună-ne acum!
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
						DISPONIBILI NON STOP, SUNĂ ACUM
					</Button>
					<Link
						href="/"
						className="mt-2 text-lg font-semibold hover:underline"
						style={{ fontSize: "16px" }}
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
							<p className="text-2xl mt-3">Simplu și rapid</p>
							<div
								className="w-full bg-gray-400"
								style={{ height: "1px" }}
							/>
						</div>
					</div>
					<p className="mt-2 text-md text-gray-800 text-justify">
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
							<p className="text-2xl mt-3">Oriunde și oricând</p>
							<div
								className="w-full bg-gray-400"
								style={{ height: "1px" }}
							/>
						</div>
					</div>
					<p className="mt-2 text-md text-gray-800 text-justify">
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
							<p className="text-2xl mt-3">Servicii calitative</p>
							<div
								className="w-full bg-gray-400"
								style={{ height: "1px" }}
							/>
						</div>
					</div>
					<p className="mt-2 text-md text-gray-800 text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam
					</p>
				</div>
			</div>
			<div
				style={{ height: "800px", width: "1700px" }}
				className="mt-40 relative flex items-center justify-start"
				ref={containerRef}
			>
				<div className="moving-element">
					<img
						src="/photo/truck.png"
						alt="truck"
						className="moving-img"
					/>
					<div className="moving-text">
						<p className="text-5xl">PESTE</p>
						<span
							className="primary-color font-bold"
							style={{ fontSize: "256px", lineHeight: "1.1" }}
						>
							300
						</span>
						<p className="text-5xl">clienți mulțumiți</p>
					</div>
				</div>
			</div>
			<div className="w-full text-2xl text-center mb-10">
				- RECOMANDĂRILE NOASTRE -
			</div>
			<div
				className="w-full flex items-start justify-center mt-8"
				style={{ height: "auto" }}
			>
				<div className="review-element">
					<Avatar
						alt="Remy Sharp"
						src="/photo/avatars/avatar-1.png"
						sx={{
							width: 110,
							height: 110,
							transform: "translateY(-50%)",
							position: "absolute",
						}}
					/>
					<Rating
						name="half-rating-read"
						defaultValue={5.0}
						precision={0.5}
						readOnly
						size="large"
						sx={{ marginTop: "60px" }}
					/>
					<p className="mt-2 font-light" style={{ fontSize: "18px" }}>
						De fiecare dată când l-am sunat pe Alin, a venit fără
						ezitare, chiar și în miez de noapte. Super băiat. Nota
						10!
					</p>
					<p
						className="mt-4 mb-8 font-medium uppercase text-left w-full"
						style={{ fontSize: "18px" }}
					>
						Alexandru Mocanu
					</p>
				</div>
				<div className="review-element">
					<p className="mt-2 font-light" style={{ fontSize: "18px" }}>
						De fiecare dată când l-am sunat pe Alin, a venit fără
						ezitare, chiar și în miez de noapte. Super băiat. Nota
						10!
					</p>
					<p
						className="mt-4 mb-8 font-medium uppercase text-left w-full"
						style={{ fontSize: "18px" }}
					>
						Alexandru Mocanu
					</p>
					<Rating
						name="half-rating-read"
						defaultValue={4.5}
						precision={0.5}
						readOnly
						size="large"
						sx={{ marginBottom: "60px" }}
					/>
					<Avatar
						alt="Remy Sharp"
						src="/photo/avatars/avatar-2.png"
						sx={{
							width: 110,
							height: 110,
							bottom: 0,
							transform: "translateY(50%)",
							position: "absolute",
						}}
					/>
				</div>
				<div className="review-element">
					<Avatar
						alt="Remy Sharp"
						src="/photo/avatars/avatar-3.png"
						sx={{
							width: 110,
							height: 110,
							transform: "translateY(-50%)",
							position: "absolute",
						}}
					/>
					<Rating
						name="half-rating-read"
						defaultValue={5.0}
						precision={0.5}
						readOnly
						size="large"
						sx={{ marginTop: "60px" }}
					/>
					<p className="mt-2 font-light" style={{ fontSize: "18px" }}>
						De fiecare dată când l-am sunat pe Alin, a venit fără
						ezitare, chiar și în miez de noapte. Super băiat. Nota
						10!
					</p>
					<p
						className="mt-4 mb-8 font-medium uppercase text-left w-full"
						style={{ fontSize: "18px" }}
					>
						Alexandru Mocanu
					</p>
				</div>
			</div>
			<div className="w-full text-center text-6xl mt-40 font-semibold">
				Nu suntem unica firmă de tractaj
				<br /> 24/7 din România, însă...
			</div>
			<div className="w-full text-center font-light text-3xl mt-10">
				Ne pasă de clienții noștri, și apreciem o muncă de calitate, așa
				că... Lorem ipsum dolor sit amet, <br />
				consectetur adipiscing elit. Ut et massa mi. Aliquam in
				hendrerit urna.Lorem ipsum dolor sit <br />
				amet, consectetur adipiscing elit. Ut et massa mi.
			</div>
			<div
				className="mt-32 w-screen relative"
				style={{ height: "800px" }}
			>
				<div
					className="absolute  w-full h-full overflow-visible"
					style={{
						background:
							"linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(38,37,0,1) 100%)",
						clipPath: "polygon(0 30%, 100% 0, 100% 70%, 0 100%)",
					}}
				/>
				<div
					className="slider-container"
					style={{
						transform: `translateX(${
							-(currentElement - 1) * 33.33
						}vw)`,
					}}
				>
					{sliders.map((img: any, index: number) => {
						const rotate: number = currentElement - index;
						if (rotate === 0) {
							return (
								<div
									className="slider slider-active"
									style={{
										transform: `translateY(${
											rotate * 200
										}px)`,
									}}
								>
									<img
										src={img}
										alt="avatar"
										className="slider-img"
									/>
								</div>
							);
						} else {
							return (
								<div
									className="slider slider-inactive"
									style={{
										transform: `translateY(${
											rotate * 200
										}px)`,
									}}
								>
									<img
										src={img}
										alt="avatar"
										className="slider-img"
									/>
								</div>
							);
						}
					})}
				</div>
			</div>
			<div className="w-full flex items-center justify-center -mt-32 relative z-10 text-white">
				<div
					className="w-16 h-16 primary mx-4 rounded-full flex items-center justify-center cursor-pointer"
					style={{ boxShadow: "1px 2px 2px rgb(0,0,0,0.5)" }}
					onClick={() => {
						console.log(currentElement);
						currentElement === 0
							? setCurrentElement(sliders.length - 1)
							: setCurrentElement((c) => c - 1);
					}}
				>
					<ArrowLeftIcon fontSize="large" />
				</div>
				<div
					className="w-16 h-16 primary mx-4 rounded-full flex items-center justify-center cursor-pointer"
					style={{ boxShadow: "1px 2px 2px rgb(0,0,0,0.5)" }}
					onClick={() =>
						currentElement < sliders.length - 1
							? setCurrentElement((c) => c + 1)
							: setCurrentElement(0)
					}
				>
					<ArrowRightIcon fontSize="large" />
				</div>
			</div>
			<div className="mt-20 w-full flex items-center justify-center">
				<Button
					variant="contained"
					sx={{
						fontSize: "26px",
						fontWeight: "500",
						p: "10px 100px",
						textTransform: "none",
						color: "white",
					}}
				>
					Vezi Galeria noastră foto!
				</Button>
			</div>
			<div className="w-full text-center text-6xl mt-40 font-semibold">
				Probleme pe drum? <br />
				Contactează-ne acum!
			</div>
			<div className="w-full text-center font-light text-3xl mt-10">
				Ne pasă de clienții noștri, și apreciem o muncă de calitate, așa
				că... Lorem ipsum <br />
				dolor sit amet, consectetur adipiscing elit.
			</div>
			<div
				className="w-full flex items-start justify-center mt-20"
				style={{ height: "600px" }}
			>
				<div className="w-1/3 h-full mx-8 flex items-center justify-start flex-col">
					<TextField
						id="outlined-basic"
						label="Numele tău"
						variant="outlined"
						sx={{
							width: "100%",
							marginBottom: "20px",
							boxShadow: "2px 2px 3px rgba(0,0,0,0.5)",
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Email"
						variant="outlined"
						sx={{
							width: "100%",
							marginBottom: "20px",
							boxShadow: "2px 2px 3px rgba(0,0,0,0.5)",
						}}
					/>
					<TextField
						id="standard-multiline-static"
						label="Mesajul tău..."
						multiline
						type="email"
						sx={{
							width: "100%",
							boxShadow: "2px 2px 3px rgba(0,0,0,0.5)",
						}}
						rows={12}
						variant="outlined"
					/>
					<Button
						variant="contained"
						sx={{
							marginTop: "40px",
							textTransform: "none",
							color: "white",
							fontSize: "24px",
							padding: "10px 28px",
						}}
					>
						Trimite-ne mesajul tău
					</Button>
				</div>
				<div className="w-1/3 mx-8 text-bg" style={{ height: "500px" }}>
					<img
						src="/photo/Vector.png"
						alt="Map"
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
