import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

function configStore() {
  const middlewares = applyMiddleware(thunk)
  const store = createStore(rootReducer, middlewares);
  return store;
}

export default configStore
