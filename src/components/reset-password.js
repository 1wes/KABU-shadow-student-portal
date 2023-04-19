import React from 'react';
import {Link} from 'react-router-dom';
import {Centeredsegment, Contentsegment, Logobanner, SubmitButton, Footnote} from './forgot-password';
import './reset-password.css';

class EnterNewPassword extends React.Component{

    render(){

        return(
            <React.Fragment>
                
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

                        
                        </Contentsegment>
                    </Centeredsegment>
                </div>
            </React.Fragment>
        )
    }
}
export default Changepassword;