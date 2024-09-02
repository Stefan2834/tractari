import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface DefaultContextValue {
   screenWidth: number;
   screenHeight: number;
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

   useEffect(() => {
      function handleResize() {
         setScreenWidth(window.innerWidth);
         setScreenHeight(window.innerHeight);
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const value: DefaultContextValue = {
      screenWidth,
      screenHeight,
   };

   return <DefaultContext.Provider value={value}>{children}</DefaultContext.Provider>;
}
