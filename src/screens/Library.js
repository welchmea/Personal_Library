import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LibraryRow from "../components/LibraryRow";

function Library() {
  // variables to display data in library and to render additional components
  const navigate = useNavigate();
  const alreadyFetched = useRef(false);
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
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayBooks();
  }, [library]);

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">
          Track the books that you have read.
        </div>
        <div className="text-white pb-12 text-xl">
          {" "}
          <button className="main-button" onClick={() => navigate("/")}>
            Back to Home Page
          </button>
        </div>
      </div>

      <table className="">
        <caption>Bookshelf</caption>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Favorite</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state
            ? library.map((book, i) => <LibraryRow row={book} key={i} />)
            : null}
        </tbody>
      </table>
    </>
  );
}

export default Library;
