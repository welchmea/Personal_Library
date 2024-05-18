import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AddLibrary from "../components/AddLibrary";
import AddQueue from "../components/AddQueue";
import { AiOutlineCheck, AiOutlinePlusCircle } from "react-icons/ai";
import { Tooltip } from "@mui/material";

function ViewBook() {

  // retrieves data from useState which was set in components Library Row and Queue Row
  const location = useLocation();
  const results = location.state;
  const navigate = useNavigate();

  // variables to access components upon rendering and display data about selected book
  const [result, setResult] = useState();
  const [display, setDisplay] = useState(false);
  const [render, setRender] = useState(false);
  const [renderQueue, setRenderQueue] = useState(false);

  // calls backend to access MongoDb data through a title, display information
  useEffect(() => {
    function displayInfo() {
      fetch("https://be-bookshelf-eb8a2587c2db.herokuapp.com/display_info", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(results),
      })
        .then((response) => response.json())
        .then((data) => {
          setResult(data);
          setDisplay(true);
        })
        .catch((err)=>console.log(err));
      return result;
    }
    displayInfo();
  }, []);

  // code taken from React navigation: url:https://reactnavigation.org/docs/navigation-prop/
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">Discover new ideas.</div>
        <div className="text-white pb-12 text-xl">
          <button className="main-button" onClick={goBack}>
            Back to Search Results
          </button>
        </div>
        {display ? (
          <div className="flex flex-col w-5/6 images text-lg p-4">
            <div className="flex flex-row">
              <div className="p-2 place-content-center ml-8">
                <img
                  className="mt-8 mb-8"
                  src={result.image}
                  alt=""
                  width={400}
                  height={500}
                ></img>
                <div className="text-xl">{result.title}</div>
                <div className="italic mt-2 text-md">{result.author}</div>
              </div>
              <div className="flex flex-col gap-y-4 justify-center ml-8 p-2">
                <div>{result.description}</div>
                <div>Genre: {result.category}</div>
                <div>Page Count: {result.pageCount}</div>
                <div>Publication Date: {result.publishedDate}</div>
                <div>Publisher: {result.publisher}</div>
                <div>Cost on Barnes and Noble: </div>
              </div>
            </div>
            <div className="flex justify-center p-2">
              <Tooltip title="Add to Bookshelf">
                <button id="tooltip-render" onClick={() => setRender(true)}>
                  <AiOutlineCheck className="text-lg mr-2" />
                </button>
              </Tooltip>
              {render ? <AddLibrary result={result} /> : null}
              <Tooltip title="Add to Queue">
                <button id="tooltip" onClick={() => setRenderQueue(true)}>
                  <AiOutlinePlusCircle className="text-lg" />
                </button>
              </Tooltip>
              {renderQueue ? <AddQueue result={result} /> : null}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default ViewBook;
