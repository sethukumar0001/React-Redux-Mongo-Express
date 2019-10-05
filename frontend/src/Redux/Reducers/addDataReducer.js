import { ADD_DATA } from "../Actions/type";

const addDataReducer = (state = [], action) => {
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
export default addDataReducer; 

