import React from 'react';
import {Link} from 'react-router-dom';
import {Centeredsegment, Contentsegment, Logobanner, SubmitButton, Footnote} from './forgot-password';
import './reset-password.css';

let submitMessage=`Change Password`;

class EnterNewPasswordForm extends React.Component{

    render(){

        return(
            <React.Fragment>
                <form className='change-password-form'>
                    <label>
                        Enter New Password
                    </label>

                    <div className='new-password'>
                        <input type='text' placeholder='Enter New Password' onChange={this.handleNewPassword}></input>
                    </div>

                    <label>
                        Repeat Your Password
                    </label>

                    <div className='repeat-password'>
                        <input type='text' placeholder='Repeat Your Password' onChange={this.handleRepeatPassword}></input>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

class Changepassword extends React.Component{

    render(){

        return(
            <React.Fragment>
                <div className='change-password'>
                    <Centeredsegment>
                        <Contentsegment>
                            <Logobanner/>
                            <hr/>
                            <EnterNewPasswordForm/>

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