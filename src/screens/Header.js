import SearchBar from "./SearchBar.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between mt-4 ml-2 mr-2">
        <div className="flex items-end text-xl text-white ml-2">MY BOOKSHELF</div>
        <div className="flex flex-row">
          <SearchBar />

          <Link to="/">
            <button className="text-black mr-1 bg-stone-200 rounded-lg p-2 font-normal hover:bg-gray-500 hover:text-white">
              Home
            </button>
          </Link>

          <Link to="/Library">
            <button className="text-black mr-1 bg-stone-200 rounded-lg p-2 font-normal hover:bg-gray-500 hover:text-white">
              Bookshelf
            </button>
          </Link>

          <Link to="/Queue">
            <button className="text-black mr-1 bg-stone-200 rounded-lg p-2 font-normal hover:bg-gray-500 hover:text-white">
              Queue
            </button>
          </Link>

          <Link to="/Favorites">
            <button className="text-black mr-1 bg-stone-200 rounded-lg p-2 font-normal hover:bg-gray-500 hover:text-white">
              Favorites
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
