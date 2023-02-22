import Nav from '../components/nav';
import { NextPage } from 'next';

const Projects:NextPage = () => {
    return (
        <>
          <Nav isPageLoading={true} />
          <div>Projects</div>
        </>
  )
}

export default Projects;
