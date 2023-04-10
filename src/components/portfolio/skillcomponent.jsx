import React , {useState} from "react";
import {BsPatchCheckFill} from 'react-icons/bs'

function Skilldata(props) {

const {name,level}=props;


    return(
        <article className='skill_details'>
                     <BsPatchCheckFill/>
                     <div>
                     <h4>{name}</h4>
                     <small className='text-light'>{level}</small>

                     </div>
       </article>

    );

}


export default Skilldata;