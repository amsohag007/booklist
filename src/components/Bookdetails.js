import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { bookReducer } from '../reducer/bookReducer';

function Bookdetails({book}) {
    const {dispatch} = useContext(BookContext);
    return (
        <li onClick={()=> dispatch({type:'REMOVE_BOOK',id:bookReducer.id})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>    
    )
}

export default Bookdetails
