import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function SearchBar() {
  //Updates the input box and naviagtes to the results page
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate('/Search', { state: input })
      setInput('');
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <input
          id="search"
          type="text"
          placeholder="Enter a Book Title or Author"
          className="mr-2 rounded-3xl p-1 pl-4 text-sm w-[80vw] sm:w-[90vw] md:w-[40vw] lg:w-[40vw] font-normal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>

        <Link id="search" to="/Search" state={input}>
          <BsSearch className="text-slate-200 text-md mr-8" />
        </Link>
      </div>
    </>
  )
}

export default SearchBar;
