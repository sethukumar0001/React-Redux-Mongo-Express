import axios from 'axios';
// import {REGISTER} from './type';


// export const registerUser =(user)=>{
//     console.log(user)
// return{
//     type:REGISTER,
//     payload:user
// }
// }

export const registerUser = (user,history)=>{
    console.log(user)
    axios.post('/auth/register',user)
    .then(res=>history.push('/login'))
    .catch(err=>{
        console.log(err)
    })
}