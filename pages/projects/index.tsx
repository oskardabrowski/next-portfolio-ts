import Nav from '../components/nav';
import { NextPage } from 'next';

const Projects:NextPage = () => {
    return (
        <>
          <Nav isPageLoading={false} />
          <div>Projects</div>
        </>
  )
}

export default Projects;
