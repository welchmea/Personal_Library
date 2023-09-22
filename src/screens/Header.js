import React from "react";
import SearchBar from './SearchBar.js';
import { useNavigate } from "react-router-dom";

// Global component that holds search bar and info popout
function Header () {

    const navigate = useNavigate();
    const redirect = useNavigate();
    const route = useNavigate();
    const favorite = useNavigate();

    return (
        <>
         <header>
          <h1 className="title">MY BOOKSHELF</h1>         
           
        <button className="main-button" onClick={()=> route("/")}>
            Home
          </button>

          <button className="main-button" onClick={()=>navigate("/Library")}>
            Bookshelf 
          </button>

          <button className="main-button" onClick={()=>redirect("/Queue")}>
            Queue
          </button>

          <button className="main-button" onClick={()=> favorite("/Favorites")}>
            Favorites
          </button>
          <SearchBar/>
          </header>
        </>
    )
};

export default Header;
