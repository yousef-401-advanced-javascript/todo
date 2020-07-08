import React ,{useState, useContext} from 'react';
import { LoginContext } from '../../context/auth';
import Show from '../show/';

export default function Login (props){

  const context = useContext(LoginContext);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeUserName (e) {
    setUserName({ [e.target.name]: e.target.value });
  };
  function handleChangePassword  (e) {
    setPassword({ [e.target.name]: e.target.value });

  };

  function handleSubmit(e) {
    e.preventDefault();
    context.setLogIn(username, password);
  };

  return(
    <>
      <Show condition={context.loggedIn}>
        <button onClick={context.logOut}> Log Out</button>
      </Show>
      <Show condition={!context.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChangeUserName}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            onChange={handleChangePassword}
          />
          <button>Login</button>
        </form>
      </Show>
    </>
  );

}