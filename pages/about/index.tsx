import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../../components/footers/Footer';
import AboutHeader from '../../components/body/about/AboutHeader';
interface LayoutProps {
  children: ReactNode
}

const About:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          <AboutHeader />
          {children}
          <Footer />
        </>
  )
}

export default About;
