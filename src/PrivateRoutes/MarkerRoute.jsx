import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate, Outlet } from 'react-router-dom';

export default function MarkerRoute({children,rest}) {
    const {token,mRights} = useStateContext

    if(!token && !mRights){

        return <Navigate to="/login"/>
        
    }
    
    return <Outlet/>
    
    // return token && mRights ? <Outlet/> : <Navigate to="/login"/>;
}
