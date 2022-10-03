import './App.css';
// import React, {useEffect} from 'react';
import React from 'react';
import axios from './baseUrl';
import logo from './kabulogo-removebg-preview.png'

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      username:'', 
      password:''
    }

    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  // handleFetch=()=>{
  //   axios.get('/server/intro').then(response=>{
  //     this.setState({
  //       backendData:response.data
  //     })
  //   })
  // }

  handleUsernameChange=event=>{
    this.setState({
      username:event.target.value
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
      username:this.state.username,
      password:this.state.password
    }

    this.setState({
      username:'',
      password:''
    })
    
    // post the data to the backend
    axios.post("/server/intro", userDetails).then(res=>{
      alert(res.data);
    }).catch(err=>{
      console.log(err)

      // clear the state after submitting the details

    })
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
                  Username
                </label>
                <input type="text" placeholder='Enter your username' value={this.state.username} onChange={this.handleUsernameChange}>
                </input>

                <br></br>

                <label>
                  Password
                </label>
                <input type="password" placeholder='Enter your password' value={this.state.password} onChange={this.handlePasswordChange}>
                </input>

                <p className="forgot-password">
                  Forgot password?
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

