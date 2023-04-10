import React from 'react'
import './experience.css'
import Project from './projectcomp'
import {FiExternalLink} from  'react-icons/fi'

const projects = 
[
     {
       "name": "Virtual Trading App",
       "description": "A web application for managing tasks and to-do lists.",
       "imageUrl": "portfolio1.png",
       "git": "https://github.com",
       "demo": "https://youtu.be/nwMy-AQqBSw",
       "Icon":FiExternalLink
       
     },
     {
      "name": "Responsive Portfolio",
      "description": "A social network for pet owners to connect and share photos.",
      "imageUrl": "portfolio4.png",
      "git": "https://github.com",
      "demo": "https://ayush-siturksna.github.io/Portfolio/",
      "Icon":FiExternalLink
     
    },
     {
       "name": "Automatic list fetch",
       "description": "A mobile app for tracking daily water intake.",
       "imageUrl": 'portfolio2.png',
       "git": "https://github.com",
       "demo": "https://youtu.be/tlTub-lxHTk",
       "Icon":FiExternalLink
    
     },
     {
       "name": "MultiCloud Infra Code",
       "description": "A browser extension for dark mode on websites.",
       "imageUrl": "portfolio3.png",
       "git": "https://github.com",
       "demo": "https://youtu.be/0XbFL_4UmZw",
       "Icon":FiExternalLink
     
     },
   
     {
       "name": "3D Pesticide Sprayer",
       "description": "An e-commerce platform for buying and selling handmade crafts.",
       "imageUrl": "portfolio5.png",
       "git": "https://github.com",
       "demo": "https://youtu.be/f8FDuFzmYAo",
       "Icon":FiExternalLink
       
     }, 
     
     {
      "name": "Jbrowse GPT3 Integration",
      "description": "An e-commerce platform for buying and selling handmade crafts.",
      "imageUrl": "portfolio6.png",
      "git": "https://github.com",
      "demo": "https://youtu.be/vUJkxGPJyZY",
      "Icon":FiExternalLink
    }
   ]
; 



const Experience = () => {
    return (
       <section id="experience">
          <h5>What Projects I Have</h5>
          <h2>My Experience</h2>
          <div className="container experience_container">


              {projects.map(projectu => (
               <Project key={projectu.name} {...projectu} />
                 ) )}

          </div>
          

           
       </section>
    )
}

export default Experience
