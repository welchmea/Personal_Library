import React, {useEffect, useRef} from "react";

// switches a book from the queue to the library on the Queue page
function SwitchDb ({id}){

    const alreadyFetched = useRef(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        function switchDB() {
        fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/switch_db', {signal}, {
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
    }, [id]);
    
    return (
        <>
        </>
    )
};

export default SwitchDb;