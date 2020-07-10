import React ,{useState} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import superagent from 'superagent';
dotenv.config();

const API = process.env.API_SERVER  || 'https://lab3232.herokuapp.com' ||'https://auth-server-401.herokuapp.com';
const SECRET = process.env.JWT_SECRET ||'mysecret' || 'supersecret' || 'yousef';

export const LoginContext = React.createContext();


export default function LoginProvider(props){
  const [loggedIn, setLoggedIn] = useState(false);
  const [logIn, setLogIn] = useState(login);
  const [user, setUser] = useState({});
  const [logOut, setLogOut] = useState(logout);
  console.log('user',user);
  const state = {
    loggedIn,
    logIn,
    logOut,
    user,
    setLoggedIn:setLoggedIn,
    setLogIn:setLogIn,
    setLogOut:setLogOut,
    setUser:setUser,
  };

  function setLoginState(loggedIn, token, user){
    cookie.save('auth', token);
    setLoggedIn(loggedIn);
    setLogIn(token);
    setUser(user);
  }
  function validateToken(token){
    try{
      const user = jwt.verify(token, SECRET);
      console.log('VERIFIED', user);
      setLoginState(true, token, user);
    }catch(e){
      setLoginState(false, null, {});
      console.log('Token validation Error', e.message);

    }
  }
  function login(username, password){
    superagent
      .post(`${API}/signin`)
      .set('authorization', `Basic ${btoa(`${username}:${password}`)}`)
      .then(results=>{
        validateToken(results.body.token);
      }).catch(console.error);
  }
  function logout(){
    setLoginState(false, null, {});
  }
  //   useEffect(()=>{
  //     const token = cookie.load('auth');
  //     validateToken(token);
  //   },[]);
  return(
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );


}
// export default LoginProvider;