import { NextPage } from "next";
import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface GlobalProps {
    isPageLoading: boolean,
    setIsPageLoading: Dispatch<SetStateAction<boolean>>,
    pageLoaded: boolean,
    setPageLoaded: Dispatch<SetStateAction<boolean>>
}

interface ProviderProps {
    children: ReactNode
}

export const GlobalContext = createContext({} as GlobalProps);

export const GlobalContextProvider:NextPage<ProviderProps> = ({children}) => {
    const [isPageLoading, setIsPageLoading] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(true);
    return <GlobalContext.Provider value={{
        isPageLoading,
        setIsPageLoading,
        pageLoaded,
        setPageLoaded
     }}>
        {children}
     </GlobalContext.Provider>
}