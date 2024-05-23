import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import axios from 'axios';


interface DefaultContextValue {
    number: number,
    setNumber: (accessToken: number) => void,
}



export const DefaultContext = createContext<DefaultContextValue | undefined>(undefined);

export function useDefault() {
    const context = useContext(DefaultContext);
    if (!context) {
        throw new Error('useDefault must be used within an DefaultProvider');
    }
    return context;
}

export function DefaultProvider({ children }: { children: ReactNode }) {

    const [number, setNumber] = useState<number>(10); 


    const value: DefaultContextValue = {
        number, setNumber,
    };

    return (
        <DefaultContext.Provider value={value}>
            {children}
        </DefaultContext.Provider>
    )
}