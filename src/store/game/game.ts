import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { remove } from "remove-accents";

export interface GameState {
  board: string[][];
  currentAttempt: number;
  currentPosition: number;
  wordBank: Set<string>;
  wordBankWithNoAccents: Set<string>;
  wordBankInitialized: boolean;
  correctWord: string;
}

const initialState: GameState = {
  board: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
  currentAttempt: 0,
  currentPosition: 0,
  wordBank: new Set<string>(),
  wordBankWithNoAccents: new Set<string>(),
  wordBankInitialized: false,
  correctWord: "porta",
};

export const initializeWordBank = createAsyncThunk(
  "wordBank/initialize",
  async () => {
    let normalWords;
    let wordWithNoAccents;

    await fetch(require("../../shared/constants/term-word-bank.txt"))
      .then((response) => response.text())
      .then((result) => {
        const resultArr = result.split("\n");

        normalWords = new Set(resultArr);

        const resultArrWithNoAccents = resultArr.map((word) => remove(word));

        wordWithNoAccents = new Set(resultArrWithNoAccents);
      });

    return { normalWords, wordWithNoAccents };
  }
);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<string[][]>) => {
      state.board = action.payload;
    },
    setCurrentAttempt: (state, action: PayloadAction<number>) => {
      state.currentAttempt = action.payload;
    },
    setCurrentPosition: (state, action: PayloadAction<number>) => {
      state.currentPosition = action.payload;
    },
    setCorrectWord: (state, action: PayloadAction<string>) => {
      state.correctWord = action.payload;
    },
    setLetter: (state, action: PayloadAction<string>) => {
      if (state.currentPosition > 4) return;

      state.board[state.currentAttempt][state.currentPosition] = action.payload;
      state.currentPosition += 1;
    },
    onEnter: (state) => {
      if (state.currentPosition !== 5) return;

      const currentWord = state.board[state.currentAttempt].join("");

      if (state.wordBankWithNoAccents.has(currentWord)) {
        state.currentAttempt += 1;
        state.currentPosition = 0;
      } else alert("Palavra não encontrada");

      if (currentWord === state.correctWord) alert("Você ganhou!");
    },
    onDelete: (state) => {
      if (
        state.currentPosition === 0 &&
        state.board[state.currentAttempt][state.currentPosition] === ""
      )
        return;
      else if (state.currentPosition > 4) {
        state.board[state.currentAttempt][state.currentPosition - 1] = "";
        state.currentPosition -= 1;
      } else if (
        state.board[state.currentAttempt][state.currentPosition] !== ""
      )
        state.board[state.currentAttempt][state.currentPosition] = "";
      else if (
        state.board[state.currentAttempt][state.currentPosition] === "" &&
        state.board[state.currentAttempt][state.currentPosition - 1] !== ""
      ) {
        state.board[state.currentAttempt][state.currentPosition - 1] = "";
        state.currentPosition -= 1;
      } else state.currentPosition -= 1;
    },
    onLeftArrowClick: (state) => {
      if (state.currentPosition === 0) return;

      state.currentPosition -= 1;
    },
    onRightArrowClick: (state) => {
      if (state.currentPosition === 4) return;
      else state.currentPosition += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeWordBank.fulfilled, (state, action) => {
      if (action.payload) {
        state.wordBank = action.payload.normalWords!;
        state.wordBankWithNoAccents = action.payload.wordWithNoAccents!;
      }

      state.wordBankInitialized = true;
    });
  },
});

export const {
  setBoard,
  setCurrentPosition,
  setCurrentAttempt,
  setCorrectWord,
  setLetter,
  onEnter,
  onDelete,
  onLeftArrowClick,
  onRightArrowClick,
} = gameSlice.actions;

export const selectBoard = (state: RootState) => state.game.board;
export const selectCurrentAttempt = (state: RootState) =>
  state.game.currentAttempt;
export const selectCurrentPosition = (state: RootState) =>
  state.game.currentPosition;
export const selectCorrectWord = (state: RootState) => state.game.correctWord;
export const selectWordBank = (state: RootState) => state.game.wordBank;
export const selectWordBankInitialized = (state: RootState) =>
  state.game.wordBankInitialized;

export const gameReducer = gameSlice.reducer;
