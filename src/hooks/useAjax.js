import  { useState } from 'react';


function useAjax( ){
  const todoAPI = 'https://lab3232.herokuapp.com/todo';

  const [list, setList] = useState([]);

  const _addItem = (item) => {
  // item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
    console.log('add', list);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}`;//there is /id  but i delete it
      // console.log('item put',id);
      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' ,'bo':id},
        body: JSON.stringify(item),
      })
        .then(response => response.json())
        .then(savedItem => {
          console.log('savedItem',savedItem);
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };
  //   const deleteHandler = id => {
    // let item = list.filter(i => i._id === id)[0] || {};
    // console.log('delete handler3',list);
    // console.log('item',item);
  
  // // console.log('1',allItems);
  // // if (item._id) {
    
  // // item.complete = !item.complete;
    
  // let url = `${todoAPI}`;//there is /id  but i delete it
  // // console.log('item put',id);
  // fetch(url, {
  //   method: 'delete',
  //   mode: 'cors',
  //   cache: 'no-cache',
  //   headers: { 'Content-Type': 'application/json' ,'bo':id},
  //   body:item?JSON.stringify(item):undefined,
  // })
  //   .then(response => response.json())
  //   .then(deletedItem => {
  //     console.log('deletedItem',deletedItem);

  //     setList(list.filter(i => i._id !== id));
  //     console.log('state',list);
  //     // setList(list.filter(listItem => listItem._id !== item._id ));
  //   });
  //   console.log('list after del', list);
  // // .catch(console.error);
  // // }
  //   };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data))
      .catch(console.error);
  };
  return [list , _addItem , _toggleComplete , _getTodoItems];
}

export default useAjax;
