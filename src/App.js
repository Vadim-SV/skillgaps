import React, {Component} from 'react';
import { Router, Route, Switch } from "react-router";
import NavBar from './components/navbar/navbar';



import  CardSection  from './components/card-section/card-section.jsx';
import Header from './components/header/header';
import { GlobalStyle } from './global.styles';


class App extends Component {
  constructor(){
    super();

    this.state = {
      jobList :[
        {
            id: 20,
            title: 'Software Engineer',
            location:'London',
            salary: 23000,
            company: 'Google',
            apply: 'https://www.indeed.co.uk/'
 
        },
        {
          id: 21,
          title: 'Accountant',
          location:'London',
          salary: 24000,
          company: 'FaceBook',
          apply:'https://www.indeed.co.uk/'

      },
      {
      id: 21,
      title: 'Finance Director',
      location:'London',
      salary: 24000,
      company: 'PwC',
      apply:'https://www.indeed.co.uk/'
    },
    {
    id: 21,
    title: 'Management Consultant',
    location:'London',
    salary: 24000,
    company: 'EY',
    apply:'https://www.indeed.co.uk/'

    },
    ]
  }
}




render() {

  return (
    <div>
    <GlobalStyle/>

    <Header/>
    <h1>Tier 2 jobs in the UK</h1>

    <CardSection jobList = {this.state.jobList}/>  
   
   
  
</div>
  );
}}

export default App;
