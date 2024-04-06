import React, { useState, useEffect, useRef } from "react";
import HomePageRow from "../components/HomePageRow";

function HomePage() {
  // variables for navigation and displaying browsed data from db
  const [library, setLibrary] = useState();
  const [state, setState] = useState(false);
  const alreadyFetched = useRef(false);

  // calls MongoDB to retrieve last 10 viewed books
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
    // only allows useEffect to run once
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayBrowsed();
  }, [library]);

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">
          Track the books that you have read.
        </div>
        <div className="text-white pb-12 text-xl">Queue up your next read.</div>
        <div className="flex flex-row w-full justify-between mb-2 text-sm text-white">
          <div className="flex justify-end">Recently Visited</div>

          <div className="flex underline text-white">
            <button>reset</button>
          </div>
        </div>
        <div className="search_results flex gap-8 p-8 w-full justify-center">
          {state
            ? library.map((book, i) => <HomePageRow row={book} key={i} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default HomePage;
