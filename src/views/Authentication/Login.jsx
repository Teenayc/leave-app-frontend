 import React, {useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
 import axiosClient from '../../axios-client.js';
 import { useStateContext } from '../../contexts/ContextProvider.jsx';
 import { EyeOutlined,EyeInvisibleOutlined,InfoCircleOutlined} from '@ant-design/icons';
 import { Oval } from  'react-loader-spinner'

 const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

 export const Login=()=>{
   const {setUser,setToken,setRefreshToken} = useStateContext();

   //const emailRef = useRef();
   //your username is your membership number to students
   const usernameRef = useRef();
   const passwordRef = useRef();
   const [errors, setErrors] = useState(null);
   const navigate = useNavigate();

   const [loading,setLoading] = useState(false);
   const [showPass,setShowPass] = useState(true);
   const [anchorEl, setAnchorEl] = useState(null);

   const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


   const onSubmit = (ev) => {
     ev.preventDefault()
     setLoading(true);
     setTimeout(() => {
      setLoading(false)
    }, 5000)
     const payload = {
       username: usernameRef.current.value,
       password: passwordRef.current.value
     }
     //console.log(payload)

     setErrors(null)
     
     axiosClient.post('/user-login', payload)
       .then(res => {
        //console.log(res)
         setUser(res.data.user)
         setToken(res.data.accessToken)
         setRefreshToken(res.data.refreshToken)

       })
       .catch(err => {
        setLoading(false);
         const response = err.response;
         //console.log(response.data.message)
         setErrors(response.data.message)

       })
   }



     return (
       <div className='login-cover'>
          <div className='login-signin-form animated fadeInDown'>
            <div className='login-form form'>

              <form onSubmit={onSubmit}>


                <h1 className='title'>
                  PSC Leave App User Login
                </h1>

                {errors &&
                  <div className='error-alert'>
                    <p>{errors}</p>
                  </div>
                }

                <div className="div-membership-input">
                  <input ref={usernameRef} type='text' placeholder='Username' autoComplete="username"/>
                </div>


                <div className="div-password-input">
                  <input ref={passwordRef} type={showPass? 'password':'text'} placeholder='Password' autoComplete="password"/>
                  <div className="password-visible-icon" onClick={()=>setShowPass(!showPass)}>
                    {showPass ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                  </div>
                </div>

                <button className='btun btun-block' disabled={loading}>{loading &&
                  <Oval
                  height={25}
                  width={25}
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2} />}
                  Login
                </button>

              </form>

            </div>
          </div>
       </div>
     )
 };

