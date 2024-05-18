import React from "react";
import { Link } from "react-router-dom";

// represents a row in the recently visited table on the Home page
function HomePageRow({ row }) {
  
  return (
    <div key={row.title}>
      <div className="transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300">
        <Link
          id="display-visited"
          to="/ViewBook"
          state={row.title}
        >
          <img src={row.image} alt="" height={300} width={200}></img>
        </Link>
      </div>
    </div>
  );
}

export default HomePageRow;
