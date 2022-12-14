import './App.css';
// import React, {useEffect} from 'react';
import React from 'react';
import axios from './baseUrl';
import logo from './kabulogo-removebg-preview.png'

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
  }

  // handleFetch=()=>{
  //   axios.get('/server/intro').then(response=>{
  //     this.setState({
  //       backendData:response.data
  //     })
  //   })
  // }

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

      const headersConfig={
        headers:{
          'auth_token':res.data.responseData.token
        }
      }

      axios.post("/student/auth",'',headersConfig).then(res=>{

        alert(JSON.stringify(res.data));
        
      });

    }).catch(err=>{
      console.log(err)

      // clear the state after submitting the details

    });
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
                <input type="password" placeholder='Enter your password' value={this.state.password} onChange={this.handlePasswordChange} required>
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

