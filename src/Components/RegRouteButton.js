import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Register from '../pages/Register'
import Button from '../../node_modules/@material-ui/core/Button';




class RegButton extends Component{
 

    render(){
        const information = this.props

        console.log(information);
        console.log("aaaaaa");

    return(
      
        <Link to ={{
            pathname : "/register",
            state :{
                info : information
            }
            }}>
        
        
        <Button variant="contained" color="primary" font="italy">회원가입</Button></Link>
        
    )}
};

export default RegButton;


