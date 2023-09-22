import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

function SearchBar () {

//Updates the input box
  const [input, setInput] = useState('');

// reloads window for every new search
  function refreshPage() {
    window.location.reload(false);
  }
    return (
        <>
        <form>
          <input
            placeholder="Enter a Book Title or Author. Click search icon ---->"
            className="search" 
            value={input}
            onChange={e => setInput(e.target.value)}>
          </input>

          <button 
            className="icon_three"
            type="submit" 
            value="search"
            onClick={refreshPage}>
            <Link to="/Search" state={input}><BsSearch className="search_icon"/></Link> 
          </button>

        </form>
        </>
    )
};

export default SearchBar;
