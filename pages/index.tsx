import {ReactNode} from 'react';
import { NextPage } from 'next';
import HomeHeader from './components/headers/HomeHeader';
import GlobalStyles from './GlobalStyles';

interface LayoutProps {
  children: ReactNode
}

const Home:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <HomeHeader />
        </>
  )
}

export default Home;
