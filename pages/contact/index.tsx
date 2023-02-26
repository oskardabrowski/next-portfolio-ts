import Nav from '../components/nav';
import { NextPage } from 'next';
import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode
}

const Contact:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <Nav isPageLoading={false} />
          <div>Contact</div>
        </>
  )
}

export default Contact;
