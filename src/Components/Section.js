import React from 'react';
import './styles/section.css';

const Section = ({Icon,tittle,selected,color}) => {
  return (
    <div className={`section ${selected && "section-selected"}`} style={{
        borderBottom: `2px solid ${color}`,
        
    }} >
        <Icon style={{color:`${color}`}}/>
        <h4 style={{color:`${color}`}}>{tittle}</h4>
    </div>
  )
}

export default Section