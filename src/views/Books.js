import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineCheck, AiOutlinePlusCircle } from "react-icons/ai";
import AddDB from "../components/AddDB";
import { Tooltip } from "@mui/material";

function Books() {
  // variables for rendering different components, navigation, and retrieving info using state.
  const [render, setRender] = useState(false);
  const [renderQueue, setRenderQueue] = useState(false);

  const location = useLocation();
  const result = location.state;
    console.log(result)
  const navigate = useNavigate();

  //code on lines 20-22 taken from React navigation: url:https://reactnavigation.org/docs/navigation-prop/
  const goBack = () => {
    navigate(-1);
  };
  

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <div className="text-white p-12 text-3xl">Discover new ideas.</div>
        <div className="text-white pb-12 text-xl">
          <button id="back" className="main-button" onClick={goBack}>
            Back to Search Results
          </button>
        </div>
        <div className="flex flex-col w-5/6 bg-[#FFF7F7] text-lg p-4">
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
            <AddDB row={result} page='browse'/>
            <Tooltip title="Add to Bookshelf">
              <button id="toolip-render" onClick={() => setRender(true)}>
                <AiOutlineCheck className="text-lg mr-2" />
              </button>
            </Tooltip> 
            {render ? <AddDB row={result} page='library' /> : null}
            <Tooltip title="Add to Queue">
              <button id="tooltip-set" onClick={() => setRenderQueue(true)}>
                <AiOutlinePlusCircle className="text-lg" />
              </button>
            </Tooltip> 
            {renderQueue ? <AddDB row={result} page='queue' /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default Books;