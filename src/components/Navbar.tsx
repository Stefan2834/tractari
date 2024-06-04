import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	const currentScrollRef = useRef<number>(0);
	const prevScrollRef = useRef<number>(0);
	const scrollDirectionRef = useRef<string | null>(null);
	const [scroll, setScroll] = useState<boolean>(true);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const currentScrollPos = window.pageYOffset;
	// 		const initialPos = scrollDirectionRef.current;
	// 		scrollDirectionRef.current =
	// 			currentScrollPos > currentScrollRef.current ? "down" : "up";
	// 		prevScrollRef.current = currentScrollRef.current;
	// 		currentScrollRef.current = currentScrollPos;
	// 		if(initialPos !== scrollDirectionRef.current) {
	// 			setScroll(scrollDirectionRef.current === "up");
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	return (
		<>
			<div className="fixed w-full h-32 flex items-center justify-between z-30 pl-16 pr-8 grad nav-main">
				<Link href="/" className="logo">
					<img
						src="/photo/logo.png"
						alt="logo"
						className="logo-img"
					/>
				</Link>
				<div className="text-white flex items-center justify-center text-xl nav-div font-semibold">
					<Link href="/" className="mx-4 py-2 px-4 nav-link">
						Servicile noastre
					</Link>
					<Link href="/" className="mx-4 py-2 px-4 nav-link">
						Cine suntem?
					</Link>
					<Link href="/" className="mx-4 py-2 px-4 nav-link">
						Galerie foto
					</Link>
					<Link href="/" className="mx-4 py-2 px-4 nav-link">
						Contacteaza-ne
					</Link>
				</div>
			</div>
		</>
	);
}

// import React, { useEffect, useRef } from "react";
// import Typed from "typed.js";
// import Layout from "../components/layout";
// import { useDefault } from "../contexts/useDefault";
// import Navbar from "../components/Navbar";
// import { Button } from "@mui/material";
// import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
// import LocalSeeIcon from '@mui/icons-material/LocalSee';

// export default function IndexPage() {
// 	const typedElement = useRef(null);

// 	useEffect(() => {
// 		const options = {
// 			strings: ["Servici de tractare oriunde și oricând."],
// 			typeSpeed: 70,
// 			backSpeed: 60,
// 			loop: true,
// 		};

// 		const typed = new Typed(typedElement.current, options);

// 		return () => {
// 			typed.destroy();
// 		};
// 	}, []);
// 	return (
// 		<>
// 			<Navbar />
// 			<div
// 				className="w-full bg-red-400 flex flex-col items-center justify-start"
// 				style={{ height: "200vh" }}
// 			>
// 				<div className="w-full bg-blue-400 h-screen flex flex-col items-center justify-between bg-main">
// 					<div className="text-white text-4xl font-semibold mt-20 text-center">
// 						<span ref={typedElement} className="glow"></span>
// 					</div>
// 					<div className="flex item-center justify-center flex-col">
// 						<Button
// 							variant="outlined"
// 							endIcon={<PhoneEnabledIcon />}
// 							sx={{
// 								color: "white",
// 								fontSize: "20px",
// 								fontFamily: "'Roboto', sans-serif",
// 								boxShadow:
// 									"5px 6px 35px -2px rgba(0, 0, 0, 0.66)",
// 								textTransform: "none",
// 								border: "1px solid #fff",
// 								"&:hover": {
// 									color: "black",
// 									backgroundColor: "white",
// 									border:"1px solid white"
// 								},
// 								my: 2,
// 							}}
// 						>
// 							Contactează-mă
// 						</Button>
// 						<Button
// 							variant="contained"
// 							startIcon={<LocalSeeIcon />}
// 							sx={{
// 								color: "black",
// 								fontSize: "20px",
// 								fontFamily: "'Roboto', sans-serif",
// 								boxShadow:
// 									"5px 6px 35px -2px rgba(0, 0, 0, 0.66)",
// 								fontFamily: "Roboto",
// 								textTransform: "none",
// 								backgroundColor: "white",
// 								border: "1px solid #fff",
// 								"&:hover": {
// 									backgroundColor: "transparent",
// 									color: "white",
// 								},
// 								my: 2,
// 							}}
// 						>
// 							Vezi poze
// 						</Button>
// 					</div>
// 					<div></div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
