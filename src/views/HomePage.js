import React, { useState, useMemo } from "react";
import BookRow from "../components/BookRow";
import Banner from "../components/Banner";
import displayData from "../components/DisplayMethod";

function HomePage() {
  // variables for navigation and displaying browsed data from db
  const [library, setLibrary] = useState();
  const [state, setState] = useState(false);
  const [error, setError] = useState(false);

  // calls MongoDB to retrieve last 14 viewed books
  useMemo(() => {
    displayData("browse", setLibrary, setState, setError);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <Banner
          title={"Track the books that you have read."}
          subTitle={"Queue up your next read."}
          label={"Recently Visited"}
          collection={"browse"}
        />
        <div className="bg-gradient-to-b from-[#5A66F4] to-[#00000080] flex flex-wrap w-full p-8 gap-8">
          {state
            ? library.map((book, i) => (
                <BookRow row={book} page="home" key={i} />
              ))
            : null}

          {error ? <div className="text-white">Error: Server Disconnected - cannot display content</div>: null}
        </div>
      </div>
    </>
  );
}

export default HomePage;
