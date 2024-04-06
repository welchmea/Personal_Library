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

      <div className="flex justify-center bg-[#5A66F4] p-4">
        <table className="flex flex-col bg-white w-5/6 border border-black">
          <div className="flex flex-row justify-between mx-4">
            <caption>Bookshelf</caption>
            <div>
              <button>reset</button>
            </div>
          </div>

          <thead>
            <tr>
              <th className=" ">Cover</th>
              <th className="">Title</th>
              <th className="">Author</th>
              <th className="">Favorite</th>
              <th className="">Delete</th>
            </tr>
          </thead>
          <tbody className="border border-black">
            {state
              ? library.map((book, i) => <LibraryRow row={book} key={i} />)
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Library;
