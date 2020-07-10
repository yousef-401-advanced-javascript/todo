import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function TodoForm(props) {
  const [handleInputChange, handleSubmit] = useForm(props);
  // function handleForm(){
  //   //this is from the todo-connected file 
  //   props.handleSubmit(item);
  // }

  return (
    <>
      <h3>Add Item</h3>
      {/* <form onSubmit={handleSubmit}> */}
      <Form role="form" onSubmit={handleSubmit}>
        <Form.Label>
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        <Button className="btn btn-primary btn-large centerButton" type="submit">Add Item</Button>
      </Form>
      {/* </form> */}

    </>
  );
}

export default TodoForm;


////////////////////////////////////////////////////from previuos labs
// let [item ,itemState] = useState({});
// const handleInputChange = e => {
//   // const [allItem ,allItemState] = useState({});
//   // console.log('e.target.value',e.target.value);
//   // console.log('item',item);
//   // console.log('e.target.name',e.target.name);
//   // itemState([...allItem,item]);
//   //////////////\\\\\\\\\\\\\\\\\\\\
//   //to do input 
//   //its used to change the state and adding  new key(assignee) with value of (Assigned To Input) OR key difficulty with value of the scale range input
//   itemState({...item, [e.target.name]: e.target.value } );
//   /*
//   * rally good implementing
//   (copying the item object and if the kye is not there it will
//   add it with the value but if key is there just change it with the new one)    
//   */
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   e.target.reset();
//   props.handleSubmit(item);
//   itemState({ type: 'reset' });
// };
