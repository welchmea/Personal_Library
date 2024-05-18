import { useEffect } from "react";

function AddQueue(props) {

    // adds data to MongoDB queue collection
    useEffect(() => {
        function postData() {
            fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/add_queue', {
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
    postData();
    }, []);
    
};
export default AddQueue;