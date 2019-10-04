import { ADD_DATA } from "../Actions/type";

export default function(state = [], action) {
    console.log(action.data)
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action
      };
    default:
      return state;
  }
}
