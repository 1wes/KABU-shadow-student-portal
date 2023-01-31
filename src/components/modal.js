import React from 'react';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component{

    render(){

        return(
            <React.Fragment>
                <div className='modal-container'>  
                    <div className='modal'>
                        <div className='warning-modal'>
                            <div className='modal-contents'>
                                <div className='warning-icon'>
                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                </div>
                                <div className='warning-header'> 
                                    Warning
                                </div>
                                <div className='warning-message'>
                                    {this.props.message}
                                </div>
                                <button className='generic-close-button'>
                                    ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Modal 