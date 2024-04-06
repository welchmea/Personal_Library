import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import QueueRow from "../components/QueueRow";

function Queue () {

    // variables to display data in Queue, navigate back to home page
    const navigate = useNavigate();
    const alreadyFetched = useRef(false); 
    const [queue, setQueue] = useState();
    const [state, setState] = useState(false);

    // calls MongoDB queue collection to retrieve stored data 
    useEffect(() => {
        function displayQueue() {
            fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/display_queue`, {
              mode:'cors'})
              .then((response) => response.json())
              .then((data) => {
              setQueue(data)
              setState(true)
              }) 
        return queue
        };
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    displayQueue();
    }, [queue]);

    return (
        <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">
          Queue up your next read.
        </div>
        <div className="text-white pb-12 text-xl">
          {" "}
          <button className="main-button" onClick={() => navigate("/")}>
            Back to Home Page
          </button>
        </div>
      </div>
                
                        <table>
                            <caption>Queue</caption>
                            <thead>
                                <tr>
                                    <th>Cover</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>View</th>
                                    <th>Delete</th>
                                    <th>Move to Library</th>
                                </tr>
                            </thead>
                        
                            <tbody>
                                { state ? queue.map((book, i) => <QueueRow row={book} key={i}/>):null}
                            </tbody>
                        </table>
        </>
    )
};

export default Queue;