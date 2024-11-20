 import React, {Fragment, useState,useEffect, useRef} from 'react';
 import {Link, Navigate, NavLink, Outlet} from "react-router-dom";
 import DashboardIcon from '@mui/icons-material/Dashboard';

 import {useStateContext} from "../contexts/ContextProvider.jsx";
 import axiosClient from "../axios-client.js";
 import DevicesIcon from '@mui/icons-material/Devices';
 import AutoStoriesIcon from '@mui/icons-material/AutoStories';
 import Cookies from 'universal-cookie';

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { RiLogoutCircleRFill } from "react-icons/ri";

 export const Layout=()=>{
   const {decodedToken,user,token,setToken,refreshToken,
    setUser} = useStateContext();
   const cookies = new Cookies(null );
   const [showLogoutModal,setShowLogoutModal] = useState(false)
   const [navbarOpen, setNavbarOpen] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   const [sidebar,setSidebar] = useState(false);

   const [hideSettings, setHideSettings] = useState(false)
   const [hideUsername, setHideUsername] = useState(false)

   const sidebarRef = useRef();
   const [isSidebarOpen, setSidebarOpen] = useState(true);

   const showSidebar = () => setSidebarOpen(!isSidebarOpen);
   
    if(!token){
      
      return <Navigate to="/v1/login" />;

    }

    const onLogout = () =>{
      
       
      //clear cookies
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('cokExpireTime');

      window.location.reload();
    }

    if(token){

      if(decodedToken.exp * 1000 < Date.now()){
        onLogout();
      }

      axiosClient.post(`/auth-refresh/${refreshToken}`,{
        withCredentials: true // Include cookies in the request
      })
      .then(({ data }) => {
          setToken(data.accessToken)
      });
    }
    
    const checkForInactivity = () =>{
        // Get expire time from local storage
    
        //const expireTime = decodedToken.exp * 1000;
        const expireTime = localStorage.getItem("lastAction");
        const currentTime = localStorage.getItem("currentTime");
        const cokExpireTime = cookies.get('cokExpireTime');

        if(currentTime - expireTime >= 900000){
          onLogout();
        }

        if(cokExpireTime < Date.now()){
          onLogout();
        }

    }

    const checkActiveTime = () =>{
      const currentTime= Date.now();

      localStorage.setItem('currentTime', currentTime)

    }

    const refreshExhToken = () =>{
      const expireTime = localStorage.getItem("lastAction");
      const currentTime = localStorage.getItem("currentTime");

      if(currentTime - expireTime <= 900000){

        axiosClient.post(`/auth-refresh/${refreshToken}`,{
          withCredentials: true // Include cookies in the request
        })
        .then(({ data }) => {
          setToken(data.accessToken)
        });

      }
    }

    const updateExpireTime = () => {

      const expireTime = Date.now() + 5000;
      const cokExpireTime = (decodedToken.exp * 1000);


      localStorage.setItem('lastAction', expireTime)
      cookies.set('cokExpireTime', cokExpireTime);

    }

    const handleOnClose = () => {
      //window.location.reload();
      setShowLogoutModal(false)
    }

    const handleClickOutside = (event) => {
      
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {

        setSidebarOpen(false)
      }
    };

    useEffect(() => {

      //setToken()
      setUser(decodedToken);

      getExamCenters();

      getMemberDetails();

    }, [])

    useEffect(() => {


    },[])


    useEffect(()=>{


      const interval = setInterval(()=>{
        checkForInactivity();
      },1000); //every second

      //clear interval on unmount
      return () => clearInterval(interval);

    },[]);

    useEffect(()=>{

      //check inactivity every 5minutes
      const myInterval = setInterval(()=>{
        checkActiveTime();
      },1000); //every second

      //clear interval on unmount
      return () => clearInterval(myInterval);

    },[]);

   useEffect(()=>{

    //check inactivity every 5minutes
    const exhTokenInterval = setInterval(()=>{
      refreshExhToken();
    },900000); //after every 15minutes we update the accessToken

    //clear interval on unmount
    return () => clearInterval(exhTokenInterval);

   },[]);

   //update expire time on any user activity
   useEffect(()=>{

    updateExpireTime();
    //set event listeners
    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);

    //clean up
    return () => {
      window.addEventListener("click", updateExpireTime);
      window.addEventListener("keypress", updateExpireTime);
      window.addEventListener("scroll", updateExpireTime);
      window.addEventListener("mousemove", updateExpireTime);
    }

   })


  useEffect(() => {
    const checkMediaQuery = () => {
        if (window.matchMedia("(max-width: 750px)").matches) {
            setHideSettings(true);
        } else {
            setHideSettings(false);
        }
    };

    // Check on initial render
    checkMediaQuery();

    // Add event listener for window resize
    window.addEventListener('resize', checkMediaQuery);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('resize', checkMediaQuery);
    };
}, []);

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

useEffect(() => {
  const checkMediaQuery = () => {
      if (window.matchMedia("(max-width: 574px)").matches) {
          setHideUsername(true);
      } else {
          setHideUsername(false);
      }
  };

  // Check on initial render
  checkMediaQuery();

  // Add event listener for window resize
  window.addEventListener('resize', checkMediaQuery);

  // Clean up the event listener on component unmount
  return () => {
      window.removeEventListener('resize', checkMediaQuery);
  };
}, []);



   return (
      <Fragment>
       <div id="defaultLayout">

         <aside ref={sidebarRef} className={isSidebarOpen ? "" : "hidden"}>


              <NavLink to="/"><DashboardIcon style={{marginRight:"5px"}}/>Applications</NavLink>
              <NavLink to="/diploma-progress" ><DashboardIcon style={{marginRight:"5px"}}/>Admin</NavLink>

              {hideSettings?
              <>
              <NavLink to="/" style={{ display: 'flex',alignItems: 'center',color:'#ff0000'}} onClick={()=>setShowLogoutModal(true)}><RiLogoutCircleRFill size={23} style={{marginRight:"5px",color:'#ff0000'}}/>Logout</NavLink></>:''}
           
         </aside>

         <div className={`content ${isSidebarOpen ? "" : "collapsed"}`}>
           <header>
            
             <div className="title-div">
                  
               <div className='mr-3 toggle'>
                {isSidebarOpen?<IoMdClose  onClick={showSidebar} size="35" style={{color:"#FF0000",zIndex:'5'}}/>:<IoMdMenu onClick={showSidebar} size="35" style={{color:"#00913F",zIndex:'5'}} className='cursor-pointer'/>}

               </div>

               <div className="title-name">PSC LEAVE APPLICATION</div>
             </div>

             <div className='flex justify-center items-center'>

              <NavLink to='/s-profile' className={hideUsername?'hidUsername':'btun-user mr-1'}>
                <div className='flex justify-center items-center'>
                  {token?user.username:""} 
                </div>
              </NavLink>  

              <button className={hideSettings?'hidSettings btun-logout':'btun-logout'} onClick={()=>setShowLogoutModal(true)}>Logout</button>
           
             </div>

           </header>
           
           <main className='mb-5'  >

             <Outlet/>
             
           </main>
         </div>


       </div>

      </Fragment>
     )
 };
