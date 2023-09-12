import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LibraryRow from "../components/LibraryRow";

function Library () {

    // variables to display data in library and to render additional components
    const navigate = useNavigate();
    const alreadyFetched = useRef(false); 
    const [library, setLibrary] = useState();
    const [state, setState] = useState(false);

    // calls MongoDB library collection to display all data
    useEffect(() => {
        function displayBooks() {
            fetch(`https://git.heroku.com/be-bookshelf.git/display_books`, {
              mode:'cors'})
              .then((response) => response.json())
              .then((data) => {
              setLibrary(data)
              setState(true)
              }) 
        return library
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
                    <caption>Bookshelf</caption>
                        <thead>
                        <tr>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Favorite</th>
                            <th>View</th>
                            <th>Delete (Cannot Undo)</th>
                        </tr>
                        </thead>
                        <tbody>
                        { state ? library.map((book, i) => <LibraryRow row={book} key={i}/>):null}   
                        </tbody>
                    </table>
                </article> 

            </section>
        </main>
        </>
    )
};

export default Library;