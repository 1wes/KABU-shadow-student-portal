import './App.css';
import React from 'react';
import axios from './baseUrl';
import {Link} from 'react-router-dom';
import {Centeredsegment, Contentsegment, Logobanner, SubmitButton, Footnote} from './components/password-reset';
import Modal from './components/modal';

function Login(props){

  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

class Loginform extends React.Component{

  constructor(props){
    super(props);

    this.handleRegChange=this.handleRegChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
  }

  handleRegChange=(event)=>{
    this.props.handleRegChange(event.target.value);
  }

  handlePasswordChange=(event)=>{
    this.props.handlePasswordChange(event.target.value);
  }

  render(){

    return(
      <React.Fragment>
        <form className='login-form'>
          <label>
            Reg. Number
          </label>

          <div className='reg-no'>
              <input type="text" placeholder='Reg. Number' value={this.props.reg_no} onChange={this.handleRegChange} required>
              </input>
          </div>



          <label>
            Password
          </label>

          <div className='password'>
              <input type="password"  id='show-password' placeholder='Password' value={this.props.password} onChange={this.handlePasswordChange} required>
              </input>
          </div>

          <div className='remember-me'>
            <input type='checkbox' id='cookie-checkbox'></input>
            <span>
              <label>
                Remember me
              </label>
            </span>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

function Forgotpasswordlink(props){

  return(
    <React.Fragment>
      <p className='password-reset-link'>
          <Link to='student/login/forgotPassword' id='forgot-password-link'>Forgot your password?</Link>
      </p>
    </React.Fragment>
  )
}

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      reg_no:'',
      password:''
    }

    this.submitForm=this.submitForm.bind(this);
    this.handleRegChange=this.handleRegChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
  }

  handleRegChange=(newRegNo)=>{
    this.setState({
      reg_no:newRegNo
    });
  }

  handlePasswordChange=(newPassword)=>{
    this.setState({
      password:newPassword
    });    
  }

  submitForm=e=>{

    e.preventDefault();

    const userDetails={
      reg_no:this.state.reg_no,
      password:this.state.password
    }

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

  render(){

    let text='Log In'

    return(

      <React.Fragment>

        <div id='main-container'>
          <Centeredsegment>
            <Contentsegment>
              <Logobanner/>
              <hr/>

              <Login>
                <Loginform handlePasswordChange={this.handlePasswordChange} handleRegChange={this.handleRegChange} />
              </Login>

              <div className='sub-btn-div'>
                <SubmitButton text={text} submitForm={this.submitForm} />
              </div>

              <Forgotpasswordlink/>

            </Contentsegment>
          </Centeredsegment>
          <Footnote/>
          <Modal/>
        </div>
        
      </React.Fragment>
    )
  }
}
export default App;

