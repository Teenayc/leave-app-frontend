import React, {Fragment, useState,useEffect} from 'react';
import {Link, Navigate, NavLink, Outlet} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import impzLogo from '../assets/ipmzLogo.png'
import intellectusLogo from '../assets/intellectusLogo.png'
import {useStateContext} from "../contexts/ContextProvider.jsx";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChecklistIcon from '@mui/icons-material/Checklist';
import axiosClient from "../axios-client.js";
import DevicesIcon from '@mui/icons-material/Devices';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";
import LogoutModal from '../views/Authentication/LogoutModal.jsx';

 export const MarkerLayout=()=>{
  const {decodedToken,user,token,setUser,studyingRights,onLogout} = useStateContext();
  const cookies = new Cookies(null );
  const [showLogoutModal,setShowLogoutModal] = useState(false)

  //console.log(decodedToken)
  // const str = `${user.userRights === null?'':user.userRights}`;
  // const markersRights = ["3", "4", "5"];
  // const markersRightsAvailable = markersRights.every(number => str.includes(number));

//console.log("markers layout: "+mRights)

  if (!token) {
     
    return <Navigate to="/login" />;

  }

  const handleOnClose = () => {
   //window.location.reload();
   setShowLogoutModal(false)
 }

  useEffect(() => {

   //setToken()
   setUser(decodedToken);
   //console.log(decodedToken)

  }, [])


  useEffect(()=>{

  },[]);

     return (
      <Fragment>
       <div id="defaultLayout">

         <aside>

           <div className="aside-logo-div">
            <img src={intellectusLogo}/>
           </div>
          
           <NavLink to="/dashboard"><DashboardIcon style={{marginRight:"5px"}}/>Dashboard</NavLink>
           {/* <NavLink to="/markers-list"><AccountBalanceWalletIcon style={{marginRight:"5px"}}/>Markers List</NavLink> */}

         </aside>

         <div className='content'>
           <header>
             <div className="title-div">
               <div className="ipmz-logo-div">
                 <img src={impzLogo}/>
               </div>
               <div className="title-name">Facilitator Portal</div>
             </div>
             <div>

              <NavLink to='/s-profile' className='btun-username'>{token?'User '+user.memberNumber:""}</NavLink>
              <NavLink to='/settings' className='btun-settings'>Settings</NavLink>
              <button className='btun-logout' onClick={()=>setShowLogoutModal(true)}>Logout</button>
   
             </div>
           </header>

           <main className='mb-5'>

             <Outlet context={user}/>
             
           </main>

         </div>

       </div>
        {/*<LogoutModal isVisible={showModal} onClose={()=>setShowModal(false)}/>*/}
        {/*<LogoutModal isVisible={showModal} onClose={()=>setShowModal(false)} onLogout={onLogout}/>*/}
        <LogoutModal onClose={handleOnClose} onLogout={onLogout} visible={showLogoutModal}/>
      </Fragment>

     )
 };
