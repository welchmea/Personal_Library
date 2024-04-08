function ResetDB ( {collection} ) {
    console.log(collection);
    // fetch('https://be-bookshelf-eb8a2587c2db.herokuapp.com/reset_db', {
    //     mode: 'cors',
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(collection)
    //   }) 
    //   .then((response) => response.json())
    //   .then((data) => {
    //   alert(data, window.location.reload(false))
    //   })  
}
export default ResetDB;