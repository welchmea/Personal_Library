import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./screens/HomePage";
import Library from "./screens/Library.js";
import Queue from "./screens/Queue.js";
import Search from "./screens/Search.js";
import Books from "./screens/Books.js";
import Header from "./screens/Header";
import SearchBar from "./screens/SearchBar";
import ViewBook from "./screens/ViewBook";
import Favorites from "./screens/Favorites";

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
          <Route path="/Books/" element={<Books />} />
          <Route path="/SearchBar" element={<SearchBar />} />
          <Route path="/ViewBook" element={<ViewBook />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
