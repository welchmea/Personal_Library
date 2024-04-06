import React from "react";
import { Link } from "react-router-dom";

// represents a row in the recently visited table on the Home page
function HomePageRow({ row }) {
  
  return (
    <tr key={row.title}>
      <td>
        <Link
          to="/ViewBook"
          state={row}
        >
          <img src={row.image} alt="" height={300} width={200}></img>
        </Link>
      </td>
    </tr>
  );
}

export default HomePageRow;
