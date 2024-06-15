import React, {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect,
} from "react";

interface DefaultContextValue {
	screen: number;
	setScreen: (screen: number) => void;
}

export const DefaultContext = createContext<DefaultContextValue | undefined>(
	undefined
);

export function useDefault() {
	const context = useContext(DefaultContext);
	if (!context) {
		throw new Error("useDefault must be used within an DefaultProvider");
	}
	return context;
}

export function DefaultProvider({ children }: { children: ReactNode }) {

    const [screen, setScreen] = useState<number>(0);


	useEffect(() => {
		function handleResize() {
			setScreen(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const value: DefaultContextValue = {
		screen,
		setScreen,
	};

	return (
		<DefaultContext.Provider value={value}>
			{children}
		</DefaultContext.Provider>
	);
}
