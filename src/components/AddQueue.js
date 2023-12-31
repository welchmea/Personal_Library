import React, { useEffect, useRef } from "react";

function AddQueue(props) {

  const alreadyFetched = useRef(false);
    
    // adds data to MongoDB queue collection
    useEffect(() => {
        function postData() {
            fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/add_queue', {
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
export default AddQueue;