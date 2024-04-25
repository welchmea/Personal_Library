export const GoogleBookAPI = async ({ input, book, setBook }) => {
  // calls Google Books API with a query, that will set data in a variable and display
  const query = input;
  const response = await fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/?input=${query}`, {
    mode: "cors",
  })
  console.log(response)
  // setBook();
    // .then((response) => response.json())
    // .then((data) => {
    
    // });
  return book;
};
