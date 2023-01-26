import React from 'react';
import './password-reset.css';
import {logo} from '../kabulogo-removebg-preview.png';

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
                                <div className='logo'>
                                    University logo
                                </div>

                                <div className='name'>
                                    uUniversity name
                                </div>
                            </div>
                        </Logobanner>

                        <hr />

                        <Resetpasswordform>
                            Reg.no form
                        </Resetpasswordform>
                    </Contentsegment>
                </Centeredsegment>
            </div>
            </React.Fragment>
        )
    }
}

export default Resetpassword;