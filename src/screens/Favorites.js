import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LibraryRow from "../components/LibraryRow";
import ResetDB from "../components/ResetDB";

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
        <div className="text-white p-12 text-3xl">
          Would recommend to a friend.
        </div>
        <div className="text-white pb-12 text-xl">
          {" "}
          <button className="main-button" onClick={() => navigate("/")}>
            Back to Home Page
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between mb-2 text-sm text-white">
          <div className="flex justify-end">Favorites</div>

          <div className="flex underline text-white">
            <button onClick={ResetDB("favorites")}>reset</button>
          </div>
        </div>
      <div className="search_results text-white">
        <div className="flex flex-wrap gap-8 p-8 w-full justify-center">
          {state
            ? favorites.map((book, i) => <LibraryRow row={book} key={i} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Favorites;
