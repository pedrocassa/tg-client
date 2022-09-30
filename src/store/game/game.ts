import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface GameState {
  board: string[][]
  currentAttempt: number
  currentPosition: number
  correctWord: string
}

const initialState: GameState = {
  board: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ],
  currentAttempt: 0,
  currentPosition: 0,
  correctWord: 'porta'
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<string[][]>) => {
      state.board = action.payload
    },
    setCurrentAttempt: (state, action: PayloadAction<number>) => {
      state.currentAttempt = action.payload
    },
    setCurrentPosition: (state, action: PayloadAction<number>) => {
      state.currentPosition = action.payload
    },
    setCorrectWord: (state, action: PayloadAction<string>) => {
      state.correctWord = action.payload
    },
    setLetter: (state, action: PayloadAction<string>) => {
      if (state.currentPosition > 4) return

      state.board[state.currentAttempt][state.currentPosition] = action.payload
      state.currentPosition += 1
    },
    onEnter: (state) => {
      if (state.currentPosition !== 5) return

      state.currentAttempt += 1
      state.currentPosition = 0
    },
    onDelete: (state) => {
      if (
        state.currentPosition === 0 &&
        state.board[state.currentAttempt][state.currentPosition] === ''
      )
        return
      else if (state.currentPosition > 4) {
        state.board[state.currentAttempt][state.currentPosition - 1] = ''
        state.currentPosition -= 1
      } else if (
        state.board[state.currentAttempt][state.currentPosition] !== ''
      )
        state.board[state.currentAttempt][state.currentPosition] = ''
      else if (
        state.board[state.currentAttempt][state.currentPosition] === '' &&
        state.board[state.currentAttempt][state.currentPosition - 1] !== ''
      ) {
        state.board[state.currentAttempt][state.currentPosition - 1] = ''
        state.currentPosition -= 1
      } else state.currentPosition -= 1
    },
    onLeftArrowClick: (state) => {
      if (state.currentPosition === 0) return

      state.currentPosition -= 1
    },
    onRightArrowClick: (state) => {
      if (state.currentPosition === 4) return
      else state.currentPosition += 1
    }
  }
})

export const {
  setBoard,
  setCurrentPosition,
  setCurrentAttempt,
  setCorrectWord,
  setLetter,
  onEnter,
  onDelete,
  onLeftArrowClick,
  onRightArrowClick
} = gameSlice.actions

export const selectBoard = (state: RootState) => state.game.board
export const selectCurrentAttempt = (state: RootState) =>
  state.game.currentAttempt
export const selectCurrentPosition = (state: RootState) =>
  state.game.currentPosition
export const selectCorrectWord = (state: RootState) => state.game.correctWord

export const gameReducer = gameSlice.reducer
