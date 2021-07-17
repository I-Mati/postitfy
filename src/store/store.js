import { createStore } from "redux";
import rootReducer from "./reducer";

let preloadedState;
const localData = localStorage.getItem("postitfy");

if (localData) {
  preloadedState = {
    notes: JSON.parse(localData),
  };
}

const store = createStore(rootReducer, preloadedState);

export default store;
