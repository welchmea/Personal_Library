import {useEffect } from "react";

function AddDB(props) {
    let page = props.page
    // adds data to MongoDb browse collection
    useEffect(() => {
        function postData() {
            fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/${page}`, {
                mode: 'cors',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(props.row)
              })
              .then((response) => response.json())
        }
    postData();
    }, []);
 };

export default AddDB;