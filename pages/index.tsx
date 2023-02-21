import { Component } from 'react';
import StyledComponentsRegistry from './lib/registry';
import Nav from './components/nav';

class Home extends Component {
  isPageLoading = true;
  componentDidMount(): void {
    this.isPageLoading = false;
  }
  render() {
    return (
    <StyledComponentsRegistry>
      <Nav />
      <div>Home</div>
    </StyledComponentsRegistry>
  )
  }
}

export default Home;
