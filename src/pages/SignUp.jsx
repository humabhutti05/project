// import React from 'react'
// import './SignUp.css'
// import { Container } from 'react-bootstrap'

// export default function SignUp() {
//   return (
//     <div style={{backgroundColor: "#002e4d"}}>
//    <Container className='py-5'>
//       <form className="form">
//         <p className="title">Register </p>
//         <p className="message">Sign up now and get full access to our app. </p>
//         <div className="flex">
//           <label>
//             <input required="" placeholder="" type="text" className="input" />
//             <span>First Name</span>
//           </label>
//           <label>
//             <input required="" placeholder="" type="text" className="input" />
//             <span>Last Name</span>
//           </label>
//         </div>
//         <label>
//           <input required="" placeholder="" type="email" className="input" />
//           <span>Email</span>
//         </label>
//         <label>
//           <input required="" placeholder="" type="password" className="input" />
//           <span>Password</span>
//         </label>
//         <label>
//           <input required="" placeholder="" type="password" className="input" />
//           <span>Confirm password</span>
//         </label>
//         <button className="submit">Submit</button>
//         <p className="sign Up">
//           Already have an account ? <a href="#">Sign Up</a>{" "}
//         </p>
//       </form>
   
    
//     </Container>

//     </div>
//   )
// }



import React from 'react'
import Contact from './Contact'
import { Container } from 'react-bootstrap'
import './SignUp.css'

export default function Login() {
  return (
    <div className='signUp-page' style={{backgroundColor: "#000d1a"}}>
      <Container>
      <div className="signUp-box">
    <form>
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Email</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required="" />
        <label>Password</label>
      </div>
      <center>
        <a href="#">
          SEND
          <span />
        </a>
      </center>
      <p className='text-white'>
       Already have an account?<a href="/login"> 
       Login now</a>
      </p>
    </form>
  </div>
      </Container>
    </div>
  )
}





