import React from 'react'
import './experience.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Experience = () => {
    return (
       <section id="experience">
          <h5>What Projects I Have</h5>
          <h2>My Experience</h2>
          <div className="container experience_container">
              <article className='experience_item'>
               <div className="experience_item_image">
                  <img src={IMG1} alt="project title"/>
               </div>
               <h3>Ths is experience title</h3>
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
               <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </article>


              <article className='experience_item'>
               <div className="experience_item_image">
                  <img src={IMG1} alt="project title"/>
               </div>
               <h3>Ths is experience title</h3>
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
               <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </article>

              <article className='experience_item'>
               <div className="experience_item_image">
                  <img src={IMG1} alt="project title"/>
               </div>
               <h3>Ths is experience title</h3>
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
               <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </article>

              <article className='experience_item'>
               <div className="experience_item_image">
                  <img src={IMG1} alt="project title"/>
               </div>

              
               <h3>Ths is experience title</h3>
               
               
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
                
               
               
               <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
             
                 
              </article>

              <article className='experience_item'>
               <div className="experience_item_image">
                  <img src={IMG1} alt="project title"/>
               </div>
               <h3>Ths is experience title</h3>
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
               <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </article>

              <article className='experience_item'>
               <div className="experience_item_image">
                  <img src={IMG1} alt="project title"/>
               </div>
               <h3>Ths is experience title</h3>
               <a href="https://github.com" className='btn' target='_blank'>Github</a>
               <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </article>

          </div>
          

           
       </section>
    )
}

export default Experience
