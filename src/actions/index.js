export function setSpecialText(txt){
  return {
    type:"SET_SPECIAL_TEXT",
    value:txt
  }
}

export function searchText(txt){
  return {
    type:"SEARCH_USERS",
    value: txt
  }
}
