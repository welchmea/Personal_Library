import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteDB } from "./DeleteDB";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import AddDB from "./AddDB";
import { SwitchDB } from "./SwitchDB";
import { HiSwitchHorizontal } from "react-icons/hi";

// represents a row in the recently visited table on the Home page
function BookRow({ row, page }) {
  const [actionOptions, setActionOptions] = useState(true);
  const [render, setRender] = useState(false);
  const [transfer, setTransfer] = useState(false);

  useEffect(() => {
    if (page === "home") {
      setActionOptions(false);
    }
    if (page === "queue" || page === "library") {
      setTransfer(true);
    }
  }, []);

  return (
    <div key={row.title}>
      <div className="transition ease-in-out hover:scale-105 duration-300">
        <Link id="display-visited" to="/Books" state={row}>
          <img src={row.image} alt="" height={300} width={200}></img>
        </Link>
      </div>
      {actionOptions && (
        <>
          <div className="flex flex-col my-4">
            <div>{row.title}</div>
            <div> {row.author}</div>
          </div>
          <div className="flex flex-row space-x-4 mt-4 text-xl">
            <button id="reset" onClick={() => DeleteDB(page, row.title)}>
              <AiFillDelete className="transition ease-in-out hover:scale-110 duration-100" />
            </button>
            <button id="favorite" onClick={() => setRender(true)}>
              <AiOutlineHeart className="transition ease-in-out hover:scale-110 duration-100" />
            </button>
            {render ? <AddDB row={row} page="favorites" /> : null}
            {transfer && (
              <button id="switch" onClick={() => SwitchDB(page, row.title)}>
                <HiSwitchHorizontal className="transition ease-in-out hover:scale-110 duration-100" />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default BookRow;
