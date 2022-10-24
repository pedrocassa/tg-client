import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game, Home } from "pages";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/play-game" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
