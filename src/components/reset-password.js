import React from 'react';
import {Link} from 'react-router-dom';
import {Centeredsegment, Contentsegment, Logobanner, SubmitButton, Footnote} from './forgot-password';
import './reset-password.css';
import axios from '../baseUrl';
import Modal from './modal';

let submitMessage=`Change Password`;

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
                        <input type='password' placeholder='Enter New Password' onChange={this.handleNewPassword} required></input>
                    </div>

                    <label>
                        Repeat Your Password
                    </label>

                    <div className='repeat-password'>
                        <input type='password' placeholder='Repeat Your Password' onChange={this.handleRepeatPassword} required></input>
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
            blankField:true,
            passwordMatch:false, 
            modalIsOpen:false,
        }

        this.handleNewPassword=this.handleNewPassword.bind(this);
        this.handleRepeatPassword=this.handleRepeatPassword.bind(this);
        this.submitForm=this.submitForm.bind(this);
        this.closeOnClickingOnButton=this.closeOnClickingOnButton.bind(this);
        this.closeOnClickingOutsideModal=this.closeOnClickingOutsideModal.bind(this);
        this.modalWrapper=React.createRef();
    }

    handleNewPassword=(newPassword)=>{
        if(newPassword!==''){
            this.setState({
                newPassword:newPassword,
                passwordMatch:false,
                blankField:false
            })
        }else{
            this.setState({
                newPassword:'',
                passwordMatch:false,
                blankField:true
            });
        }
    }

    handleRepeatPassword=(confirmPassword)=>{
        if(confirmPassword!==''){

            confirmPassword==this.state.newPassword?this.setState({
                passwordMatch:true, 
                confirmPassword:confirmPassword,
                blankField:false
            }):
            this.setState({
                passwordMatch:false, 
                confirmPassword:''
            });
        }else{
            this.setState({
                confirmPassword:'',
                blankField:true
            });
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

        let wrapper=this.modalWrapper.current

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

        let{newPassword, confirmPassword, passwordMatch, modalIsOpen}=this.state;

        if(passwordMatch&&!modalIsOpen){
            axios.post('/student/login/forgotPassword/resetPassword', {newPassword, confirmPassword}).then(res=>{
                
                console.log(res.data)
            }).catch(err=>{
                console.log(err);
            })
        }else{

            let wrapper=this.modalWrapper.current;

            let wrapperClass=wrapper.getAttribute('class');

            wrapper.classList.remove(wrapperClass);
            wrapper.classList.add('modal-show')
      
            this.setState({
                modalIsOpen:!this.state.modalIsOpen
            });
        }

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
                    {
                        this.state.blankField?<Modal message={`Enter your passwords`} ref={this.modalWrapper} closeOnClickingOnButton={this.closeOnClickingOnButton} 
                        closeOnClickingOutsideModal={this.closeOnClickingOutsideModal} />:<Modal message={`Passwords do not match`} ref={this.modalWrapper} closeOnClickingOnButton={this.closeOnClickingOnButton} 
                        closeOnClickingOutsideModal={this.closeOnClickingOutsideModal} />
                    }
                </div>
            </React.Fragment>
        )
    }
}
export default Changepassword;