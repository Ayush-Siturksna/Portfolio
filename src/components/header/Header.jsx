import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {BsFillCaretDownFill} from 'react-icons/bs'
const Header = () => {
    return (
       <header>
           <div className="container header_container">
              <h5>Hello I am</h5> 
              <h2>Ayush Gour</h2>
              <h5 className="text-light">
                  Developer
              </h5>
              <CTA></CTA>
              <HeaderSocials></HeaderSocials>
              <div className="me">
                  <img src={ME} alt="me"/>
              </div>
              <a href="#contact" className='scroll_down'> <BsFillCaretDownFill/> </a>

           </div>
       </header>
    )
}

export default Header
