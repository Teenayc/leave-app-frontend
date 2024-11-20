import React, {useRef, useState} from 'react';

function Application() {
  const employeeIdRef = useRef();
  const appTypeRef = useRef();
  const reasonsRef = useRef();
  const dateFromRef = useRef();
  const dateToRef = useRef();


  return (
    <div>
        
        <label>Apply Now</label>

        <input ref={employeeIdRef} type='text' placeholder='Employee Id'/>
        <input ref={appTypeRef} type='text' placeholder='Application Type'/>
        <input ref={reasonsRef} type='text' placeholder='Reasons'/>
        <input ref={dateFromRef} type='date' placeholder='Date From'/>
        <input ref={dateToRef} type='date' placeholder='Date To'/>
    </div>
  )
}

export default Application