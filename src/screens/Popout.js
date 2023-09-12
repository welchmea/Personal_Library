import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";
import {BsInfoCircle} from 'react-icons/bs';

// Followed a Geeks for Geeks tutorial on how to use React Popup
// url: https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/

function Popout () {
  return (
    <>
    <Popup className='popup-content' trigger={<button className="popup"><i><BsInfoCircle className='popup-icon'/></i></button>}modal nested >
          {
            close => (
            <>
            <button className="popup-exit" onClick=
              {() => close()}>
              <i><AiOutlineClose className="popup-icon"/></i>
              </button><br/>
              <br/>
              <h1>FAQ: Basic Functionalities for this site</h1>
              <p>You can create a personal bookshelf using this site, where you can store books you have already read,</p>
              <p>create a to read list, and updated both at your convenience.</p>
              <figure className="pop-image">
              <img src="/images/search.png" alt="" height={100}></img>
                <figcaption className="img-cap">
                <p>To perform a search...Type in the name of the Book or the Author. Press the search icon!</p>
                </figcaption>
              </figure>

              <figure className="pop-image">
              <p><img src='/images/library.png' alt="" height={100}></img></p>
                <figcaption className="img-cap" >
                <p>From the Library....you can view information about the book, or delete is from your shelf.</p>
                </figcaption>
              </figure>

              <figure className="pop-image">
              <figcaption className="img-cap">
              <p><img src='/images/move.png' alt="" height={100}></img></p>
              <p>From the Queue, you have the same abilites as the Library...and you can move a book from here to your Library shelf.</p>
              </figcaption>
              </figure>

              <figure className="pop-image">
              <figcaption className="img-cap">
              <p><img src='/images/add.png' alt="" height={100} width={650}></img></p>
              <p>From More Info... you can add a book to your Queue or Library shelf.</p>
              </figcaption>
              </figure>

              <button className="back-popout"onClick={() => close()}>Exit</button>    
              </>
              )
          }
    </Popup>
    </>
  )
};

export default Popout;