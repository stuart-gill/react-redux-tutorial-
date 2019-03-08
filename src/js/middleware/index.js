//Middleware is a function that is able to intercept an action (and do something with it) before it reaches the reducer
//Middleware can hold the bulk of the appliation's logic
//While inside middleware you can access getState and dispatch

import { ADD_ARTICLE } from "../constants/action-types";
//import { FOUND_BAD_WORD } from "../constants/action-types";
//I replaced FOUNDBADWORD action type with the foundBadWord action creator
import { foundBadWord } from "../actions/index";

const forbiddenWords = ["spam", "money"];
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch(foundBadWord(foundWord));
        }
      }
      return next(action);
    };
  };
}
