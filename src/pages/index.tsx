import React, { useState, useEffect, useRef } from "react";
import { useDefault } from "../contexts/useDefault";

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
	const containerRef = useRef<any>();
	const [currentElement, setCurrentElement] = useState<number>(0);
	const { screen } = useDefault();

	const name = useRef<any>();
	const email = useRef<any>();
	const message = useRef<any>();

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
		"/photo/slider/slider-2.jpg",
		"/photo/slider/slider-3.jpg",
		"/photo/slider/slider-4.jpg",
		"/photo/slider/slider-5.jpg",
		"/photo/slider/slider-6.jpg",
		"/photo/slider/slider-7.jpg",
		"/photo/slider/slider-8.jpg",
		"/photo/slider/slider-9.jpg",
		"/photo/slider/slider-10.jpg",
	];

	return (
		<div className="w-full font overflow-hidden">
			<Navbar />
			<div className="bg-main" />
			<div className="main-element">
				<div className="main-flex">
					<p
						className="mb-4 font-semibold m:mb-2"
						style={{
							fontSize: `${screen > 600 ? "20px" : "16px"}`,
						}}
					>
						TRACTĂRI AUTO ȘI ASISTENȚĂ RUTIERĂ
					</p>
					<h1 className="mt-4 text-8xl font-bold m:text-5xl">
						KOT ASISTENȚĂ RUTIERĂ
					</h1>
					<h3 className="font-second text-3xl font-normal m:text-lg">
						Probleme pe drum? Sună-ne acum!
					</h3>
					<Link href="tel:+40730222643">
						<Button
							variant="contained"
							sx={{
								color: "white",
								textTransform: "none",
								marginTop: "40px",
								fontSize: `${screen > 600 ? "20px" : "16px"}`,
								padding: `${
									screen > 600 ? "10px 20px" : "6px 12px"
								}`,
							}}
						>
							DISPONIBILI NON STOP, SUNĂ ACUM
						</Button>
					</Link>
					<Link
						href="https://wa.me/+400730222643"
						className="mt-2 text-lg font-semibold hover:underline"
						style={{
							fontSize: `${screen > 600 ? "16px" : "12px"}`,
						}}
					>
						* sau lasă-ne un mesaj pe whatsapp
						<ArrowRightAltIcon />
						<WhatsAppIcon />
					</Link>
				</div>
			</div>
			<Link href="/">
				<div className="main-absolute" />
			</Link>
			<div className="main-absolute-flex">
				<div className="main-absolute-element">
					<div className="flex items-start justify-start">
						<div className="w-10 h-full mr-3 flex items-center justify-center">
							<img
								src="/photo/icons/lightning.png"
								alt="lightning"
								className="main-absolute-img"
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
					<p className="mt-2 text-md text-gray-800">
						Sărim în ajutorul tău în cel mai scurt timp posibil. Nu
						te îngrijora, vom fi acolo cât mai rapid.
					</p>
				</div>
				<div className="main-absolute-element">
					<div className="flex items-start justify-start">
						<div className="w-10 h-full mr-3 flex items-center justify-center">
							<img
								src="/photo/icons/24.png"
								alt="24 hours"
								className="main-absolute-img"
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
					<p className="mt-2 text-md text-gray-800">
						Venim oriunde în țară, la orice oră din zi și din
						noapte. Nu ezita să ne contactezi.
					</p>
				</div>
				<div className="main-absolute-element">
					<div className="flex items-start justify-start">
						<div className="w-10 h-full mr-3 flex items-center justify-center">
							<img
								src="/photo/icons/checked.png"
								alt="checked"
								className="main-absolute-img"
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
					<p className="mt-2 text-md text-gray-800">
						Oferim servicii de calitate superioară. Nu contează cât
						de avariată este mașina, noi o vom tracta.
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
						<p className="text-5xl m:text-4xl">PESTE</p>
						<span
							className="primary-color font-bold"
							style={{
								fontSize: `${screen > 600 ? "256px" : "196px"}`,
								lineHeight: "1.1",
							}}
						>
							300
						</span>
						<p className="text-5xl m:text-4xl">clienți mulțumiți</p>
					</div>
				</div>
			</div>
			<h2 className="w-full text-2xl text-center mb-10 m:text-lg">
				- RECOMANDĂRILE NOASTRE -
			</h2>
			<div
				className="w-full flex items-start justify-center mt-8 xl:flex-wrap xl:justify-around"
				style={{ height: "auto" }}
			>
				<div className="review-element">
					<Avatar
						alt="Remy Sharp"
						src="/photo/avatars/avatar-1.jpg"
						sx={{
							width: 110,
							height: 110,
							transform: "translateY(-50%)",
							position: "absolute",
							scale: `${screen > 600 ? "1" : "0.8"}`,
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
					<p
						className="mt-2 font-light"
						style={{
							fontSize: `${screen > 600 ? "18px" : "14px"}`,
						}}
					>
						De fiecare dată când l-am sunat pe Alin, a venit fără
						ezitare, chiar și în miez de noapte. Super băiat. Nota
						10!
					</p>
					<p
						className="mt-4 mb-8 font-medium uppercase text-left w-full m:mt-2 m:mb-4"
						style={{
							fontSize: `${screen > 600 ? "18px" : "14px"}`,
						}}
					>
						Andrei Comșa
					</p>
				</div>
				<div className="review-element">
					<div>
						<p
							className="mt-2 font-light"
							style={{
								fontSize: `${screen > 600 ? "18px" : "14px"}`,
							}}
						>
							Nu știu ce mă făceam fără serviciile prestate de
							acest băiat. A reușit să ma salveze dintr-o situație
							inimaginabilă. Recomand!
						</p>
						<p
							className="mt-4 mb-8 font-medium uppercase text-left w-full m:mt-2 m:mb-4"
							style={{
								fontSize: `${screen > 600 ? "18px" : "14px"}`,
							}}
						>
							Iosif Ștefan
						</p>
					</div>
					<Rating
						name="half-rating-read"
						defaultValue={4.5}
						precision={0.5}
						readOnly
						size="large"
						sx={{
							marginBottom: `${screen > 1200 ? "60px" : "0px"}`,
							marginTop: `${screen > 1200 ? "0px" : "60px"}`,
						}}
					/>
					<Avatar
						alt="Remy Sharp"
						src="/photo/avatars/avatar-2.jpg"
						sx={{
							width: 110,
							height: 110,
							bottom: `${
								screen > 1200 ? "0" : "calc(100% - 110px)"
							}`,
							transform: `${
								screen > 1200
									? "translateY(50%)"
									: "translateY(-50%)"
							}`,
							position: "absolute",
							scale: `${screen > 600 ? "1" : "0.8"}`,
						}}
					/>
				</div>
				<div className="review-element">
					<Avatar
						alt="Remy Sharp"
						src="/photo/avatars/avatar-3.jpg"
						sx={{
							width: 110,
							height: 110,
							transform: "translateY(-50%)",
							position: "absolute",
							scale: `${screen > 600 ? "1" : "0.8"}`,
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
					<p
						className="mt-2 font-light"
						style={{
							fontSize: `${screen > 600 ? "18px" : "14px"}`,
						}}
					>
						Având în vedere că l-am sunat la 2 noaptea, a venit la
						sute de kilometri distanță ca să mă ajute. Nu știu ce mă
						faceam fără el. Sunați cu încredere!
					</p>
					<p
						className="mt-4 mb-8 font-medium uppercase text-left w-full m:mt-2 m:mb-4"
						style={{
							fontSize: `${screen > 600 ? "18px" : "14px"}`,
						}}
					>
						Mareș Gabriel
					</p>
				</div>
			</div>
			<h1 className="w-full text-center text-6xl mt-40 font-semibold m:text-3xl">
				Nu suntem unica firmă de tractaj
				<br /> 24/7 din România, însă...
			</h1>
			<p className="w-full text-center font-light text-3xl mt-10 m:text-xl">
				Ne pasă de clienții noștri, și apreciem o muncă de calitate.
				Tractăm orice tip de autoturisme,
				<br />
				chiar dacă sistemul de direcție este grav avariat. Sărim în
				ajutorul tău în cel mai scurt timp posibil,
				<br />
				oriunde în țară și la orice oră. Nu ezita să ne contactezi dacă
				întâmpini probleme.
				<br />
			</p>
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
							-(currentElement - 1) * 456 + (screen - 456 * 3) / 2
						}px)`,
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
											rotate * 150
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
									onClick={() => setCurrentElement(index)}
									className="slider slider-inactive"
									style={{
										transform: `translateY(${
											rotate * 150
										}px)`,
										filter: `brightness(${
											1 / Math.abs(rotate / 0.6)
										}`,
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
				<Link href="/gallery">
					<Button
						variant="contained"
						sx={{
							fontSize: `${screen > 600 ? "26px" : "18px"}`,
							fontWeight: "500",
							p: `${screen > 600 ? "10px 100px" : "8px 36px"}`,
							textTransform: "none",
							color: "white",
						}}
					>
						Vezi Galeria noastră foto!
					</Button>
				</Link>
			</div>
			<h2 className="w-full text-center text-6xl mt-40 font-semibold m:text-3xl">
				Probleme pe drum? <br />
				Contactează-ne acum!
			</h2>
			<p className="w-full text-center font-light text-3xl mt-10 m:text-xl m:mb-4">
				Nu ezita să ne contactezi dacă ai probleme cu mașina sau dacă ai
				vreo
				<br />
				curiozitate legată de noi. Răspundem la orice oră în cel mai
				scurt timp posibil.
			</p>
			<div
				className="w-full flex items-start justify-center mt-20 xl:flex-col xl:items-center m:mt-8"
				style={{ height: `${screen > 1200 ? "600px" : "auto"}` }}
			>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						console.log("name:", name?.current);
						console.log("email:", email?.current);
						console.log("message", message?.current);
					}}
					className="w-1/3 h-full mx-8 flex items-center justify-start flex-col xl:w-[calc(100%-50px)] xl:justify-center"
				>
					<TextField
						id="outlined-basic"
						label="Numele tău"
						type="text"
						variant="outlined"
						required
						onChange={(e) => (name.current = e?.target?.value)}
						sx={{
							width: "100%",
							marginBottom: "20px",
							boxShadow: "2px 2px 3px rgba(0,0,0,0.5)",
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Email"
						type="email"
						required
						variant="outlined"
						onChange={(e) => (email.current = e?.target?.value)}
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
						required
						onChange={(e) => (message.current = e?.target?.value)}
						sx={{
							width: "100%",
							boxShadow: "2px 2px 3px rgba(0,0,0,0.5)",
						}}
						rows={12}
						variant="outlined"
					/>
					<Button
						variant="contained"
						type="submit"
						sx={{
							marginTop: "40px",
							textTransform: "none",
							color: "white",
							fontSize: `${screen > 600 ? "24px" : "18px"}`,
							padding: `${
								screen > 600 ? "10px 28px" : "8px 14px"
							}`,
						}}
					>
						Trimite-ne mesajul tău
					</Button>
				</form>
				<div
					className="w-1/3 mx-8 xl:w-[calc(100%-50px)]"
					style={{ height: "500px" }}
				>
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
