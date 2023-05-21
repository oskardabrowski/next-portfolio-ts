import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../../components/footers/Footer';
import ContactHead from '../../components/body/contact/ContactHead';
import ContactOptions from '../../components/body/contact/ContactOptions';

interface LayoutProps {
  children: ReactNode
}

const Contact:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <ContactHead />
          <ContactOptions />
          <Footer />
        </>
  )
}

export default Contact;
