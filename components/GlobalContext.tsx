import { NextPage } from "next";
import { useRouter } from "next/router";
import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface GlobalProps {
    isPageLoading: boolean,
    setIsPageLoading: Dispatch<SetStateAction<boolean>>,
    pageLoaded: boolean,
    setPageLoaded: Dispatch<SetStateAction<boolean>>,
    LinkHandler: (e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, page: string) => void;
}

interface ProviderProps {
    children: ReactNode
}

export const GlobalContext = createContext({} as GlobalProps);
const GlobalContextProvider:NextPage<ProviderProps> = ({children}) => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [pageLoaded, setPageLoaded] = useState(true);

    const router = useRouter();

    const LinkHandler = (e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, page:string):void => {
        e.preventDefault();

        if(router.pathname === page) return;

        setIsPageLoading(true);
        setPageLoaded(false);
        setTimeout(() => {
            router.push(page);
        }, 2500);
    };

    return <GlobalContext.Provider value={{
        isPageLoading,
        setIsPageLoading,
        pageLoaded,
        setPageLoaded,
        LinkHandler
     }}>
        {children}
     </GlobalContext.Provider>
}

export default GlobalContextProvider;