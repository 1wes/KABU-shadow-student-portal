import React from 'react';
import './password-reset.css';
import {Link} from 'react-router-dom';
import Footnote from './footnote';
import Modal from './modal';

let warningMessage="Enter Registration Number"

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

class SubmitButton extends React.Component{

    constructor(props){
        super(props);

        this.validateForm=this.validateForm.bind(this);
    }

    validateForm=e=>{
        this.props.validateForm(e);
    }

    render(){

        return(
            <React.Fragment>
                <div className='submit-btn'>
                    <button className='reg-submit-btn' type='submit' value='Submit' onClick={this.validateForm}>
                        {this.props.text}
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

class Resetform extends React.Component{

    constructor(props){
        super(props);

        this.handleRegChange=this.handleRegChange.bind(this);
    }

    handleRegChange=event=>{
        this.props.handleRegChange(event.target.value)
    }

    render(){


        return(
            <React.Fragment>
                <form className='reset-form'> 
                    <label>
                        Reg. Number
                    </label>
                
                    <div className='reg-no'>
                        <input type='text' placeholder='Reg. Number' value={this.props.reg_no} onChange={this.handleRegChange}>
                        </input>
                    </div>

                    <SubmitButton text='Reset password'/>

                    <div className='homepage-login'>
                        <span><Link id='back-to-homepage' to="/">Login</Link></span>
                    </div>
                </form>
            </React.Fragment>
        )
    }

}

class Resetpassword extends React.Component{

    constructor(props){
        super(props);

        this.state={
            reset_reg_no:''
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
                                <img className='name' src={require('../kaba-name.png')} alt='kabarak-university-logo-&-name' />
                            </div>
                        </Logobanner>

                        <hr />

                        <Resetpasswordform>
                            <Resetform value={this.state.reset_reg_no} />
                        </Resetpasswordform>
                    </Contentsegment>
                </Centeredsegment>

                <Footnote/>
                <Modal message={warningMessage} />
            </div>
            </React.Fragment>
        )
    }
}


export{
    Centeredsegment,
    Contentsegment,
    Logobanner,
    SubmitButton
}

export default Resetpassword;