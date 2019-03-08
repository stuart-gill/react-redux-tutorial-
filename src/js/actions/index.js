import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";
export function addArticle(payload) {
  console.log("addarticle" + payload);
  return { type: ADD_ARTICLE, payload };
}
export function foundBadWord(payload) {
  console.log("foundbadword" + payload);
  return { type: FOUND_BAD_WORD, payload };
}

//currently payload isn't being utilized in foundBadWord (I think)
