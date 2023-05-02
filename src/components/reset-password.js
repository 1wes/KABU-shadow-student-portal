import React from 'react';
import {Link} from 'react-router-dom';
import {Centeredsegment, Contentsegment, Logobanner, SubmitButton, Footnote} from './forgot-password';
import './reset-password.css';
import axios from '../baseUrl'

let submitMessage=`Change Password`;

let matchPassword=(resetPassword, confirmPassword)=>{

    return confirmPassword!==resetPassword ? false:true;
}

class EnterNewPasswordForm extends React.Component{

    constructor(props){

        super(props)

        this.handleNewPassword=this.handleNewPassword.bind(this);
        this.handleRepeatPassword=this.handleRepeatPassword.bind(this);
    }

    handleNewPassword=(event)=>{
       
        this.props.handleNewPassword(event.target.value);
    }

    handleRepeatPassword=(event)=>{
        this.props.handleRepeatPassword(event.target.value);
    }
    
    render(){

        return(
            <React.Fragment>
                <form className='change-password-form'>
                    <label>
                        Enter New Password
                    </label>

                    <div className='new-password'>
                        <input type='password' placeholder='Enter New Password' onChange={this.handleNewPassword}></input>
                    </div>

                    <label>
                        Repeat Your Password
                    </label>

                    <div className='repeat-password'>
                        <input type='password' placeholder='Repeat Your Password' onChange={this.handleRepeatPassword}></input>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

class Changepassword extends React.Component{

    constructor(props){

        super(props);

        this.state={
            newPassword:'',
            confirmPassword:'',
            passwordMatch:false
        }

        this.handleNewPassword=this.handleNewPassword.bind(this);
        this.handleRepeatPassword=this.handleRepeatPassword.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    handleNewPassword=(newPassword)=>{
        if(newPassword!==''){
            this.setState({
                newPassword:newPassword
            })
        }
    }

    handleRepeatPassword=(confirmPassword)=>{
        if(confirmPassword!==''){
            this.setState({
                confirmPassword:confirmPassword
            })
        }
    }

    submitForm=e=>{
        e.preventDefault();

        let match=matchPassword(this.state.newPassword, this.state.confirmPassword);

        match? 

        axios.post('/student/login/resetPassword', {newPassword:this.state.newPassword, confirmPassword:this.state.confirmPassword}).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        }):this.setState({
            passwordMatch:this.state.passwordMatch
        })
    }

    render(){

        return(
            <React.Fragment>
                <div className='change-password'>
                    <Centeredsegment>
                        <Contentsegment>
                            <Logobanner/>
                            <hr/>
                            <EnterNewPasswordForm handleNewPassword={this.handleNewPassword} handleRepeatPassword={this.handleRepeatPassword} />

                            <div className='change-passwd-sbmt-btn'>
                                <SubmitButton buttonMessage={submitMessage} submitForm={this.submitForm} />
                            </div>
                        </Contentsegment>
                    </Centeredsegment>
                    <Footnote/>
                </div>
            </React.Fragment>
        )
    }
}
export default Changepassword;