import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Layout from "../components/layout";
import { useDefault } from "../contexts/useDefault";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocalSeeIcon from '@mui/icons-material/LocalSee';

export default function IndexPage() {
	const typedElement = useRef(null);

	useEffect(() => {
		const options = {
			strings: ["Servici de tractare oriunde și oricând."],
			typeSpeed: 70,
			backSpeed: 60,
			loop: true,
		};

		const typed = new Typed(typedElement.current, options);

		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<>
			<Navbar />
			<div
				className="w-full bg-red-400 flex flex-col items-center justify-start"
				style={{ height: "200vh" }}
			>
				<div className="w-full bg-blue-400 h-screen flex flex-col items-center justify-between bg-main">
					<div className="text-white text-4xl font-semibold mt-20 text-center">
						<span ref={typedElement} className="glow"></span>
					</div>
					<div className="flex item-center justify-center flex-col">
						<Button
							variant="outlined"
							endIcon={<PhoneEnabledIcon />}
							sx={{
								color: "white",
								fontSize: "20px",
								fontFamily: "'Roboto', sans-serif",
								boxShadow:
									"5px 6px 35px -2px rgba(0, 0, 0, 0.66)",
								fontFamily: "Roboto",
								textTransform: "none",
								border: "1px solid #fff",
								"&:hover": {
									color: "black",
									backgroundColor: "white",
									border:"1px solid white"
								},
								my: 2,
							}}
						>
							Contactează-mă
						</Button>
						<Button
							variant="contained"
							startIcon={<LocalSeeIcon />}
							sx={{
								color: "black",
								fontSize: "20px",
								fontFamily: "'Roboto', sans-serif",
								boxShadow:
									"5px 6px 35px -2px rgba(0, 0, 0, 0.66)",
								fontFamily: "Roboto",
								textTransform: "none",
								backgroundColor: "white",
								border: "1px solid #fff",
								"&:hover": {
									backgroundColor: "transparent",
									color: "white",
								},
								my: 2,
							}}
						>
							Vezi poze
						</Button>
					</div>
					<div></div>
				</div>
			</div>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
