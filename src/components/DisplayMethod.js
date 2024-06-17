export default function displayData(
  collection,
  setLibrary,
  setState,
  setError
) {
  fetch(`https://be-bookshelf-eb8a2587c2db.herokuapp.com/display/${collection}`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      setLibrary(data);
      setState(true);
    })
    .catch(() => setError(true));
}
