import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LibraryRow from "../components/LibraryRow";

function Favorites() {
  // variables to display data in library and to render additional components
  const navigate = useNavigate();
  const alreadyFetched = useRef(false);
  const [favorites, setFavorites] = useState();
  const [state, setState] = useState(false);

  // calls MongoDB favorites collection to display all data
  useEffect(() => {
    function displayBooks() {
      fetch(
        `https://be-bookshelf-eb8a2587c2db.herokuapp.com/display_favorites`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setFavorites(data);
          setState(true);
        });
      return favorites;
    }
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayBooks();
  }, [favorites]);

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">Would recommend to a friend.</div>
        <div className="text-white pb-12 text-xl">
          {" "}
          <button className="main-button" onClick={() => navigate("/")}>
            Back to Home Page
          </button>
        </div>
      </div>
      <div className="flex justify-center search_results p-4">
        <table className="flex flex-col bg-white w-5/6 border border-black">
          <div className="flex flex-row justify-between mx-4">
            <caption>Favorites</caption>
            <div>
              <button>reset</button>
            </div>
          </div>

          <thead>
            <tr>
              <th className=" ">Cover</th>
              <th className="">Title</th>
              <th className="">Author</th>
              <th className="">Notes</th>
              <th className="">Delete</th>
            </tr>
          </thead>
        <tbody>
          {state
            ? favorites.map((book, i) => <LibraryRow row={book} key={i} />)
            : null}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Favorites;
