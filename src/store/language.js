import { createAction, createReducer } from "@reduxjs/toolkit";
export const setNewLanguage = createAction("SET_LANGUAGE");

const INITIAL_STATE = {
    "language" : "es",
}

const languageReducer = createReducer(
 localStorage.getItem("language") || {},
  {
    [setNewLanguage]: (state = INITIAL_STATE, action) => {
      localStorage.setItem("language", action.payload);
      return action.payload;
    },
  }
);


export default languageReducer;