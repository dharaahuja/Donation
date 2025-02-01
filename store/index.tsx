import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./itemsSlice";

const redux = require('redux')
const createStore = redux.createStore

export const store = createStore(reducer);