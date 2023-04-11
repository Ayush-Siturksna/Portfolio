import React, { useState,useEffect } from 'react';


function Project(props) {
  const { name, description, imageUrl, git, demo,Icon } = props;
  const [img, setImage] = useState(null);
  
  const loadImage = async () => {
    const module = await import(`../../assets/${imageUrl}`);
    setImage(module.default);
  };

  // Call the `loadImage` function when the component mounts
  useEffect(() => {
    loadImage();
  }, []);

  // const loadImage = () => {
  //   import(`../../assets/${imageUrl}`)
  //     .then((module) => setImage(module.default))
  //     .catch((error) => console.log(error));
  // };

  // // Call the `loadImage` function when the component mounts
  // useEffect(() => {
  //   loadImage();
  // }, []);

  return (
    <articl className='experience_item'>
      <div className="experience_item_image">
        {img && <img src={img} alt="project title" />}
      </div>
      <div className='expnameandlink'>
      <h3>{name}</h3>
    
      <a href={demo} target='_blank' rel='noopener noreferrer'>
       <Icon/>
      </a>
      </div>
      
     


    </articl>
  );
}

export default Project;


// return (
//   <article className='experience_item'>
//     <div className="experience_item_image">
//       {img && <img src={img} alt="project title" />}
//     </div>
//     <h3>{name}</h3>
//     <a href={git} className='btn' target='_blank' rel='noopener noreferrer'>
//       Github
//     </a>
//     <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
//       Live Demo
//     </a>
//     <a href={demo} target='_blank' rel='noopener noreferrer'>
//        <HiExternalLink/>
//     </a>
   


//   </article>
// );
