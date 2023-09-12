import React from "react";
import SearchBar from './SearchBar.js';

// Global component that holds search bar and info popout
function Header () {
    return (
        <>
         <header>
          <h1 className="title">
          PERSONAL LIBRARY
          </h1>
          <SearchBar/>
          </header>
        </>
    )
};

export default Header;
