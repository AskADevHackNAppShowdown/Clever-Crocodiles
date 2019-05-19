// export function setSpecialText(txt){
//   return {
//     type:"SET_SPECIAL_TEXT",
//     value:txt
//   }
// }

const txt = {

  arr:[]
}

export function setSpecialText(state = txt, action){
  switch (action.type){
     case 'SET_SPECIAL_TEXT' :
       return { 
          ...state,
          arr:[...state.arr, action.newItem]
     }

     default:return state
  }
}


export function searchText(txt){
  return {
    type:"SEARCH_USERS",
    value: txt
  }
}
