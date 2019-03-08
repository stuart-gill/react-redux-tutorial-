import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";
const initialState = {
  articles: [],
  errors: ""
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      errors: action.payload
    });
  }
  return state;
}
export default rootReducer;

//Always remeber: the state in redux comes from reducers!
//The store is in charge of orchestrating all interactions in redux
//the reducer makes the state
//actions are plain JS objects with a type property and a payload
//action creators are a plain JS function in charge of returning Redux actions
//Middleware is a function that is able to intercept an action (and do something with it) before it reaches the reducer
//Middleware can hold the bulk of the appliation's logic
//While inside middleware you can access getState and dispatch
