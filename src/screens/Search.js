import React from "react";
import { useLocation } from "react-router-dom";
import BookCards from "../components/BookCards";

function Search() {
  // variables to retrieve data from different component
  const location = useLocation();
  const inputs = location.state;
  console.log(inputs)

  return (
    <>
      {/* <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">
          Track the books that you have read.
        </div>
        <div className="text-white pb-12 text-xl">Queue up your next read.</div> */}
        {/* <div className="flex text-sm text-white">Search Results</div> */}
        <div className="flex flex-wrap gap-8 search_results w-full mt-4">
          {
            inputs &&
            <BookCards books={inputs} />
          }
       
        </div>
      {/* </div> */}
    </>
  );
}

export default Search;
