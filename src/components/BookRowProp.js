import React, {useEffect, useRef} from "react";

// switches a book from the queue to the library on the Queue page
export default function BookRowProp ({id, page}){

    useEffect(() => {
        function BookRowAction() {
        fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/${page}`, {
                mode: 'cors',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(id)
              }) 
              .then((response) => response.json())
              .then(() => {
              alert(window.location.reload(false))
              })
        };      
    switchDB();
    }, []);
    BookRowAction();
    }, [id]);
    
};