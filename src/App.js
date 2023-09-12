import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import AnimatedCursor from "react-animated-cursor"

// code from CS 290 project was used as a template for this project UI design
// imports all screens for routing

import HomePage from './screens/HomePage';
import Library from './screens/Library.js';
import Queue from './screens/Queue.js';
import Search from './screens/Search.js';
import Books from './screens/Books.js';
import Header from './screens/Header';
import SearchBar from './screens/SearchBar';
import Popout from './screens/Popout';
import ViewBook from './screens/ViewBook';
import Favorites from './screens/Favorites';

function App() {

  return (
    <>
    <AnimatedCursor/>
    <BrowserRouter>
    <Header/>
          <main>
            <section>
              <Routes>
              <Route path="/" element={<HomePage />} /> 
              <Route path="/Library" element={<Library/>} /> 
              <Route path="/Queue" element={<Queue/>} /> 
              <Route path="/Search" element={<Search />} /> 
              <Route path="/Books/" element={<Books/>} /> 
              <Route path="/SearchBar" element={<SearchBar />} /> 
              <Route path="/Popout" element={<Popout />} /> 
              <Route path="/ViewBook" element={<ViewBook />} /> 
              <Route path="/Favorites" element={<Favorites/>} />
              </Routes>
            </section>
          </main>
      </BrowserRouter>
      </>
  );
}

export default App;
