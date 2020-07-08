import React, {useContext} from 'react';
import { SettingsContext } from '../../context/context';


export default function Pagination(props){
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
  return (
    <>
      <nav>
        <ul >
          {pageNumbers.map(number => (
            <li key={number} >
              <button onClick={() => paginate(number)} style={style['pagination']}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );

}
