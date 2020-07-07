import { useState } from 'react';


const useForm = (props) => {
  let [item ,itemState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    itemState({ type: 'reset' });
  };
  const handleInputChange = (e) => {
    itemState({...item, [e.target.name]: e.target.value } );
    // console.log(item)
  };
  return [ handleInputChange, handleSubmit];
};

export default useForm;