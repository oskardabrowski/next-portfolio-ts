import { Component } from 'react';
import StyledComponentsRegistry from '../lib/registry';
import Nav from '../components/nav';

class Projects extends Component {
  isPageLoading = true;
  componentDidMount(): void {
    this.isPageLoading = false;
  }
  render() {
    return (
    <StyledComponentsRegistry>
        <Nav />
        <div>Projects</div>
    </StyledComponentsRegistry>
  )
  }
}

export default Projects;