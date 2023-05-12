import './App.css';
import React from 'react';
import axios from './baseUrl';
import {Link} from 'react-router-dom';
import {Centeredsegment, Contentsegment, Logobanner, SubmitButton, Footnote} from './components/forgot-password';
import Modal from './components/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-regular-svg-icons';

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
              <i className='eye-icon'>
                <FontAwesomeIcon icon={faEye} />
              </i>
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
      loginMessage:''
    }

    this.submitForm=this.submitForm.bind(this);
    this.handleRegChange=this.handleRegChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.modalWrapper=React.createRef();
    this.closeOnClickingOnButton=this.closeOnClickingOnButton.bind(this);
    this.closeOnClickingOutsideModal=this.closeOnClickingOutsideModal.bind(this);
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

    axios.post("/student/login", userDetails).then(res=>{

      this.setState({
        loginMessage:''
      })

      this.delayLogin=setTimeout(()=>{
        window.location.href='/student/dashboard';
      },1);
      
    }).catch(err=>{

      this.setState({
        loginMessage:`Either username or password is wrong. If forgotten your password, then reset`
      })

      this.delayModalDisplay=setTimeout(()=>{

         let wrapper=this.modalWrapper.current;

         let wrapperClass=wrapper.getAttribute('class');

         wrapper.classList.remove(wrapperClass);
         wrapper.classList.add('modal-show')

         this.setState({
           modalIsOpen:!this.state.modalIsOpen
         });
        },1)

      })


    }else{

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

  componentWillUnmount(){
    clearTimeout(this.delayLogin,this.delayModalDisplay);
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
          {
            this.state.loginMessage!==''?<Modal message={this.state.loginMessage} ref={this.modalWrapper} closeOnClickingOnButton={this.closeOnClickingOnButton} 
            closeOnClickingOutsideModal={this.closeOnClickingOutsideModal}/>:<Modal message={warningMessage} ref={this.modalWrapper} closeOnClickingOnButton={this.closeOnClickingOnButton} 
            closeOnClickingOutsideModal={this.closeOnClickingOutsideModal}/>
          }
        </div>
        
      </React.Fragment>
    )
  }
}
export default App;