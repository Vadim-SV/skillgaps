import React from 'react';
import logo from '../../assets/SG new.svg';
import './footer.styles.css';

const Footer = () => (

    <div className = 'footer-section'>

    <div className= 'footer'>

    <div className = 'footer-menu'>
    <div className = 'logo'>
    <img className = 'Logo' src = {logo }  alt='logo'/>
    </div>
    <div className = 'about'>
    <h4>About us</h4>
    </div>
    <div className = 'services'>
    <h4>Services</h4>
    </div>
    <div className= 'contact'>
    <h4>Contact us</h4>
    </div>

 
    </div>
    <div className ='rights'>
   @All rights reserved. BlackGate Group
</div>

    </div>




    </div>


);

export default Footer;