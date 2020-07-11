import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected.js';
import SettingsProvider from './context/context';

import Auth from './components/auth/';
import Login from './components/login/';
import SignUp from './components/signup/';

import LoginProvider from './context/auth';

const App = () => {
  return (
    <LoginProvider>
      <Login />
      <SignUp />
      <Auth capability="read" >

        <SettingsProvider>

          <ToDo />

        </SettingsProvider>

      </Auth >
    </LoginProvider>

  );
};
export default App;
