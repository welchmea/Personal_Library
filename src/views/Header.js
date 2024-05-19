import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex flex-wrap justify-between mt-4 ml-2 mr-2">
        <div className="flex items-center mr-8 text-xl text-white ml-2">MY BOOKSHELF</div>
        <div className="flex flex-row flex-wrap ">
          <SearchBar />

          <Link id="nav-home" to="/">
            <button id="nav-button-home" className="border border-black text-black mr-1 mt-1 bg-stone-200 rounded-lg p-2 font-normal hover:bg-gray-300 hover:border hover:border-[#5A66F4] hover:transition-colors">
              Home
            </button>
          </Link>

          <Link  id="nav-bs" to="/Library">
            <button id="nav-button-bs" className="border border-black text-black mr-1 mt-1 bg-stone-200 rounded-lg p-2 font-normal hover:bg-gray-300 hover:border hover:border-[#5A66F4] hover:transition-colors">
              Bookshelf
            </button>
          </Link>

          <Link id="nav-queue"  to="/Queue">
            <button id="nav-button-queue" className="border border-black text-black mr-1 mt-1 bg-stone-200 rounded-lg p-2 font-normal hover:bg-gray-300 hover:border hover:border-[#5A66F4] hover:transition-colors">
              Queue
            </button>
          </Link>

          <Link  id="nav-fav" to="/Favorites">
            <button id="nav-button-fav" className="border border-black text-black mr-1 mt-1 bg-stone-200 rounded-lg p-2 font-normal hover:bg-gray-300 hover:border hover:border-[#5A66F4] hover:transition-colors">
              Favorites
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;