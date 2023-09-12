import React, { useEffect, useRef } from "react";

function AddFavorite(props) {
    const alreadyFetched = useRef(false);

    // adds data to MongoDB favorites collection
    useEffect(() => {
        function postData() {
            fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/add_fav', {
                mode: 'cors',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
              }) 
              .then((response) => response.json())
              .then((data) => {
              alert(data)
              })  
        }
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    postData();
    }, [props]);
    return (
        <>
        </>
)

};
export default AddFavorite;