import { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from '../../components/footers/Footer';
import ProjectsHeader from '../../components/body/projects/ProjectsHeader';
import ProjectsList from '../../components/body/projects/ProjectsList';
interface LayoutProps {
  children: ReactNode
}

const Projects:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <ProjectsHeader />
          <ProjectsList />
          <Footer />
        </>
  )
}

export default Projects;
