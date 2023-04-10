import React,{useEffect, useState,lazy} from "react";

function Navcomp(props) {
  const { name, Icon ,active,setActive } = props;
  // const [active, setActive] = useState('#');

  return (
    <div>
      <a
        href={`#${name}`}
        onClick={() => setActive(`#${name}`)}
        className={active === `#${name}` ? "active" : ""}
      >
        <Icon />
      </a>
      <h6>{name}</h6>
    </div>
  );
}



export default  Navcomp;