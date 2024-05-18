import { useEffect } from "react";

function AddFavorite(props) {

    // adds data to MongoDB favorites collection
    useEffect(() => {
        function postData() {
            fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/add_fav', {
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
export default AddFavorite;