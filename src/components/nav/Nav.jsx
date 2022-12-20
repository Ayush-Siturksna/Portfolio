import React from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline}  from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import {SlGameController} from 'react-icons/sl'
import './nav.css'
import {useState} from 'react'
const Nav = () => {

    const[activeNav,setActiveNav]= useState('#')
 
    return (
        <nav>
             <div>
             
             <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a> 
             <h6>Home</h6>        
             </div>
             <div>
             <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>
             <h6>About</h6>  
             </div>
             <div>
             <a href="#experience" onClick={()=>setActiveNav('#experience')}  className={activeNav==='#experience'?'active':''} ><MdWorkOutline/></a>
             <h6>Experience</h6>  
             </div>
             <div>
             <a href="#hobbies" onClick={()=>setActiveNav('#hobbies')}  className={activeNav==='#hobbies'?'active':''} ><SlGameController/></a>
             <h6>Hobbies</h6>  
             </div>
            <div>
            <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav==='#contact'?'active':''} ><TiContacts/></a>
            <h6>Contact</h6>  
            </div>
            
            
           
            
            


        </nav>
    )
}

export default Nav
