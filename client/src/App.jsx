import React from "react";
import {  Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import ShowPlaylist from "./pages/ShowPlaylist";
import CreatePlaylist from "./pages/CreatePlaylist";
import UpdatePlalist from "./pages/UpdatePlalist";
import DeletePlaylist from "./pages/DeletePlaylist";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playlist/create" element={<CreatePlaylist />} />
      <Route path="/playlist/:id" element={<ShowPlaylist />} />
      <Route path="/playlist/update/:id" element={<UpdatePlalist />} />
      <Route path="/playlist/delete/:id" element={<DeletePlaylist />} />
    </Routes>
  )
}

export default App