import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected.js';
import SettingsProvider from './context/context';
import Auth from './components/auth/';
import Login from './components/login/';
import LoginProvider from './context/auth';
const EditLink = (props) => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};
const DeleteLink = (props) => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};

const App = () => {
  return (
    <SettingsProvider>
      <LoginProvider>
        <Login />
        <EditLink />
        <DeleteLink />
        <ToDo />
      </LoginProvider>

    </SettingsProvider>

  );
};
export default App;
