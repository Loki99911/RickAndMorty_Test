import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./Characters/charactersReducer";

export const store = configureStore({
  reducer: {
    charactersInfo: characterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
