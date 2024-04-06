import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddLibrary from "../components/AddLibrary";
import AddQueue from "../components/AddQueue";
import { AiOutlineCheck, AiOutlinePlusCircle } from "react-icons/ai";
import AddBrowse from "../components/AddBrowse";
import { Tooltip } from "@mui/material";

function Books() {
  // variables for rendering different components, navigation, and retrieving info using state.
  const [render, setRender] = useState(false);
  const [renderQueue, setRenderQueue] = useState(false);

  const location = useLocation();
  const result = location.state;

  const navigate = useNavigate();

  //code on lines 24/25 taken from React navigation: url:https://reactnavigation.org/docs/navigation-prop/
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
              <div>{result.title}</div>
              <div>{result.author}</div>
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
            <AddBrowse result={result} />
            <Tooltip title="Add to Bookshelf">
              <button onClick={() => setRender(true)}>
                <i>
                  <AiOutlineCheck className="text-lg mr-2" />
                </i>
              </button>
              {render ? <AddLibrary result={result} /> : null}
            </Tooltip>
            <Tooltip title="Add to Queue">
              <button onClick={() => setRenderQueue(true)}>
                <i>
                  <AiOutlinePlusCircle className="text-lg" />
                </i>
              </button>
              {renderQueue ? <AddQueue result={result} /> : null}
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
export default Books;
