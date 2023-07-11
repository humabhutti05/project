// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';



// function NavigationBar() {
//   return (
//     <Navbar  expand="lg" style={{backgroundColor: " #330080" ,borderBlockColor: " #0d0d0d" , boxShadow: "black" , boxSizing: "border-box"}}>
//       <Container>
//         <Link className='navbar-brand' to="/" style={{color: "white"}}>YGW$</Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto text-light" >
//             <Link className='nav-link' to="/home">Home</Link>
//             <Link className='nav-link' to="/games">Games</Link>
//             <Link className='nav-link' to="/signUp">Sign Up</Link>
//            <Link className='ms-4 btn btn-dark' to="/login">Login</Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#00091a", borderBlockColor: '#000d1a', borderBlockColor: 'white', boxShadow: '#0055ff', boxSizing: 'border-box' }}>
      <Container>
        <Link className='navbar-brand' to='/' style={{ color: 'white' }}>YGW$</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to='/home' style={{ color: 'white'}} >Home</Link>
            <Link className='nav-link' to='/games' style={{ color: 'white' }}>Games</Link>
            <Link className='nav-link' to='/signUp' style={{ color: 'white' }}>Sign Up</Link>
            <Link className='ms-4 btn btn-dark' to='/login'>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
