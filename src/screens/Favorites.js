import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteRow from "../components/FavoriteRow";
import { ResetDB } from "../components/ResetDB";

function Favorites() {
  // variables to display data in library and to render additional components
  const navigate = useNavigate();
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
    displayBooks();
  }, []);

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
          <div className="flex justify-end ml-4">Favorites</div>

          <div className="flex underline text-white mr-4">
            <button onClick={() => ResetDB("favorites")}>reset</button>
          </div>
        </div>
      <div className="search_results text-white">
        <div className="flex flex-wrap gap-8 p-8 w-full">
          {state
            ? favorites.map((book, i) => <FavoriteRow row={book} key={i} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Favorites;
