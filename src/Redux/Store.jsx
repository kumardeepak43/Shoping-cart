import { createStore } from "redux";
import rootReducers from "../Reducer";

const store = createStore(rootReducers);

export default store;