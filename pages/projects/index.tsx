import { NextPage } from 'next';
import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode
}

const Projects:NextPage<LayoutProps> = ({children}) => {
    return (
        <>
          {children}
          <div>Projects</div>
        </>
  )
}

export default Projects;
