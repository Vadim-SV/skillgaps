import React from 'react';


import './card.styles.css';

const Card = (props) => (

    <div className = 'card-container'>
    <h3 className = 'title'> {props.jobList.title} @ {props.jobList.company}</h3>
   
    <div className = 'card-text'>
    <div className = 'left-container'>
    <h4 className = 'location'> Location: {props.jobList.location}</h4>
    </div>
    <div className = 'right-container'>
    <h4 className = 'salary'> Minimum salary: {props.jobList.salary}</h4>   
    </div>
    </div>
    <h4 className = 'description'> Short description: </h4>
    <p>{props.jobList.location}</p>

    <a className ='apply-button'  href = {props.jobList.apply} >View and apply now</a>
    
   
    </div>



);

export default Card;