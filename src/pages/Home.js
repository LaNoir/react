import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RegButton from '../Components/RegRouteButton'
import App from '../App';
import Button from '../../node_modules/@material-ui/core/Button';
import TextField  from '../../node_modules/@material-ui/core/TextField';

class Root extends Component {


  state = {info : [{
    uid : 'lee',
    upw : 'hihi'
  },
  {
    uid:'heo',
    upw : 'asdasd'
  }
  ],
   
  logined : 0,  
  id :'',
  pw : ''
}
  ident =[]


  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
    console.log("id: " + this.state.id+" pw: "+ this.state.pw);

  }

  handleSubmit = (e) => {

    
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    // 상태 초기화
    
    this.ident = this.state.info.filter(item => item.uid === this.state.id);
    this.ident = this.ident.filter(item => item.upw === this.state.pw);

    console.log(this.ident);

    (this.ident.length !==0 ) ? alert("login!!") : alert("failed!");

    this.setState({
      id: '',
      pw: '',
      logined : 1
    })
    console.log("id: " + this.state.id+" pw: "+ this.state.pw);
  }


    render() {
        return (
          <form onSubmit={this.handleSubmit}>
               Hello This is Main Page<br/>
                <TextField 
                placeholder ={'id'}
                value ={this.id}
                onChange={this.handleChange}
                name = "id"
                
                />
                <br/>
                <TextField 
                placeholder ={'pw'}
                value ={this.pw}
                onChange={this.handleChange}
                name = "pw"
                
                />
                  <br/>
                <Button variant="contained" color="primary" type="submit" >로그인</Button>
                <RegButton information = {this.state.info}/>
             
            </form>
  
        );
    }
}

export default Root;