import { Component } from 'react';
import StyledComponentsRegistry from '../lib/registry';
import Nav from '../components/nav';

class About extends Component {
  isPageLoading = true;
  componentDidMount(): void {
    this.isPageLoading = false;
  }
  render() {
    return (
    <StyledComponentsRegistry>
        <Nav />
        <div>About</div>
    </StyledComponentsRegistry>
  )
  }
}

export default About;