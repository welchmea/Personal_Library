import React from "react";
import { Link } from 'react-router-dom';
import { GrView } from 'react-icons/gr';

// represents data for each individual item in the search results
function BookModel (props) {

  return (
    <>
    <figure className="images">
    <img src={props.image} alt="" width={200} height={300}></img>
      <figcaption>
      <p>{props.title}</p>
      <p>{props.author}</p>
      </figcaption>
      <button className="main-button">
      <Link to="/Books" state={props} className="viewButton"><i><GrView className="viewButton"/>More Info</i></Link><br/>
      </button>
      
    </figure>

    </>
  )
};

export default BookModel;
