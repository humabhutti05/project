// // import React from 'react'

// // export default function Login() {
// //   return (
// //     <div>Login</div>
// //   )
// // }

// import React from 'react'
// import { Container } from 'react-bootstrap'
// import './Login.css'

// export default function Login() {
//   return (
//     <div>
//       <Container>
//       <div className="login-box py-5">
//     <p>Login</p>
//     <form>
//       <div className="user-box">
//         <input required="" name="" type="text" />
//         <label>Email</label>
//       </div>
//       <div className="user-box">
//         <input required="" name="" type="password" />
//         <label>Password</label>
//       </div>
//       <a href="#">
//         <span />
//         <span />
//         <span />
//         <span />
//         Submit
//       </a>
//     </form>
//     <p>
//       Don't have an account?{" "}
//       <a href="/signUp" className="a2">
//         Sign up!
//       </a>
//     </p>
//   </div>
//       </Container>
//     </div>
//   )
// }



import React from 'react'
import Contact from './Contact'
import { Container } from 'react-bootstrap'
import './Login.css'

export default function Login() {
  return (
    <div className='login-page' style={{backgroundColor: "#000d1a"}}>
      <Container>
      <div className="login-box">
    <form>
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Username</label>
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
        Don't have an account?<a href="/signUp"> Sign up now</a>
      </p>
    </form>
  </div>
      </Container>
    </div>
  )
}
