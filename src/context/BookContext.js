import React, { createContext, useEffect, useReducer } from 'react'
import { bookReducer } from '../reducer/bookReducer';


export const BookContext =createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        //get value from local storage
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : [];
    });

    ///save value to local storage
    useEffect(() => {
      localStorage.setItem('books', JSON.stringify(books));
    }, [books]);
    return (
      <BookContext.Provider value={{ books, dispatch }}>
        {props.children}
      </BookContext.Provider>
    );
  }
   
  export default BookContextProvider;