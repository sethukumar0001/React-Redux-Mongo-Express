import {REGISTER} from '../Actions/type';

const initialState ={
user :{}
}
console.log(initialState);
export default function(state={initialState},action){
    console.log(action)

    switch(action.type){
        case REGISTER:
                return {
                    ...state,                 
                    user : action.payload,                  
                }
                default:
                    return state;
                    
    }
}