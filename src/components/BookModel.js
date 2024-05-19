import React from "react";
import { Link } from 'react-router-dom';

// represents data for each individual item in the search results
function BookModel (props) {

  return (
    <>
    <figure className="bg-[#FFF7F7] flex flex-col items-center border border-1 border-black mt-8 p-8 ml-8 font-normal gap-y-8">
    <img src={props.image} alt="" width={200} height={300}></img>
      <figcaption>
      <p>{props.title}</p>
      <p>{props.author}</p>
      </figcaption>
      <button className="bg-[#FFF7F7] hover:bg-[#5A66F4] hover:text-white touch-manipulation font-normal rounded-xl text-black p-4 text-center text-sm transition-colors">
      <Link id="view-book-details" to="/Books" state={props}>More Info</Link><br/>
      </button>
    </figure>

    </>
  )
};

export default BookModel;