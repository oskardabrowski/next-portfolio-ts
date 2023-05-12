import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../../components/footers/Footer';
import AboutHeader from '../../components/body/about/AboutHeader';
import AboutDescription from '../../components/body/about/AboutDescription';
import AboutTree from '../../components/body/about/AboutTree';
import AboutOther from '../../components/body/about/AboutOther';
import AboutExperience from '../../components/body/about/AboutExperience';
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
          <AboutExperience />
          <AboutOther />
          <Footer />
        </>
  )
}

export default About;
