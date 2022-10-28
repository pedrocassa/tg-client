import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducers";
import { enableMapSet } from "immer";

enableMapSet();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload"],
        // Ignore these paths in the state
        ignoredPaths: ["game.wordBank", "game.wordBankWithNoAccents"],
      },
    }),
});

export type Store = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
