import { NextPage } from "next";
import { useRouter } from "next/router";
import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import {AiFillHtml5} from 'react-icons/ai';
import { IconType } from "react-icons/lib";

interface GlobalProps {
    isPageLoading: boolean,
    setIsPageLoading: Dispatch<SetStateAction<boolean>>,
    pageLoaded: boolean,
    setPageLoaded: Dispatch<SetStateAction<boolean>>,
    LinkHandler: (e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, page: string) => void,
    isInViewport: (element: Element) => boolean,
    isSkillWindowOpened: boolean,
    setIsSkillWindowOpened: Dispatch<SetStateAction<boolean>>,
    SkillData: {
        tech: string;
        desc: string;
        link: string;
        ico: IconType;
        used: boolean;
    },
    SetSkillData: Dispatch<SetStateAction<{
        tech: string;
        desc: string;
        link: string;
        ico: IconType;
        used: boolean;
    }>>
}

interface ProviderProps {
    children: ReactNode
}

export const GlobalContext = createContext({} as GlobalProps);
const GlobalContextProvider:NextPage<ProviderProps> = ({children}) => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [pageLoaded, setPageLoaded] = useState(true);
    const [isSkillWindowOpened, setIsSkillWindowOpened] = useState(false);
    const [SkillData, SetSkillData] = useState({
        tech: 'HTML5',
        desc: '',
        link: '',
        ico: AiFillHtml5,
        used: false
    })

    const router = useRouter();

    function isInViewport(element:Element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

      const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
      const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

      return (vertInView && horInView);
    }

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
        LinkHandler,
        isInViewport,
        isSkillWindowOpened,
        setIsSkillWindowOpened,
        SkillData,
        SetSkillData
     }}>
        {children}
     </GlobalContext.Provider>
}

export default GlobalContextProvider;