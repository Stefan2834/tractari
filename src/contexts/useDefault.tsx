import React, { createContext, useContext, ReactNode, useState, useEffect, useRef } from "react";

import { redundantData, DataType } from "@/constants/data";

type ContactRefType = any;

interface DefaultContextValue {
	screenWidth: number;
	screenHeight: number;
	contactNameRef: ContactRefType
	contactEmailRef: ContactRefType
	contactMessageRef: ContactRefType,
	data: DataType
}


export const DefaultContext = createContext<DefaultContextValue | undefined>(undefined);

export function useDefault() {
	const context = useContext(DefaultContext);
	if (!context) {
		throw new Error("useDefault must be used within an DefaultContextProvider");
	}
	return context;
}

export function DefaultContextProvider({ children }: { children: ReactNode }) {
	const [screenWidth, setScreenWidth] = useState<number>(0);
	const [screenHeight, setScreenHeight] = useState<number>(0);

	const data: DataType = redundantData;


	const contactNameRef = useRef<ContactRefType>(null);
	const contactEmailRef = useRef<ContactRefType>(null);
	const contactMessageRef = useRef<ContactRefType>(null);

	useEffect(() => {
		function handleResize() {
			setScreenWidth(window.innerWidth);
			setScreenHeight(window.innerHeight);
		}

		handleResize();

		window.addEventListener("resize", handleResize);


		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const value: DefaultContextValue = {
		screenWidth,
		screenHeight,
		contactNameRef,
		contactEmailRef,
		contactMessageRef,
		data
	};

	return <DefaultContext.Provider value={value}>{children}</DefaultContext.Provider>;
}
