import React, {useContext} from 'react';
import { SettingsContext } from '../../context/context';
import Pagination from 'react-bootstrap/Pagination';
import ButtonToolbar from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';



export default function Pagination1(props){
  const style = {
    pagination:{
      display:'inline-block',
    },
  };
  const pageNumbers = [];
  const context = useContext(SettingsContext);
  const paginate = pageNumber => context.changeCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(props.list.length / context.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const checkout= ()=>{
    if(context.prev === 1 ){
      context.setPrev(2);
      context.setNext(3);
    }
  };
  return (
    <>
      <nav>
        <Pagination aria-label="Toolbar with button groups">
       
          {pageNumbers.map(number => (
            <Pagination.Item key={number}   onClick={() => paginate(number)}>
              <Button onClick={() => paginate(number)} style={style['pagination']}>
                {number}
              </Button>
            </Pagination.Item>
          ))}
       
        </Pagination>
      </nav>
    </>
  );

}
