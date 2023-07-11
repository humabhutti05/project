import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
// import Loader from './Components/Loader'
import Contact from './pages/Contact'
import CookiesPolicy from './pages/CookiesPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Help from './pages/Help'
import Terms from './pages/Terms'
import Games from './pages/Games'

export default function App() {
  return (
<>

<NavigationBar/>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Page404 />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/cookiesPolicy" element={<CookiesPolicy />} /> 
    <Route path="/terms" element={<Terms />} />
    <Route path="/help" element={<Help />} />
    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
    <Route path="/games" element={<Games />} />
   
  </Routes>

<FooterSection/>

</>

  )
}
