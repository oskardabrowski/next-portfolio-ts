import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../../components/footers/Footer';
import ProjectsHeader from '../../components/body/projects/ProjectsHeader';
interface LayoutProps {
  children: ReactNode
}

const Projects:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <ProjectsHeader />
          <Footer />
        </>
  )
}

export default Projects;
