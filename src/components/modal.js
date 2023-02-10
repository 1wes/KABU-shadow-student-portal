import React from 'react';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component{

    constructor(props){

        super(props);

        this.closeOnClickingOutsideModal=this.closeOnClickingOutsideModal.bind(this);
        this.closeOnClickingButton=this.closeOnClickingButton.bind(this);
        this.modalContainer=React.createRef();
        this.closeButton=React.createRef();
    }

    closeOnClickingOutsideModal=()=>{
        this.props.closeOnClickingOutsideModal
    }

    closeOnClickingButton=(event)=>{
        this.props.closeOnClickingButton(event);
    }

    render(){

        return(
            <React.Fragment>
                <div className='modal-wrapper' id='main-wrapper' >  
                    <div className='modal' id='modal-container' ref={this.modalContainer} onClick={this.closeOnClickingOutsideModal}>
                        <div className='warning-modal' id='alert-modal'>
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
                                <button type='button ' className='generic-close-button' ref={this.closeButton} onClick={this.closeOnClickingButton}>
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