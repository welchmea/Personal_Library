import React from "react";
import { Link } from 'react-router-dom';

// represents data for each individual item in the search results
function BookModel (props) {

  return (
    <>
    <figure className="images flex flex-col items-center border border-1 border-black mt-8 p-8 ml-8 font-normal gap-y-8">
    <img src={props.image} alt="" width={200} height={300}></img>
      <figcaption>
      <p>{props.title}</p>
      <p>{props.author}</p>
      </figcaption>
      <button className="main-button">
      <Link id="view-book-details" to="/Books" state={props}>More Info</Link><br/>
      </button>
    </figure>

    </>
  )
};

export default BookModel;
