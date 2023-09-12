import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteRow from "../components/FavoriteRow";

function Favorites () {

    // variables to display data in library and to render additional components
    const navigate = useNavigate();
    const alreadyFetched = useRef(false); 
    const [favorites, setFavorites] = useState();
    const [state, setState] = useState(false);

    // calls MongoDB favorites collection to display all data
    useEffect(() => {
        function displayBooks() {
            fetch(`https://git.heroku.com/be-bookshelf.git/display_favorites`, {
              mode:'cors'})
              .then((response) => response.json())
              .then((data) => {
              setFavorites(data)
              setState(true)
              }) 
        return favorites
        };
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayBooks();
    console.log("useEffect ran...");
    }, []);

    return (
        <>
        <main>
            <section>
            <button className="main-button" onClick={()=>navigate("/")}>Back to Home Page</button>
            <article>
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
                        { state ? favorites.map((book, i) => <FavoriteRow row={book} key={i}/>):null}   
                        </tbody>
                    </table>
                </article> 

            </section>
        </main>
        </>
    )
};

export default Favorites;