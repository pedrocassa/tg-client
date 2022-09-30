import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from 'pages'
import { SingleWord } from '../pages/singleWord'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/single-word" element={<SingleWord />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
