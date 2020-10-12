import React from 'react';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';
import Bookform from './components/Bookform'

function App() {
  return (
    <div className="App">
     <BookContextProvider>
       <Navbar/>
       <Booklist />
       <Bookform/>
     </BookContextProvider>
    </div>
  );
}

export default App;
