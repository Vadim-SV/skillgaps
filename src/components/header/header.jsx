import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.scss';
import logo from '../../assets/SG new.svg';



class Header extends Component  {

  constructor(){
    super();

    this.state = {
      opened: false
    };
  }
  toggle() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return (

  <div className = 'header'>
<div >
  <img className = 'Logo' src = {logo }  alt='logo'/>
 </div>

 <div className = 'toggle'>
        


        </div>
    <div className='options'>
    <Link className='option' to = '/shop' >
      About us
    </Link>
    <Link className='option' to = '/shop' >
      Search job
    </Link>
    <Link className='option' to = '/shop' >
      Job Alerts
    </Link>
    <Link className='option' to = '/shop' >
      Sign In
    </Link>
    <Link className='option' to = '/shop' >
      Sign up
    </Link>




</div>


</div>


  

    )}};

export default Header;