import React from 'react';
import './styles/sidebaroptions.css';


const SideBarOption = ({Icon,number,title}) => {
  return (
    <div className="sidebar_option">
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
    
  )
}

export default SideBarOption