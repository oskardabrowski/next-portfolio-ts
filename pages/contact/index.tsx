import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../../components/footers/Footer';
interface LayoutProps {
  children: ReactNode
}

const Contact:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <Footer />
        </>
  )
}

export default Contact;
