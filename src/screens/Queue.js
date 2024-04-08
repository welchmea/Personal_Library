import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LibraryRow from "../components/LibraryRow";
import { ResetDB } from "../components/ResetDB";

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
      <div className="flex flex-row w-full justify-between mb-2 text-sm text-white">
          <div className="flex justify-end">Queue</div>

          <div className="flex underline text-white">
            <button onClick={() => ResetDB("queue")}>reset</button>
          </div>
        </div>

      <div className="search_results text-white">
        <div className="flex flex-wrap gap-8 p-8 w-full justify-center">
          {state
            ? queue.map((book, i) => <LibraryRow row={book} key={i} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Queue;
