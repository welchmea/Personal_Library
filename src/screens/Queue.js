import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LibraryRow from "../components/LibraryRow";

function Queue() {
  // variables to display data in Queue, navigate back to home page
  const navigate = useNavigate();
  const alreadyFetched = useRef(false);
  const [queue, setQueue] = useState();
  const [state, setState] = useState(false);

  // calls MongoDB queue collection to retrieve stored data
  useEffect(() => {
    function displayQueue() {
      fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/display_queue`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          setQueue(data);
          setState(true);
        });
      return queue;
    }
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayQueue();
  }, [queue]);

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">Queue up your next read.</div>
        <div className="text-white pb-12 text-xl">
          {" "}
          <button className="main-button" onClick={() => navigate("/")}>
            Back to Home Page
          </button>
        </div>
      </div>

      <div className="flex justify-center search_results p-4">
        <table className="flex flex-col bg-white w-5/6 border border-black">
          <div className="flex flex-row justify-between mx-4">
            <caption>Queue</caption>
            <div>
              <button>reset</button>
            </div>
          </div>

          <thead>
            <tr>
              <th className=" ">Cover</th>
              <th className="">Title</th>
              <th className="">Author</th>
              <th className="">Move To Bookshelf</th>
              <th className="">Delete</th>
            </tr>
          </thead>

        <tbody>
          {state
            ? queue.map((book, i) => <LibraryRow row={book} key={i} />)
            : null}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Queue;
