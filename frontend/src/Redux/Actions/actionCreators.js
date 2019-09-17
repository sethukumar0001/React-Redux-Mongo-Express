import axios  from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from "./type";

export const registerUser =(userData,history)=>{
    axios.post('http://localhost:4000/auth/register',userData)
    .then(res=>history.push("/login"))
    .catch(err=>{
        console.log("register error...")
    })
}

export const loginUser = userData =>dispatch =>{
    axios.post('http://locahost:4000/auth/login',userData)
    .then(res=>{
        //localstorage..
        const {token}= res.data;
        localStorage.setItem("jwttoken",token)
        setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>{
        console.log("error in login")
        
    })
    }
    //setLogged in user

    export const setCurrentUser = decoded=>{
        return{
            type:SET_CURRENT_USER,
            payload:decoded
        }
    }
//logout

export const logoutUser = ()=>dispatch=>{

    localStorage.removeItem("jwtToken");
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    // this.props.history.push('/login')
}