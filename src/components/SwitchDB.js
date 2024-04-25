import React, {useEffect, useRef} from "react";

// switches a book from the queue to the library on the Queue page
export default function SwitchDb ({id}){

    useEffect(() => {
        function switchDB() {
        fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/switch_db', {
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
    switchDB();
    }, []);
    
//     return (
//         <>
//         </>
//     )
};