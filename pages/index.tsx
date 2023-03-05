import {ReactNode} from 'react';
import { NextPage } from 'next';
import HomeHeader from '../components/headers/HomeHeader';
import WhyImDev from '../components/body/home/WhyImDev';
import ShortDesc from '../components/body/home/ShortDesc';
import SkillsAndKnownTech from '../components/body/home/SkillsAndKnownTech';

interface LayoutProps {
  children: ReactNode
}

const Home:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <HomeHeader />
          <WhyImDev />
          <ShortDesc />
          <SkillsAndKnownTech />
        </>
  )
}

export default Home;
