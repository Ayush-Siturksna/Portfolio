import React, { useState,useEffect } from 'react';

function Project(props) {
  const { name, description, imageUrl, git, demo } = props;
  const [img, setImage] = useState(null);

  const loadImage = async () => {
    const module = await import(`../../assets/${imageUrl}`);
    setImage(module.default);
  };

  // Call the `loadImage` function when the component mounts
  useEffect(() => {
    loadImage();
  }, []);

  return (
    <article className='experience_item'>
      <div className="experience_item_image">
        {img && <img src={img} alt="project title" />}
      </div>
      <h3>{name}</h3>
      <a href={git} className='btn' target='_blank' rel='noopener noreferrer'>
        Github
      </a>
      <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
        Live Demo
      </a>
    </article>
  );
}

export default Project;
