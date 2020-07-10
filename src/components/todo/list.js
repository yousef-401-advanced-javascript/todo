import React, { useContext } from 'react';
import { SettingsContext } from '../../context/context';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import Auth from '../auth/';

const styles = {
  true: {
    display: 'block',
  },
  false: {
    display: 'none',
  },
};

function TodoList(props) {
  const context = useContext(SettingsContext);

  //these for the pagination
  const indexOfLastItemInThePage = context.currentPage * context.itemsPerPage;
  const indexOfFirstItemInThePage = indexOfLastItemInThePage - context.itemsPerPage;
  const currentItemsShown = props.list.slice(indexOfFirstItemInThePage, indexOfLastItemInThePage);
  //   <ListGroup>
  //   <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
  //   <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  //   <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  //   <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  // </ListGroup>

  return (

    <ListGroup>
      {currentItemsShown.map(item => (
        // console.log(item),
        <ListGroup
          className={`complete-${item.complete.toString()}`} key={item._id} style={item.complete !== context.display ? styles[context.display] : undefined}>

          <ListGroup.Item onClick={() => props.handleComplete(item._id)}>ToDo title: {item.text}
            <ListGroup.Item> the assignee : {item.assignee}   </ListGroup.Item>
            <ListGroup.Item> The difficulty : {item.difficulty}   </ListGroup.Item>
            <ListGroup.Item>Added at {item.due}   </ListGroup.Item>
          </ListGroup.Item>

          <Auth capability="delete">
            <Button variant="primary" size="sm" onClick={() => props.deleteHandler1(item._id)}>Delete</Button>
]         </Auth>



        </ListGroup>
      ))}
    </ListGroup>
  );
}

export default TodoList;
