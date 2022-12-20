import React from 'react'
import './portfolio.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import SKILL from '../../assets/Skills.jpg'
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container skill_container">
                <div className="skills_tech">
                   <h3>Tech Skills</h3>
                   <div className="skills_content">
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>PYTHON</h4>
                     <small className='text-light'>Experienced</small>
                     </article>
                     
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>C++</h4>
                     <small className='text-light'>Experienced</small>
                     </article>
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>C</h4>
                     <small className='text-light'>Experienced</small>
                     </article>
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>HTML</h4>
                     <small className='text-light'>Intermediate</small>
                     </article>
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>CSS</h4>
                     <small className='text-light'>Intermediate</small>
                     </article>
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>JAVASCRIPT</h4>
                     <small className='text-light'>Experienced</small>
                     </article>
                     
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>ARM</h4>
                     <small className='text-light'>Intermediate</small>
                     </article>
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>YAML</h4>
                     <small className='text-light'>Intermediate</small>
                     </article>
                   </div>
                </div>

                <div className="skills_soft">
                   <h3>Soft Skills</h3>
                   <div className="skills_content_soft">
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>Communication</h4>
                     <small className='text-light'>4/5</small>
                     </article>
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>Negotiation</h4>
                     <small className='text-light'>4/5</small>
                     </article>
                     <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <h4>Writing</h4>
                     <small className='text-light'>4/5</small>
                     </article>
                     
               
                   </div>
                </div>
                <div className='skill_image'>
                    <div className="skill_image_content">
                        <img src={SKILL} className='skill_image_content'  alt="Skill Image"/>
                        <article>If you are looking for Experience ,I don't have much of it,
                        but what I have is a particular set of skills that I have acquired over a period of time 
                        ,which makes me nightmare for people with fake experience and lacking skills.
                        </article> 
                    </div>
                   
                </div>
                
            </div>
             

        </section>
    )
}

export default Portfolio
