import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from  'react-icons/fa'
import {SlGraduation}from 'react-icons/sl'
import {AiOutlineFileDone} from  'react-icons/ai'
import './about.css'
import Aboutcomp from './aboutcomp'


const data=  [{
    "title": "WORK",
    "org": "CAPGEMINI",
    "desc": "Devnetops & Networking Engineer",
    "Icon": AiOutlineFileDone
  },
  {
    "title": "BTECH",
    "org": "MNNIT ALLAHABAD",
    "desc": "Mechanical Engineering \"CGPA:8/10\"",
    "Icon": SlGraduation
  },
  {
    "title": "CLASS XII",
    "org": "JOINT MISSION HIGHER SECONDARY SCHOOL",
    "desc": "MP Board \"88.4%\"",
    "Icon": FaAward
  },
  {
    "title": "CLASS X",
    "org": "MACRO VISION ACADEMY",
    "desc": "CBSE \"CGPA:10/10\"",
    "Icon": FaAward
  }
] ;




const About = () => {
    return (
       <section id='about'>
           <h5>Get To Know</h5>
           <h2>About Me</h2>
           <div className="container about_container">
               <div className="about_me">
                 <div className="about_me-image">
                     <img src={ME} alt="About Image"/>
                 </div>

                 
                 <p>
                     I am from a small village Mahendragaon in Madhya Pradesh ,India.Coming from Agricultural Backgground ,I was always amazed 
                     by technology and excited to learn and discover innovative ideas/tech.
                     
                 </p>

               

               </div>


              
               <div className="about_content">
                 <div className="about_cards">

                     {
                        data.map(val=>(
                            <Aboutcomp key={val.title} {...val} />
                        ))
                     }


                 </div>
                


               </div>

           </div>
       </section>
    )
}

export default About
