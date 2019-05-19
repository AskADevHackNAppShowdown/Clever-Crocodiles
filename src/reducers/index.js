import {combineReducers} from "redux";

function searchText(state = "", action){
  if(action.type === "SEARCH_USERS"){
    return action.value
  }
  return state;
}

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

let reducers = combineReducers({
  specialText, 
  searchText
})

export default reducers;