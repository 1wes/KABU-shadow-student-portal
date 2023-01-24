import './App.css';
// import React, {useEffect} from 'react';
import React from 'react';
import axios from './baseUrl';
import logo from './kabulogo-removebg-preview.png'
import {Link} from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      reg_no:'', 
      password:''
    }

    this.handleRegChange=this.handleRegChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.togglePasswordVisibility=this.togglePasswordVisibility.bind(this);
  }

  handleRegChange=event=>{
    this.setState({
      reg_no:event.target.value
    })
  }

  handlePasswordChange=event=>{
    this.setState({
      password:event.target.value
    })
  }

  handleSubmit=e=>{

    e.preventDefault();

    const userDetails={
      reg_no:this.state.reg_no,
      password:this.state.password
    }

    this.setState({
      reg_no:'',
      password:''
    })
    
    // post the data to the backend
    axios.post("/student/login", userDetails).then(res=>{

      if(res.status===201){

        const headersConfig={
          headers:{
            'auth_token':res.data.responseData.token
          }
        }

        axios.post("/student/auth", '', headersConfig).then(res=>{
          alert(JSON.stringify(res.status));
        }).catch(err=>{
          alert(err.response.status);
        })

      }

    }).catch(err=>{
      alert(err.response.status)
      // clear the state after submitting the details
    });
  }

  togglePasswordVisibility=(e)=>{
    let passwordField=document.getElementById('show-password');

    const type=passwordField.getAttribute('type')==='password'? 'text':'password'

    passwordField.setAttribute('type', type);

  }

  render(){

    return(
      <div className='login'>
        <div className='login-form'> 
          <div className='logo'>
            <img src={logo} alt="Kabarak-university-logo" />
          </div>
            <h3>
              Kabarak University Students Portal
            </h3>

            <div className='login-details'>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Registration Number
                </label>
                <input type="text" placeholder='Enter your reg. number' value={this.state.reg_no} onChange={this.handleRegChange} required>
                </input>

                <br></br>

                <label>
                  Password
                </label>
                <input type="password"  id='show-password' placeholder='Enter your password' value={this.state.password} onChange={this.handlePasswordChange} required>
                </input>

                <div className='password-visibility'>
                  <input type="checkbox" onClick={this.togglePasswordVisibility}></input>
                  <label>Show password</label>
                </div>

                <p className="forgot-password">
                  <Link to='/student/login/forgotPassword' id='forgot-password-link'>Forgot password?</Link>
                </p>

                <div className='submit-button'>
                  <button type='submit' value='Submit'>
                    Login
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
    )
  }
}
export default App;

