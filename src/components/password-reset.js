import React from 'react';
import './password-reset.css';
import {Link} from 'react-router-dom';

function Centeredsegment(props){

    return(
        <React.Fragment>
            <div className='centred-segment'>
                {props.children}
            </div>
        </React.Fragment>
    )
}


function Contentsegment(props){

    return(
        <React.Fragment>
            <div className='content-segment'>
                {props.children}
            </div>
        </React.Fragment>
    )
}

function Logobanner(props){

    return(
        <React.Fragment>
            <div className='logo-banner'>
                {props.children}
            </div>
        </React.Fragment>
    )
}

function Resetpasswordform(props){

    return(
        <React.Fragment>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    )
}

function SubmitButton(props){

    return(
        <React.Fragment>
            <div className='submit-btn'>
                <button className='reg-submit-btn' type='submit' value='Submit'>
                    {props.text}
                </button>
            </div>
        </React.Fragment>
    )
}

function Resetform(props){

    return(
        <React.Fragment>
            <form className='reset-form'> 
                <label>
                    Reg. Number
                </label>
                
                <div className='reg-no'>
                    <input type='text' placeholder='Reg. Number' >
                    </input>
                </div>

                <SubmitButton text='Reset password' />

                <div className='homepage-login'>
                    <span><Link id='back-to-homepage' to="/">Login</Link></span>
                </div>

            </form>
        </React.Fragment>
    )
}

class Resetpassword extends React.Component{

    constructor(props){
        super(props);

        this.state={
            
        }
    }

    render(){

        return(
            <React.Fragment>
            <div className='password-reset'>
                <Centeredsegment>
                    <Contentsegment>
                        <Logobanner>
                            <div className='kabarak-logo'>
                                <img className='name' src={require('../kaba-name.png')} />
                            </div>
                        </Logobanner>

                        <hr />

                        <Resetpasswordform>
                            <Resetform />
                        </Resetpasswordform>
                    </Contentsegment>
                </Centeredsegment>
            </div>
            </React.Fragment>
        )
    }
}

export default Resetpassword;