import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RegButton from '../Components/RegRouteButton'
import App from '../App';
import Button from '../../node_modules/@material-ui/core/Button';
import Card from '../../node_modules/@material-ui/core/Card';
import './mycss.css';
import TextField  from '../../node_modules/@material-ui/core/TextField';
import LockOutlinedIcon  from '../../node_modules/@material-ui/icons/LockOutlined'
import '../array'
import Paper from'../../node_modules/@material-ui/core/Paper'
import { Icon } from '@material-ui/core/';
import Image from '../Images/SgSyVHQ.jpg';

const styles = {
  paperContainer: {
    height: 1000,
      backgroundImage: `url(${Image})`
  }
};

class Root extends Component {

  state = {
  logined : 0,  
  id :'',
  pw : ''
}
  ident =[]


  handleChange = (e) => {
    console.log(window.info);

    this.setState({
      [e.target.name]: e.target.value
    })
    console.log("id: " + this.state.id+" pw: "+ this.state.pw);

  }

  handleSubmit = (e) => {

    
    console.log("B");

    console.log(window.info);
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    // 상태 초기화
    
    this.ident = window.info.filter(item => item.uid === this.state.id);
    this.ident = this.ident.filter(item => item.upw === this.state.pw);

    console.log("A");
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
          <Paper style={styles.paperContainer}>
          <Card className = {"my-card"}>
          <form className = {"form"} onSubmit={this.handleSubmit}>
               Hello This is <br/> Main Page  <br/>            
               <LockOutlinedIcon/><br/> 

                <TextField  className={"textField"} 
                placeholder ={'id'}
                value ={this.id}
                onChange={this.handleChange}
                name = "id"
                
                />
                <br/>
                <TextField className={"textField"}
                placeholder ={'pw'}
                value ={this.pw}
                onChange={this.handleChange}
                name = "pw"
                
                />
                  <br/>
                <Button variant="contained" color="primary" type="submit" >로그인</Button>
                <RegButton information = {this.state.info}/>
             
            </form>
            </Card>
            </Paper>
        );
    }
}

export default Root;