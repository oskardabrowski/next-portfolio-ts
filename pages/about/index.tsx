import Nav from '../components/nav';
import { NextPage } from 'next';
import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode
}

const About:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <div>About</div>
        </>
  )
}

export default About;
