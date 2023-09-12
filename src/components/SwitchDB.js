import React, {useEffect, useRef} from "react";

// switches a book from the queue to the library on the Queue page
function SwitchDb ({id}){

    const alreadyFetched = useRef(false);

    useEffect(() => {
        function switchDB() {
            fetch('https://git.heroku.com/be-bookshelf.git/switch_db', {
                mode: 'cors',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(id)
              }) 
              .then((response) => response.json())
              .then((data) => {
              alert(data, window.location.reload(false))
              })  
        };
    if (alreadyFetched.current) return;
    alreadyFetched.current = true;
    switchDB();
    console.log("useEffect ran...");
    }, [id]);
    return (
        <>
        </>
    )
};

export default SwitchDb;