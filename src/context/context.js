import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props){
  const [display, setDisplay] = useState(true);
  // const [numItems, setNum] = useState(2);
  const [sortType, setSort] = useState('difficulty');
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [numbersOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const state = {
    display,
    itemsPerPage,
    numbersOfPages,
    currentPage,
    sortType,
    changeDisplay:setDisplay,
    changeItemsPerPage: setItemsPerPage,
    changeNumberOfPages: setNumberOfPages,
    changeCurrentPage: setCurrentPage,
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


