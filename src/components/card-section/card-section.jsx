import React from 'react';
import Card from '../card/card';

import './card-section.css';


const CardSection = props => (
  <div className = 'card-section'>
<div className = 'card-list'>
  {props.jobList.map(jobList => (
      <Card   key = {jobList.id} jobList = {jobList}/>
    
       ))} 
       </div>
   </div>
);

export default CardSection;