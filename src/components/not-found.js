import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

let RedirectButton=(props)=>{

    return(
        <React.Fragment>
            <Link to={'/'}>
                <button type='button' className='not-found-btn'>
                    {props.buttonMessage} <span>
                        <i>
                            <FontAwesomeIcon  icon={faArrowRightLong} /> 
                        </i>
                    </span>
                </button>
            </Link>
        </React.Fragment>
    )
}

class NotFound extends React.Component{

    render(){

        return(
            <React.Fragment>
                <div className='not-found-wrapper'>
                    <div className='page-content'>
                        <div className='header'>
                            <img src={require('../kaba-name.png')} alt='Kabarak-logo' />
                        </div>

                        <div className='body-content'>
                            <div className='decoration'>
                                
                            </div>
                            <div className='main-text'>
                                <p>Page Not Found !!!</p>

                                <div className='redirect-button'>
                                    <RedirectButton buttonMessage='Take me back to Login page' />
                                </div>
                            </div>

                            <div className='error-code-image'>
                                <img src={require('../404.png')} />
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default NotFound;