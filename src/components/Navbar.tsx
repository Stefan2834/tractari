import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useDefault } from "../contexts/useDefault";

export default function Navbar() {
	const currentScrollRef = useRef<number>(0);
	const prevScrollRef = useRef<number>(0);
	const scrollDirectionRef = useRef<string | null>(null);
	const [nav, setNav] = useState<boolean>(false);

	const { screen } = useDefault();


	useEffect(() => {
		if (nav) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "scroll";
		}
	}, [nav]);

	useEffect(() => {
		if (screen > 900) {
			setNav(false);
		}

		document.addEventListener("scroll", () => {
			setNav(false);
		});

		return () => {
			document.removeEventListener("scroll", () => {
				setNav(false);
			});
		};
	}, [screen]);

	return (
		<>
			<div
				className={`${
					screen > 900 ? "absolute" : "fixed"
				} w-full h-32 flex items-center justify-between grad z-30 pl-16 pr-8 nav-main xl:pl-4 xl:pr-4`}
			>
				<Link href="/" className="logo">
					<img
						src="/photo/logo.png"
						alt="logo"
						className="logo-img"
					/>
				</Link>
				<div className="nav-ham" onClick={() => setNav((n) => !n)}>
					<div
						className="line"
						style={{
							width: "30px",
							transform: `rotate(${nav ? "-45deg" : "0"})`,
						}}
					></div>
					<div
						className="line"
						style={{ width: `${nav ? "0" : "24px"}` }}
					></div>
					<div
						className="line"
						style={{
							width: `${nav ? "30px" : "18px"}`,
							transform: `rotate(${nav ? "45deg" : "0"})`,
						}}
					></div>
				</div>
				<div
					className="text-white flex items-center justify-center text-xl nav-div font-semibold"
					style={{
						transform: `translateX(${
							screen < 900 && !nav ? "100%" : "0"
						}`,
					}}
				>
					<Link
						href="/"
						className="mx-4 py-2 px-4 nav-link xl:mx-2 xl:px-2 xl:my-2"
					>
						Servicile noastre
					</Link>
					<Link
						href="/"
						className="mx-4 py-2 px-4 nav-link xl:mx-2 xl:px-2 xl:my-2"
					>
						Cine suntem?
					</Link>
					<Link
						href="/gallery"
						className="mx-4 py-2 px-4 nav-link xl:mx-2 xl:px-2 xl:my-2"
					>
						Galerie foto
					</Link>
					<Link
						href="/"
						className="mx-4 py-2 px-4 nav-reverse xl:mx-2 xl:px-2 xl:my-2"
					>
						Contacteaza-ne
					</Link>
					{screen < 900 && (
						<div className="w-full h-28 absolute bottom-0 flex flex-col items-start justify-between px-6 pb-2">
							<div>
								<Link href="/" className="logo">
									<img
										src="/photo/logo.png"
										alt="logo"
										className="logo-img"
									/>
								</Link>
							</div>
							<div>
								<p className="text-base">
									@2024 - All rights reserved
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
			{screen < 900 && (
				<div
					onClick={() => setNav(false)}
					className="w-full h-full bg-black fixed top-0 left-0 z-20"
					style={{
						transition: "400ms ease",
						visibility: `${nav ? "visible" : "hidden"}`,
						opacity: `${nav ? "0.5" : "0"}`,
					}}
				/>
			)}
		</>
	);
}
