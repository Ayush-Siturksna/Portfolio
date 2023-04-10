import React from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline}  from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import {SlGameController} from 'react-icons/sl'
import './nav.css'
import {useState} from 'react'
import Navcomp from './Navcomp'

const data= [
    {
        "name":"" ,
        "Icon":AiOutlineHome,
    
    },
    {
    "name":"about" ,
    "Icon":AiOutlineUser,
    
   },
   {
    "name":"experience" ,
    "Icon":MdWorkOutline,
    
   }
   ,
   {
    "name":"contact" ,
    "Icon":TiContacts,
    
   }
   

]


const Nav = () => {

    const[activeNav,setActiveNav]= useState('#')


 
    return (
        <nav>
   
    
            {    data.map(val=>(
                    <Navcomp key={val.name} active={activeNav} setActive={setActiveNav} {...val}/>
                ))
            
                  }
          


        </nav>
    )
}

export default Nav
