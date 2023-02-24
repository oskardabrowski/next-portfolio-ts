import Nav from '../components/nav';
import { NextPage } from 'next';

const About:NextPage = () => {
    return (
        <>
          <Nav isPageLoading={false} />
          <div>About</div>
        </>
  )
}

export default About;
