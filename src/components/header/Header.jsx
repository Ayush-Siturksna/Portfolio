import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
import {SiReacttable} from 'react-icons/si'
const Header = () => {
    return (

        <section>

            <div className="container header_container">
              <h5>Hello I am</h5> 
              <h2>Ayush Gour</h2>
              <h5 className="text-light">
                  Developer
              </h5>
              <CTA></CTA>
              
              <div className="me">
                  <img src={ME} alt="me"/>
              </div>
              <HeaderSocials></HeaderSocials>
           


 
              </div>
              
               

              
        </section>
      
    )
}

export default Header
