export default function displayData(collection, setLibrary, setState, setError) {
  fetch(`http://127.0.0.1:5000/display/${collection}`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      setLibrary(data);
      setState(true);
    })
    .catch(() => setError(true))
  return;
}
