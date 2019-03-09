import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

export function addArticle(payload) {
  console.log("addarticle" + payload);
  return { type: ADD_ARTICLE, payload };
}

export function foundBadWord(payload) {
  console.log("foundbadword" + payload);
  return { type: FOUND_BAD_WORD, payload };
}

//this one uses thunk
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "DATA_LOADED", payload: json }); //have to explicitly call dispatch inside the async function to dispatch the action
      });
  };
}
//if you want to access the state inside the action creator you can add getState in the parameters list, alongside dispatch

//with redux-thunk you can return functions from action creators, not only objects. You can do asynchronous work inside your actions and dispatch other actions in response to AJAX calls
