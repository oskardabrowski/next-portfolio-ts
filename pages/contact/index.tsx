import { Component } from 'react';
import StyledComponentsRegistry from '../lib/registry';
import Nav from '../components/nav';

class Contact extends Component {
  isPageLoading = true;
  componentDidMount(): void {
    this.isPageLoading = false;
  }
  render() {
    return (
    <StyledComponentsRegistry>
        <Nav />
        <div>Contact</div>
    </StyledComponentsRegistry>
  )
  }
}

export default Contact;