import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected.js';
import SettingsProvider from './context/context';


const App = () => {
  return (
    <SettingsProvider>
      <ToDo />

    </SettingsProvider>

  );
};
export default App;
