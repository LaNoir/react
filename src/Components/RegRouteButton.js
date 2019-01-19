import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Register from '../pages/Register'
import Button from '../../node_modules/@material-ui/core/Button';




class RegButton extends Component{
 

    render(){
       
    return(
      
        <Link to ={{
            pathname : "/register"
            }}>
        
        
        <Button variant="contained" color="primary" font="italy">회원가입</Button></Link>
        
    )}
};

export default RegButton;


