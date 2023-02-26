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
          <Nav isPageLoading={false} />
          <div>About</div>
        </>
  )
}

export default About;
