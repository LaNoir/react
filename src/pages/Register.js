import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import RegButton from '../Components/RegRouteButton'

function shouldComponentUpdate(nextProps, nextState) {
    const vitalPropsChange = this.props.bar !== nextProps.bar;
    const vitalStateChange = this.state.foo !== nextState.foo;    
    return false;
}

class About extends Component {

  state = {

    information : window.info,

      id :'',
      pw :'',
      registered : false
  }

  ident = []
  kkk = []

  handleChange = (e) => {

   

    this.setState({
      [e.target.name]: e.target.value
    })
    console.log("id: " + this.state.id+" pw: "+ this.state.pw);
    console.log(window.info);
  }

  handleSubmit = (e) => {
    e.preventDefault();


    

    this.ident = this.state.information.filter(item => item.uid === this.state.id);


    if(this.ident.length !== 0) {
        alert("아이디가 중복 입니다")
        return;
    }  
    
    else{
        alert("중복이 아닙니다!!");
    }

    if(this.state.pw.length < 7 ) {
        alert("Too Short!!")
    this.state.registered = false;}

    else{
    window.info.push([this.state.id,this.state.pw]);
    console.log(window.info);

    
    alert("register성공 loginpage로 이동합니다");

    let info = this.state.information;
    this.setState({
       information : info, 
    })
    console.log("id: " + this.state.id+" pw: "+ this.state.pw);
    alert("asdasd");

    
    this.state.registered = true;


    }



  }


    render() {

        if(this.state.registered === true){
          return(<Redirect to ={{
            pathname : "../",
            state :{
                info : this.state.information
            }
            }}/>);
        }

        else{
        return (
           
          <form onSubmit={this.handleSubmit}>
               Register!!!<br/>
                <input 
                placeholder ={'id'}
                value ={this.id}
                onChange={this.handleChange}
                name = "id"
                
                />
                <br/>
                <input 
                placeholder ={'pw'}
                value ={this.pw}
                onChange={this.handleChange}
                name = "pw"
                
                />
                <button type="submit" >제출</button>
                
            </form>
  
        );}
    }
}

export default About;