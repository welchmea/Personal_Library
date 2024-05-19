import React, { useEffect, useState } from "react";
import BookRow from "./BookRow";
import BackButton from "./BackButton";
import Banner from "./Banner";
import displayData from "./DisplayMethod";

function ViewCard( {collection, title, label} ) {
  // variables to display data in library and to render additional components
  const [library, setLibrary] = useState();
  const [state, setState] = useState(false);
  const [error, setError] = useState(false);

  // calls MongoDB library collection to display all data
  useEffect(() => {
    displayData(collection, setLibrary, setState, setError);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-2 overflow-auto">
        <Banner
          title={title}
          subTitle={<BackButton />}
          label={label}
          collection={collection}
        />
      </div>

      <div className="flex flex-col bg-gradient-to-b from-[#5A66F4] to-[#00000080] text-white">
        <div className="flex flex-wrap gap-8 p-8 w-full">
          {state
            ? library.map((book, i) => (
                <BookRow row={book} page={collection} key={i} />
              ))
            : null}
          {error ? (
            <div className="text-white">
              Error: Server Disconnected - cannot display content
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ViewCard;
