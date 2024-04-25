import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

function SearchBar() {
  //Updates the input box and naviagtes to the results page
  const [input, setInput] = useState("");
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  const retrieveQuery = async () => {
    await fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/?input=${input}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data.items)
        // navigate('/Search', { state: book })
        setInput('')
     })
     .catch((err)=>console.log(err));
}

  function handleKeyDown(e) {
    if (e.key === "Enter") {
        retrieveQuery()
    }
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter a Book Title or Author"
          className="mr-2 rounded-3xl p-1 pl-4 text-sm w-[80vw] sm:w-[90vw] md:w-[40vw] lg:w-[40vw] font-normal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>

        <Link to="/Search" state={book}>
          <BsSearch className="text-slate-200 text-md mr-8" />
        </Link>
      </div>
    </>
  );
}

export default SearchBar;
