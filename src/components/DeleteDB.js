export const DeleteDB = async ( collection, title ) => {
    try {
      const response = await fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/delete_db/${collection}?title=${title}`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(collection)
      });
      if (!response.ok) {
        throw new Error(
          `Failed to Delete Collection. Status: ${response.status}`,
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Re-throw the error to propagate it to the caller
    }
   };