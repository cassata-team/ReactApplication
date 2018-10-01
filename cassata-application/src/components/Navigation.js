import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () =>{
  return(
    <div>
        <NavLink to='/'>Home</NavLink>        
        <NavLink to='/Login'>Login</NavLink>        
        <NavLink to='/Profile'>Profile</NavLink>            
    </div>
  ) 
}

export default Navigation;