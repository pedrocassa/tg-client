import { combineReducers } from '@reduxjs/toolkit'
import { gameReducer } from './game'

export const rootReducer = combineReducers({
  game: gameReducer
})
