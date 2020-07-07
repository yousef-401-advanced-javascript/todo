import React,{useContext} from 'react';
import { SettingsContext } from '../../context/context';

const styles = {
  true: {
    display: 'block',
    // color: 'ivory',
  },
  false: {
    display: 'none',
    // color: '#525252',
  },
};
function TodoList (props) {
  const Settings = useContext( SettingsContext );
  
  // console.log('SettingsContext',SettingsContext);
  return (
    
    <ul>
      {props.list.map(item => (
        // console.log('item list',item),
        <li 
          className={`complete-${item.complete.toString()}`}key={item._id}  style={item.complete !==Settings.display? styles[Settings.display]:undefined}>

          <span onClick={() => props.handleComplete(item._id)}> {item.text}   </span>

          {/* <button onClick={props.deleteHandler1(item._id)}>Delete</button> */}

        </li>
      ))}
    </ul>
  );
}

export default TodoList;
