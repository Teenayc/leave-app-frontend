import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthMarkerRequired() {
    
const rightsData = localStorage.getItem('mRightsData');

    // if(rightsData === "3,4,5"){
    //     return <Navigate to="/v2/login"/>
    // }
    if(rightsData === "1"){
        return <Navigate to="/v2/login"/>
    }

    return <Outlet/>

}
