import Nav from './components/nav';
import {ReactNode} from 'react';
import { NextPage } from 'next';
import { HomeHeader } from './components/headers/HomeHeader';
import GlobalStyles from './GlobalStyles';

interface LayoutProps {
  children: ReactNode
}

const Home:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <Nav isPageLoading={false} />
          <HomeHeader />
        </>
  )
}

export default Home;
