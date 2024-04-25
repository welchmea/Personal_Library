import React, { useState, useEffect } from "react";
import HomePageRow from "../components/HomePageRow";
import { ResetDB } from "../components/ResetDB";

function HomePage() {
  // variables for navigation and displaying browsed data from db
  const [library, setLibrary] = useState();
  const [state, setState] = useState(false);

  // calls MongoDB to retrieve last 14 viewed books
  useEffect(() => {
    function displayBrowsed() {
      fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/display_browsed`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          setLibrary(data);
          setState(true);
        });
      return library;
    }
    displayBrowsed();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">
          Track the books that you have read.
        </div>
        <div className="text-white pb-12 text-xl">Queue up your next read.</div>
        <div className="flex flex-row w-full justify-between mb-2 text-sm text-white">
          <div className="flex justify-end ml-4">Recently Visited</div>

          <div className="flex underline text-white mr-4">
            <button id="reset" onClick={() => ResetDB("browse")}>reset</button>
          </div>
        </div>
        <div className="search_results flex flex-wrap w-full p-8 gap-8">
          {state
            ? library.map((book, i) => <HomePageRow row={book} key={i} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default HomePage;
