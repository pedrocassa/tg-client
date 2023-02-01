import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import _ from "lodash";
import { remove } from "remove-accents";
import { GameStatus } from "types";

export interface GameState {
  board: string[][];
  currentAttempt: number;
  currentPosition: number;
  wordBank: string[];
  wordBankInitialized: boolean;
  correctWord: string;
  usedWords: string[];
  gameStatus: GameStatus;
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
  wordBank: [],
  wordBankInitialized: false,
  correctWord: "",
  usedWords: [],
  gameStatus: GameStatus.ON_PROGRESS,
};

export const initializeWordBank = createAsyncThunk(
  "wordBank/initialize",
  async () => {
    let resultArr;

    await fetch(require("../../shared/constants/term-word-bank.txt"))
      .then((response) => response.text())
      .then((result) => {
        resultArr = result.split("\n");
      });

    return resultArr;
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

      const hasWordInTheBank = state.wordBank.find(
        (word: string) => remove(word) === currentWord
      );

      if (hasWordInTheBank) {
        if (!state.usedWords.includes(currentWord)) {
          state.currentAttempt += 1;
          state.currentPosition = 0;

          state.usedWords.push(hasWordInTheBank);
        }
      } else alert("Palavra não encontrada");

      if (currentWord === remove(state.correctWord)) {
        setBoard(
          state.board.splice(
            state.currentAttempt - 1,
            1,
            state.correctWord.split("")
          )
        );
        state.gameStatus = GameStatus.VICTORY;
      }
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
    refresh: (state) => {
      state.board = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ];
      state.wordBank = [];
      state.wordBankInitialized = false;
      state.correctWord = "";
      state.usedWords = [];
      state.currentAttempt = 0;
      state.currentPosition = 0;
      state.gameStatus = GameStatus.ON_PROGRESS;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeWordBank.fulfilled, (state, action) => {
      if (action.payload) {
        state.wordBank = action.payload!;
        state.correctWord = _.sample(action.payload!) ?? "";
        state.gameStatus = GameStatus.ON_PROGRESS;
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
  refresh,
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
