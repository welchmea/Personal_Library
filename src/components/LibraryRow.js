import React, { useState } from "react";
import DeleteDb from "./DeleteDB";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddFavorite from "./AddFavorite";

// represents a row in the library on the Library page
function LibraryRow({ row }) {
  const [render, setRender] = useState(false);
  const [addFavorite, setaddFavorite] = useState(false);

  // asks user if they want to delete before it is deleted.
  function verifyDelete() {
    if (window.confirm("Do you want to delete? This cannot be undone...")) {
      setRender(true);
    }
  }

  return (
    <div className="flex text-white">
    <tr key={row.title}>
      <td className="flex flex-col items-center mb-4">
        <Link to="/ViewBook" state={row}>
          <img src={row.image} alt="" height={300} width={200}></img>
        </Link>
      </td>
      <td className="flex flex-col items-center mb-2">
        {row.title}
      </td>
      <td className="flex flex-col items-center mb-2">
        {row.author[0]}
      </td>
      <div className="flex flex-row justify-center">
      <td className="flex flex-col text-xl">
        <button className="" onClick={() => setaddFavorite(true)}>
          <i>
            <AiOutlineHeart className="mr-4"/>
          </i>
        </button>
        {addFavorite ? <AddFavorite result={row} /> : null}
      </td>

      <td className="flex text-xl">
        <button onClick={verifyDelete}>
          <i>
            <AiFillDelete />
          </i>
        </button>
        {render ? <DeleteDb id={row} /> : null}
      </td>
      </div>

    </tr>
    </div>

  );
}

export default LibraryRow;
