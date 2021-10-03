import React from 'react';
import '../../App.css';
import SignUpform from '../Sign up/SignUpform';

export default function SignUp() {
  return (
    <h1 style={{ display: "flex", flexDirection: "column" }} className='sign-up'>
      <div >Sign Up</div>

      <div><SignUpform /></div>
    </h1>
  )
    ;
}
