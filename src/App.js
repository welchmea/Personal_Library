import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./views/HomePage.js";
import Library from "./views/Library.js";
import Queue from "./views/Queue.js";
import Search from "./views/Search.js";
import Books from "./views/Books.js";
import Header from "./views/Header.js";
// import ViewBook from "./screens/ViewBook";
import Favorites from "./views/Favorites.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
         <Route path="/Library" element={<Library />} />
          <Route path="/Queue" element={<Queue />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Books" element={<Books />} />
          {/* <Route path="/ViewBook" element={<ViewBook />} /> */}
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;