import './App.css';
import React from 'react';
import axios from './baseUrl';
import {Link} from 'react-router-dom';
import {Centeredsegment, Contentsegment, Logobanner, SubmitButton, Footnote} from './components/forgot-password';
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
      password:'',
      validReg:false,
      validPassword:false,
      modalIsOpen:false,
    }

    this.submitForm=this.submitForm.bind(this);
    this.handleRegChange=this.handleRegChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.modalWrapper=React.createRef();
    this.closeOnClickingOnButton=this.closeOnClickingOnButton.bind(this);
    this.closeOnClickingOutsideModal=this.closeOnClickingOutsideModal.bind(this);
  }

  saySomething=(something)=>{
    console.log(something)
  }

  handleRegChange=(newRegNo)=>{

    if(newRegNo!==''){
      this.setState({
        reg_no:newRegNo,
        validReg:true
      })
    }else{
      this.setState({
        reg_no:'',
        validReg:false
      })
    }
  }

  handlePasswordChange=(newPassword)=>{

    if(newPassword!==''){
      this.setState({
        password:newPassword,
        validPassword:true
      });
    }else{
      this.setState({
        password:'',
        validPassword:false
      })
    }
  }

  closeOnClickingOnButton=e=>{
    e.preventDefault();
    
    if(this.state.modalIsOpen){
      let wrapper=this.modalWrapper.current

      let wrapperClass=wrapper.getAttribute('class');

      wrapper.classList.remove(wrapperClass);
      wrapper.classList.add('modal-wrapper')

      this.setState({
          modalIsOpen:!this.state.modalIsOpen
      })
    }
  }

  closeOnClickingOutsideModal=()=>{
    let wrapper=this.modalWrapper.current;

    if(this.state.modalIsOpen){
      let wrapperClass=wrapper.getAttribute('class');

      wrapper.classList.remove(wrapperClass);
      wrapper.classList.add('modal-wrapper')

      this.setState({
          modalIsOpen:!this.state.modalIsOpen
      })
    }
  }

  submitForm=e=>{

    e.preventDefault();

    const {validReg, validPassword, modalIsOpen, reg_no, password}=this.state;

    if(validReg && validPassword && !modalIsOpen){

      const userDetails={
        reg_no:reg_no,
        password:password
      }

    // post the data to the backend
    axios.post("/student/login", userDetails).then(res=>{
      alert(res.status);
    }).catch(err=>{
      alert(err.response.status)
      // clear the state after submitting the details
    })}else{

      let wrapper=this.modalWrapper.current;

      let wrapperClass=wrapper.getAttribute('class');
      this.setState({
        reg_no:'',
        password:''
      })
      wrapper.classList.remove(wrapperClass);
      wrapper.classList.add('modal-show')

      this.setState({
          modalIsOpen:!this.state.modalIsOpen
      })
    }
  }

  render(){

    let buttonMessgae='Log In';
    let warningMessage='Enter registration number'

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
                <SubmitButton buttonMessage={buttonMessgae} submitForm={this.submitForm} />
              </div>

              <Forgotpasswordlink/>

            </Contentsegment>
          </Centeredsegment>
          <Footnote/>
          <Modal message={warningMessage} ref={this.modalWrapper} closeOnClickingOnButton={this.closeOnClickingOnButton} 
          closeOnClickingOutsideModal={this.closeOnClickingOutsideModal} />
        </div>
        
      </React.Fragment>
    )
  }
}
export default App;