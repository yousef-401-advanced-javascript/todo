import React, {useContext} from 'react';
import { LoginContext } from '../../context/auth';
import Show from '../show/';
// helper component for ACL
class Auth extends React.Component {

  static contextType = LoginContext;

  render() {
    let okToRender = false;

    try {
      okToRender = this.context.loggedIn && (
        this.props.capability ?
          this.context.user.capabilities.includes(this.props.capability)
          : true
      );
    } catch (e) {
      console.warn('Not Authorized!');
    }

    return (
      <Show condition={okToRender}>
        {this.props.children}
      </Show>
    );
  }
}

export default Auth;