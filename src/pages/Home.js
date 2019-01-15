import React, { Component } from 'react';
import {Link} from 'react-router';
class App extends Component {

  info = [{
    uid : 'lee',
    upw : 'hihi'
  }
  ]

  ident =[]

  state ={
    
  id :'',
  pw : ''
  }

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
    
    this.ident = this.info.filter(item => item.uid === this.state.id);
    this.ident = this.ident.filter(item => item.upw === this.state.pw);

    console.log(this.ident);

    (this.ident.length !==0 ) ? alert("login!!") : alert("failed!");

    this.setState({
      id: '',
      pw: ''
    })
    console.log("id: " + this.state.id+" pw: "+ this.state.pw);
  }


    render() {
        return (
          <form onSubmit={this.handleSubmit}>
               Hello React-Router<br/>
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
                <button type="submit" >로그인</button>
                
            <div>
              s</div>
            </form>
  
        );
    }
}

export default App;