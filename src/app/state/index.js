import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const logger = ({ getState, dispatch }) => next => action => {
  //funkcija kuri grazina funkcija kuri graxina funkscija
  console.log(action.type);
  next(action);
};

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
