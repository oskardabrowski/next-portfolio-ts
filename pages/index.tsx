import {ReactNode} from 'react';
import { NextPage } from 'next';
import HomeHeader from '../components/headers/HomeHeader';
import ShortDesc from '../components/body/home/ShortDesc';

interface LayoutProps {
  children: ReactNode
}

const Home:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <HomeHeader />
          <ShortDesc />
        </>
  )
}

export default Home;
