import React from "react";
import Link  from "next/link";

export default function Navbar() {
	return (
		<div className="fixed w-full h-16 flex items-center justify-end pr-4">
			<Link href="/" className="text-white mx-4 hover:underline">Test 1</Link>
			<Link href="/" className="text-white mx-4 hover:underline">Test 2</Link>
			<Link href="/" className="text-white mx-4 hover:underline">Test 3</Link>
		</div>
	);
}
