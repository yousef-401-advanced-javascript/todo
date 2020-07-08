import React, {useContext} from 'react';
import { LoginContext } from '../../context/auth';
import Show from '../show/';
// helper component for ACL
function Auth (props){
  
  const context = useContext(LoginContext);

  let okToRender = false;
  try {
    okToRender =
        context.loggedIn && props.capability
          ? context.user.capabilities.includes(props.capability)
          : false;
  } catch (e) {
    console.log('NOT AUTHORIZED', e.message);
  }
  return <Show condition={okToRender}>{props.children}</Show>;
  
}
export default Auth;