import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import languageReducer from "./language";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    language: languageReducer,
  },
});
export default store;
