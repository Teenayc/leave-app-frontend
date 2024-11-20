import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate, Outlet } from 'react-router-dom';

export default function MembershipRoute({children,rest}) {
    const {token,studyingRights} = useStateContext

    if(!token && !studyingRights){

        return <Navigate to="/login"/>
        
    }
    
    return <Outlet/>
}
