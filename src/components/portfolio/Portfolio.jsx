import React from 'react'
import './portfolio.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import SKILL from '../../assets/Skills.jpg'
import Skilldata from './skillcomponent';


const techdata=[
    {
        "name": "JavaScript",
        "level": "Intermediate"
      },
      {
        "name": "React",
        "level": "Intermediate"
      },
      {
        "name": "HTML",
        "level": "Intermediate"
      },
      {
        "name": "CSS",
        "level": "Intermediate"
      },
    

      {
        "name": "Python",
        "level": "Experienced"
      },
      {
        "name": "C++",
        "level": "Experienced"
      },
      {
        "name": "Java",
        "level": "Experienced"
      },
     
      {
        "name": "ARM",
        "level": "Intermediate"
      },
      {
        "name": "YAML",
        "level": "Intermediate"
      }

];

const softdata=[

    {
        "name": "Communication",
        "level": "4/5"
      },
      {
        "name": "Negotiation",
        "level": "4/5"
      },
      {
        "name": "Writing",
        "level": "4/5"
      } ,
      {
        "name": "Creativity",
        "level": "5/5"
      }



];










const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container skill_container">
                <div className="skills_tech">
                   <h3>Tech Skills</h3>
                   <div className="skills_content">


                    {techdata.map(skill=>(
                       <Skilldata key={skill.name}  {...skill}/>

                    ))}


                   </div>
                </div>

                <div className="skills_soft">
                   <h3>Soft Skills</h3>
                   <div className="skills_content_soft">
                 
                   {softdata.map(skill=>(
                       <Skilldata key={skill.name} {...skill}/>

                    ))}

               
                   </div>
                </div>
                <div className='skill_image'>
                    <div className="skill_image_content">
                        <img src={SKILL} className='skill_image_content'  alt="Skill Image"/>
                        <article>If you are looking for fake Experience ,I don't have it,
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
