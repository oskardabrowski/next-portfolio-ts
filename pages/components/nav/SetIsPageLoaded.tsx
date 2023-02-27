import { NextPage } from "next";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";

const SetIsPageLoaded:NextPage = () => {

    const {setIsPageLoading} = useContext(GlobalContext);

    useEffect(() => {
        setIsPageLoading(false);
    }, [])

  return (
    <></>
  )
}

export default SetIsPageLoaded