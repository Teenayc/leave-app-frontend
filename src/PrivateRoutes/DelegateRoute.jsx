import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate } from 'react-router-dom';

export default function MarkerRoute({children,rest}) {
    const {token,mRights} = useStateContext
    
    return token && mRights ? <Outlet/> : <Navigate to="/login"/>;
}
