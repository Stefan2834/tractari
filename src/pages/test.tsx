import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger) 

export default function App() {
	const container: any = useRef();

	useGSAP(
		() => {
			gsap.to('.box', {
				scrollTrigger: {
					trigger: ".box",
					scrub:true,
				},
				x: 100
			});
		},
		{ scope: container }
	);

	return (
		<div style={{height:"400vh"}}>
			<div ref={container} style={{marginTop:"100vh"}}>
				<div className="box bg-red-400">selector</div>
			</div>
		</div>
	);
}
