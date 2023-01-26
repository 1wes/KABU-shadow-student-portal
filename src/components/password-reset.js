import React from 'react';
import './password-reset.css';

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
                                <div className='reset-page-logo'>
                                    <img src={require('../kabulogo-removebg-preview.png')} alt='KABU-logo'/>
                                </div>

                                <div className='name'>
                                    University name
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