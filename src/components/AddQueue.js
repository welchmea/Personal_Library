import React, { useEffect, useRef } from "react";

function AddQueue(props) {

  const alreadyFetched = useRef(false);
    
    // adds data to MongoDB queue collection
    useEffect(() => {
        function postData() {
            fetch('https://git.heroku.com/be-bookshelf.git/add_queue', {
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