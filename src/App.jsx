import React, {useState, useEffect,useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Dashboard } from './views/MarkerModerator/Dashboard'
import { StudentsAnnouncements } from './views/Students/StudentsAnnouncements'
import { MembershipLayout } from './components/MembershipLayout'
import { MarkerLayout } from './components/MarkerLayout'
import { Login } from './views/Authentication/Login'
import { RegisterAccount } from './views/Authentication/RegisterAccount'
import { ForgotPassword } from './views/Authentication/ForgotPassword'
import { ResetPassword } from './views/Authentication/ResetPassword'
import { ResendEmailVerifyLink } from './views/Authentication/ResendEmailVerifyLink'
import { EmailVerification } from './views/Authentication/EmailVerification'
import { useStateContext } from './contexts/ContextProvider'
import { NotFoundPage } from './views/NotFoundPage'

function App() {
  const {mRights,studyingRights} = useStateContext();

  //console.log(mRights)

  // if(mRights === undefined){
  //   return <Navigate to="/login"/>
  // }

  
  return (
    // <div className="App">
    //   App
    // </div>

    <>
      <Routes>
        
                  <Route path="/login" element={<Login/>}/>
                
                  <Route path="/create-account" element={<RegisterAccount/>}/>
                  {/* <Route path="/create-account" element={<RegisterAccount/>}/> */}

                  <Route path="/forgot-password" element={<ForgotPassword/>}/>

                  <Route path="/reset-password/:email/:token" element={<ResetPassword/>}/>

                  <Route path="/resend-email-verification" element={<ResendEmailVerifyLink/>}/>

                  <Route path="/email-verification/:id/:token" element={<EmailVerification/>}/>

                  <Route path='/' element={
                      <MembershipLayout>

                        <Route path="/" element={<StudentsAnnouncements/>}/>

                      </MembershipLayout>
                    }
                  />

                  <Route path='/' element={
                      <MarkerLayout>

                        <Route path="/dashboard" element={<Dashboard/>}/>
                        
                      </MarkerLayout>
                    }
                  />
                  

                  

                  {/* Membership layout */}
                  {/* <MembershipRoute path="/">

                    <Route index element={<StudentsAnnouncements/>} />

                  </MembershipRoute>

                  <MarkerRoute path="/dashboard" element={<Dashboard/>}/> */}

                  
                  {/* <Route path="/s-profile" element={<StudentProfile/>}/>

                  <Route path="/results" element={<Results/>}/>

                  <Route path="/assignment" element={<Assignments/>}/>

                  <Route path="/member-payments" element={<MemberPayments/>}/>

                  <Route path="/discussions-hub" element={<DiscussionsHub/>}/>

                  <Route path="/member-wallet" element={<MemberWallet/>}/>

                  <Route path="/diploma-progress" element={<DiplomaProgress/>}/>

                  <Route path="/cpd-progress" element={<CPDProgress/>}/>

                  <Route path="/settings" element={<Settings/>}/>

                  <Route path="/learn-cpds" element={<OnlineLearning/>}/>

                  <Route path="/elibrary" element={<Ebrary/>}/>

                  <Route path="/defer-and-exemption" element={<DeferNExemption/>}/>

                  <Route path="/settings" element={<Settings/>}/> */}


                  {/* Markers/Moderators/Examiners */}
                  {/* <Route path="/m-profile" element={mRights?<MarkerProfile/>:<Navigate to="/"/>}/>

                  <Route path="/learn-cpds" element={<OnlineLearning/>}/>
                
                  <Route path="/dashboard" element={mRights?<Dashboard/>:<Navigate to="/"/>}/>

                  <Route path="/markers-list" element={mRights?<MarkersList/>:<Navigate to="/"/>}/> */}

                  <Route path='*' element={<NotFoundPage/>}/>

          {/* <Route path="/dashboard"
            element={(
              <MarkerLayout>

                <Route path="/settings" element={<Settings/>}/>
    
                <Route path="/s-profile" element={<MarkerProfile/>}/>

                <Route path="/learn-cpds" element={<OnlineLearning/>}/>
              
                <Route path="/dashboard" element={<Dashboard/>}/>

                <Route path="/markers-list" element={<MarkersList/>}/>

              </MarkerLayout>
            )}
          />

          <Route path="/"
            element={(
                  <MembershipLayout>

                      <Route path="/" element={<StudentsAnnouncements/>}/>
                  
                      <Route path="/s-profile" element={<StudentProfile/>}/>

                      <Route path="/results" element={<Results/>}/>

                      <Route path="/assignment" element={<Assignments/>}/>

                      <Route path="/member-payments" element={<MemberPayments/>}/>

                      <Route path="/discussions-hub" element={<DiscussionsHub/>}/>

                      <Route path="/member-wallet" element={<MemberWallet/>}/>

                      <Route path="/diploma-progress" element={<DiplomaProgress/>}/>

                      <Route path="/cpd-progress" element={<CPDProgress/>}/>

                      <Route path="/settings" element={<Settings/>}/>

                      <Route path="/learn-cpds" element={<OnlineLearning/>}/>

                      <Route path="/elibrary" element={<Ebrary/>}/>

                      <Route path="/defer-and-exemption" element={<DeferNExemption/>}/>
                  

                  </MembershipLayout>
            )}
          /> */}

      </Routes>
    </>
  )
}

export default App
