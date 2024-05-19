import {useEffect } from "react";

function AddDB(props) {
    let page = props.page
    // adds data to MongoDb browse collection
    useEffect(() => {
        function postData() {
            fetch(`http://127.0.0.1:5000/${page}`, {
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