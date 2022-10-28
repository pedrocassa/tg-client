import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game, Home } from "pages";
import { useDispatch } from "react-redux";
import { initializeWordBank } from "../store";

export function AppRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(initializeWordBank());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/play-game" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
