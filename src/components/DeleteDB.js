import React, {useEffect, useRef} from "react";

function DeleteDb ({id}){

    const alreadyFetched = useRef(false);
    
    //deletes a book from the queue or the library 
    useEffect(() => {
        function deleteDB() {
            fetch('https://git.heroku.com/be-bookshelf.git/delete_db', {
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
    console.log("useEffect ran...");
    }, []);
    return (
        <>
        </>
    )
};

export default DeleteDb;