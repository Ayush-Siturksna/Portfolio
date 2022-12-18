import React from 'react'
import {BsLinkedin,BsGithub,BsStackOverflow} from 'react-icons/bs'


const headersocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/ayush-gour-348077190" target='_blank'> <BsLinkedin/></a>
            <a href="https://github.com/Ayush-Siturksna" target='_blank'><BsGithub/></a>
            <a href="https://stackoverflow.com/users/20720360/ayush" target='_blank'><BsStackOverflow/></a>
            
        </div>
    )
}

export default headersocials
