import { createAction, createReducer } from "@reduxjs/toolkit";
export const setNewLanguage = createAction("SET_LANGUAGE");

const INITIAL_STATE = localStorage.getItem("language") || "es";

const languageReducer = createReducer(localStorage.getItem("language") || {}, {
  [setNewLanguage]: (state = INITIAL_STATE, action) => {
    localStorage.setItem("language", action.payload);
    return action.payload;
  },
});

// createReducer(INITIAL_STATE, (builder) => {
//   builder.addCase(setNewLanguage, (state, action) => {
//     localStorage.setItem("language", action.payload);
//     return action.payload;
//   });
// });

// createSlice({
//   setNewLanguage,
//   INITIAL_STATE,
//   reducers: {

//   },
//   extraReducers: builder => {
//     builder.addCase(setNewLanguage, (state, action)=> {})
//   }
// })

export default languageReducer;

// const todoAdded = createAction('todos/todoAdded');

// createReducer(initialState, {
//   [todoAdded]: (state, action) => {}
// })

// createSlice({
//   name,
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [todoAdded]: (state, action) => {}
//   }
// })
// should be migrated to:

// createReducer(initialState, builder => {
//   builder.addCase(todoAdded, (state, action) => {})
// })

// createSlice({
//   name,
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(todoAdded, (state, action) => {})
//   }
// })