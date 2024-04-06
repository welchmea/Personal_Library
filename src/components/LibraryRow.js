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
    <tr key={row.title}>
      <td className="border-2 border-gray-500 p-6 bg-gray-300 hover:bg-gray-100">
        <Link to="/ViewBook" state={row}>
          <img src={row.image} alt="" height={40} width={30}></img>
        </Link>
      </td>
      <td className="border-2 border-gray-500 p-6 bg-gray-300 hover:bg-gray-100">
        {row.title}
      </td>
      <td className="border-2 border-gray-500 p-6 bg-gray-300 hover:bg-gray-100">
        {row.author[0]}
      </td>
      <td className="border-2 border-gray-500 p-6 bg-gray-300 hover:bg-gray-100">
        <button className="bg-gray-300 hover:bg-gray-100" onClick={() => setaddFavorite(true)}>
          <i>
            <AiOutlineHeart className="bg-gray-300 hover:bg-gray-100"/>
          </i>
        </button>
        {addFavorite ? <AddFavorite result={row} /> : null}
      </td>

      <td className="border-2 border-gray-500 p-6 bg-gray-300 hover:bg-gray-100">
        <button onClick={verifyDelete}>
          <i>
            <AiFillDelete />
          </i>
        </button>
        {render ? <DeleteDb id={row} /> : null}
      </td>
    </tr>
  );
}

export default LibraryRow;
