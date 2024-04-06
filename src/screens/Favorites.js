import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteRow from "../components/FavoriteRow";

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
      <table>
        <caption>Favorites</caption>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Notes</th>
            <th>View</th>
            <th>Delete (Cannot Undo)</th>
          </tr>
        </thead>
        <tbody>
          {state
            ? favorites.map((book, i) => <FavoriteRow row={book} key={i} />)
            : null}
        </tbody>
      </table>
    </>
  );
}

export default Favorites;
