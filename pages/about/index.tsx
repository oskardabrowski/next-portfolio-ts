import Nav from '../components/nav';
import { NextPage } from 'next';

const About:NextPage = () => {
    return (
        <>
          <Nav isPageLoading={true} />
          <div>About</div>
        </>
  )
}

export default About;
