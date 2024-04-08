import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookCards from "../components/BookCards";

function Search() {
  // variables to retrieve data from different component
  const location = useLocation();
  const inputs = location.state;

  // variables to display search results
  const [book, setBook] = useState([]);

  // calls Google Books API with a query, that will set data in a variable and display
  useEffect(() => {
    function findBooks() {
      const query = inputs;
      fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/?input=${query}`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          setBook(data.items);
        });
      return book;
    }
    findBooks();
  }, [inputs, book]);

  const books = book;

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">
          Track the books that you have read.
        </div>
        <div className="text-white pb-12 text-xl">Queue up your next read.</div>
        <div className="flex text-sm text-white">Search Results</div>
        <div className="flex flex-wrap gap-8 search_results w-full mt-4">
          <BookCards books={books} />
        </div>
      </div>
    </>
  );
}

export default Search;
