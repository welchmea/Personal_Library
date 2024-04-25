import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LibraryRow from "../components/LibraryRow";
import { ResetDB } from "../components/ResetDB";

function Library() {
  // variables to display data in library and to render additional components
  const navigate = useNavigate();
  const [library, setLibrary] = useState();
  const [state, setState] = useState(false);

  // calls MongoDB library collection to display all data
  useEffect(() => {
    function displayBooks() {
      fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/display_books`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          setLibrary(data);
          setState(true);
        });
      return library;
    }
    displayBooks();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">
          Track the books that you have read.
        </div>
        <div className="text-white pb-12 text-xl">
          {" "}
          <button id="back" className="main-button" onClick={() => navigate("/")}>
            Back to Home Page
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between mb-2 text-sm text-white">
      <div className="flex justify-end ml-4">Bookshelf </div>
        <div className="flex underline text-white mr-4">
            <button id="reset" onClick={() => ResetDB("books")}>reset</button>
          </div>
      </div>

      <div className="search_results text-white">
        <div className="flex flex-wrap gap-8 p-8 w-full">
          {state
            ? library.map((book, i) => <LibraryRow row={book} key={i} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Library;
