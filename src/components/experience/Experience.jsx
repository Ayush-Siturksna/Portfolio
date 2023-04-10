import React from 'react'
import './experience.css'
import Project from './projectcomp'

const projects = 
[
     {
       "name": "Project 1",
       "description": "A web application for managing tasks and to-do lists.",
       "imageUrl": "portfolio1.jpg",
       "git": "https://github.com",
       "demo": "https://youtube.com"
     },
     {
       "name": "Project 2",
       "description": "A mobile app for tracking daily water intake.",
       "imageUrl": 'portfolio2.jpg',
       "git": "https://github.com",
       "demo": "https://youtube.com"
     },
     {
       "name": "Project 3",
       "description": "A browser extension for dark mode on websites.",
       "imageUrl": "portfolio3.jpg",
       "git": "https://github.com",
       "demo": "https://youtube.com"
     },
     {
       "name": "Project 4",
       "description": "A social network for pet owners to connect and share photos.",
       "imageUrl": "portfolio4.jpg",
       "git": "https://github.com",
       "demo": "https://youtube.com"
     },
     {
       "name": "Project 5",
       "description": "An e-commerce platform for buying and selling handmade crafts.",
       "imageUrl": "portfolio5.png",
       "git": "https://github.com",
       "demo": "https://youtube.com"
     }, 
     
     {
      "name": "Project 6",
      "description": "An e-commerce platform for buying and selling handmade crafts.",
      "imageUrl": "portfolio6.jpg",
      "git": "https://github.com",
      "demo": "https://youtube.com"
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
