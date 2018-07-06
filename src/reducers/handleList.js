
function genList(length){
  let newList = [];
  newList = Array(length).fill().map(() => Math.round(Math.random() * 40));
  return newList;
}

const initialState = {
  numberslist: [0,1,2,3,4]
};

const handleList = (state = initialState, action) => {
  switch (action.type){
    case 'NEW_LIST':
       console.log("IN MY ACTION: ", state);
       return Object.assign({}, state, {numberslist:genList(state.numberslist.length)});
    default:
    console.log(state.numberslist);
    return state;
  }
};

export default (handleList);
