import React,{useContext} from 'react';
import { SettingsContext } from '../../context/context';

const styles = {
  true: {
    display: 'block',
  },
  false: {
    display: 'none',
  },
};

function TodoList (props) {
  const context = useContext( SettingsContext );

  //these for the pagination
  const indexOfLastItemInThePage = context.currentPage * context.itemsPerPage;
  const indexOfFirstItemInThePage = indexOfLastItemInThePage - context.itemsPerPage;
  const currentItemsShown = props.list.slice(indexOfFirstItemInThePage, indexOfLastItemInThePage);
  
  return (
    
    <ul>
      {currentItemsShown.map(item => (
        // console.log(item),
        <li 
          className={`complete-${item.complete.toString()}`}key={item._id}  style={item.complete !==context.display? styles[context.display]:undefined}>

          <span onClick={() => props.handleComplete(item._id)}> {item.text}  <span> {item.assignee}   </span> </span>

          <button onClick={() =>props.deleteHandler1(item._id)}>Delete</button>

        </li>
      ))}
    </ul>
  );
}

export default TodoList;
