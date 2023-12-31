import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./Characters/charactersReducer";
import paginationReducer from "./Pagination/paginationReducer";

export const store = configureStore({
  reducer: {
    charactersInfo: characterReducer,
    paginationInfo: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
