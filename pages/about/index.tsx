import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../../components/footers/Footer';
import AboutHeader from '../../components/body/about/AboutHeader';
import AboutDescription from '../../components/body/about/AboutDescription';
import AboutTree from '../../components/body/about/AboutTree';
interface LayoutProps {
  children: ReactNode
}

const About:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <AboutHeader />
          <AboutDescription />
          <AboutTree />
          <Footer />
        </>
  )
}

export default About;
