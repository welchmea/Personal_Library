import React, {useEffect, useRef} from "react";

function DeleteDb ({id}){

    const alreadyFetched = useRef(false);
    
    //deletes a book from the queue or the library 
    useEffect(() => {
        function deleteDB() {
            fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/delete_db', {
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
    deleteDB();
    }, [id]);
    return (
        <>
        </>
    )
};

export default DeleteDb;