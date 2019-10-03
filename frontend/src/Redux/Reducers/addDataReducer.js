import { ADD_DATA } from "../Actions/type";

export default function(state = [], action) {
    console.log(action)
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
