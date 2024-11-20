import {createContext,useContext,useEffect,useReducer,useState} from "react";
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";
import axiosClient from "../axios-client";
import { Navigate } from "react-router-dom";
const cookies = new Cookies(null );

const StateContext = createContext({
  user: null,
  token: null,
  refresh:null,
  notification:null,
  setUser: () => {},
  setToken: () => {},
  setRefreshToken: () => {},
  setNotification:() => {}
})

export const ContextProvider =  ({children}) =>{
  const [user, setUser] =useState({});
  const [notification,_setNotification] = useState('');
  const [token, _setToken] = useState(cookies.get('accessToken'));
  const [refreshToken, _setRefreshToken] = useState(cookies.get('refreshToken'));
  const [closeSearch,setCloseSearch] = useState(false)
  const [isLoading,setIsLoading] = useState(false);
  const [isNotLoading,setNotLoading] = useState(false);

  const [reducerUpdateDetails, forceUpdateDetails] = useReducer(x => x + 1, 0);

  const decodedToken = token ? jwtDecode(token) : null;

  //console.log(decodedToken)
  const setNotification = (message) => {
    _setNotification(message);
    setTimeout(()=> {
      _setNotification('')
    },5000)
  }

  const setToken = (token) => {

    _setToken(token)

    if(token){
      cookies.set('accessToken', token);
      //setUser(decoded);

    }else{
      cookies.remove('accessToken');
      
    }

  }

  const setRefreshToken = (refreshToken) => {

    _setRefreshToken(refreshToken)

    if(refreshToken){
      cookies.set('refreshToken', refreshToken);
      //setUser(decoded);

    }else{
      cookies.remove('refreshToken');
    }

  }


  const userData = decodedToken;

  useEffect(()=>{

    setUser(decodedToken);

  },[]);

  //console.log(decodedToken)

  useEffect(()=>{

  
  },[])

     //update expire time on any user activity
  useEffect(()=>{

    
  },[]);

  //console.log(decodedToken)

  let contextData = {

    user:user,
    token:token,
    refreshToken:refreshToken,
    setUser:setUser,
    setToken:setToken,
    setRefreshToken:setRefreshToken,
    isLoading,
    forceUpdateDetails,
  }

  return(
    <StateContext.Provider value={contextData}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
