import {useEffect } from "react";

function AddBrowse(props) {
    
    // adds data to MongoDb browse collection
    useEffect(() => {
        function postBrowse() {
            fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/add_browse', {
                mode: 'cors',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
              })
              .then((response) => response.json())
        }
    postBrowse();
    }, []);
};

export default AddBrowse;