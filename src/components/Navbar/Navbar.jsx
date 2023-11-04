import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const[navLink,setNavLink] = useState("navlinks")
  const[menu,setMenu] = useState("assests/mobile-menu.svg")

  const navClick = () => {
    setNavLink("navlinks")
    setMenu("assests/mobile-menu.svg")
  }

  const navclick = () => {
    if(navLink === "navlinks"){
      setNavLink("navlinks active")
      setMenu("assests/cancel.png")
    }
    else{
      setNavLink("navlinks")
      setMenu("assests/mobile-menu.svg")
    }
  }


  return (
    <>
    <section className="navbar">
      <Link to="/">
      <div className="logobox">
        <img className='logo' src="assests/rectr-mobile-logo.svg" alt="Rectr" />
        <div className="site-namebox">
          <p>Rectr</p>
          <h3>Innovate the way you live</h3>
        </div>
      </div>
      </Link>
      <div className={navLink}>
        <a  onClick={navClick} href="#L1">What we do</a>
        <a  onClick={navClick} href="#L2">What's new</a>
        <a  onClick={navClick} href="#L3">What you get</a>
        <a  onClick={navClick} href="#L4">How it works</a>
        <a  onClick={navClick} href="#L5">Results</a>
        <a  onClick={navClick} href="#L6">Join the story of Rectr</a>
        <a  onClick={navClick} href="#faq">FAQ</a>
      </div>
      <div className="menubox" onClick={navclick}>
      <img src={menu} alt="Menu" />
      </div>
    </section>
    </>
  )
}

export default Navbar