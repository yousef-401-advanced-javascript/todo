import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props){
  const [display, setDisplay] = useState(true);
  const [numItems, setNum] = useState(2);
  const [sortType, setSort] = useState('difficulty');
  const state = {
    display,
    numItems,
    sortType,
    changeDisplay:setDisplay,
    changeNumItems:setNum,
    changeSortType:setSort,
    toggleMode: changeMode,
  };
  function changeMode(){
    setDisplay(!state.display);
  }
  return(
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
export default SettingsProvider;


