import Nav from './components/nav';
import { NextPage } from 'next';

const Home:NextPage = () => {
    return (
        <>
          <Nav isPageLoading={false} />
          <div>Home</div>
        </>
  )
}

export default Home;
