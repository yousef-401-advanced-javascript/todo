import React, { useContext } from 'react';
import { SettingsContext } from '../../context/context';

export default function SettingsEditor(props){
  const context = useContext(SettingsContext);
  return(
    <>
      <h3>completed display</h3>
      <button className={context.display.toString()} onClick={context.toggleMode}>{context.display?'don\'t show completed':'show completed'}</button>
    </>
  );
}