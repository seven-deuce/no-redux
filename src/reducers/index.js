import increment from "./increment";
import decrement from "./decrement";
import users from "./users";

export const initialState = {
  count: 0,
  users: []
};

function combineReducers(array) {
  return function(state, action) {
    for (let i = 0; i < array.length; ) {
      const result = array[i](state, action);
      if (Object.is(state, result)) {
        i++
        continue
      }
      else return result;
    }
    	return state
  };
}

export const reducer = combineReducers([increment, decrement, users]);

// export function reducer(state, action) {
//   console.log("reducer called");
//   switch (action.type) {
//     case "decrement":
//       return { ...state, ...action.payload };
//     case "reset":
//       return { ...state, ...initialState };
//     default:
//       return state;
//   }
// }
