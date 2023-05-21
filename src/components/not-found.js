import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.css';

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
                            <b className='main-text'>
                                Page Not Found
                            </b>

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