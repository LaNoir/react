import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Register from '../pages/Register'



class RegButton extends Component{
 

    render(){
        const {information} = this.props

        console.log(information);
        console.log("aaaaaa");

    return(
      
        <Link to ={{
            pathname : "/register",
            state :{
                info : information
            }
            }}>
        
        
        <button type="button">회원가입</button></Link>
        
    )}
};

export default RegButton;


