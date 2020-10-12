import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

function Navbar() {
   const {books} = useContext(BookContext);
    return (
        <div className="navbar" >
        <h1>Context Hook BookList </h1>
        <p>Currently you have {books.length} books to get through.</p>
        </div>
    )
}

export default Navbar
