import React from "react";

function Aboutcomp(props) {
const {title ,org, desc,Icon} =props

return(
<article className='about_card'>
    < Icon className='about_icon'/>
    <h5>{title}</h5>
    <h6>{org}</h6>
    <small>{desc}</small>

 </article>
 


);






}


export default Aboutcomp ; 