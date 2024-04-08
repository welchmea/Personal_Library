export const findBooks = async (query, book, setBook) => {
  console.log(query);
  try {
    const response = fetch(
      `https://be-bookshelf-eb8a2587c2db.herokuapp.com/?input=${query}`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setBook(data.items);
      });
    if (!response.ok) {
      throw new Error(`Failed to call API. Status: ${response.status}`);
    }
    return book;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};
