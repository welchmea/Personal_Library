import React, {useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import BookCards from "../components/BookCards";

function Search () {

    // variables to retrieve data from different component
    const location = useLocation();
    const inputs = location.state;

    // variables to display search results
    const [book, setBook] = useState([]);
    const alreadyFetched = useRef();

    // calls Google Books API with a query, that will set data in a variable and display
    useEffect(() => {
        function findBooks() {
            const query = inputs
            fetch(`https://git.heroku.com/be-bookshelf.git/?input=${query}`, {
              mode:'cors'})
              .then((response) => response.json())
              .then((data) => {
              setBook(data.items)
              })
            return book
        };
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    findBooks();
    console.log("useEffect ran...");
    }, []);

    const books = book

    return (
        <>
        <main>
            <section className="search_results">
                <h2>Search Results</h2>
                <BookCards books={books}/>
            </section>
        </main>
        </>
    )
};

export default Search;