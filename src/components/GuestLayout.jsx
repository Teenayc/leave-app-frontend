 import React from 'react';
 import {Outlet} from "react-router-dom";
 import {useStateContext} from "../contexts/ContextProvider.jsx";
 import {Navigate} from "react-router-dom";

 export const GuestLayout=()=>{
    const {token,mRights,studyingRights} = useStateContext();

    // console.log("mRights: "+mRights)
    // console.log("studyingRights: "+studyingRights)

    if(token){
      return <Navigate to='/'/>
    }

    // if(token && mRights){
    //   return <Navigate to='/dashboard'/>
    // }

    return (

      <div>

        <Outlet/>

      </div>
      
    )
 };
