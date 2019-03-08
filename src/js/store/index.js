// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers/index";
// import { forbiddenWordsMiddleware } from "../middleware";
// const store = createStore(
//   rootReducer,
//   applyMiddleware(forbiddenWordsMiddleware)
// );
// export default store;

//or, if you are using Redux Dev Tools
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);
export default store;
