import React from 'react';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component{

    constructor(props){

        super(props);

        this.hideModal=this.hideModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
    }

    hideModal=()=>{
        let modalWrapper=document.getElementById('main-wrapper');

        modalWrapper.style.display='none';
    }

    closeModal=event=>{

        let modalWrapper=document.getElementById('main-wrapper');

        let modalContainer=document.getElementById('modal-container');

        if(event.target===modalContainer){
            modalWrapper.style.display='none'
        }
    }

    render(){

        return(
            <React.Fragment>
                <div className='modal-wrapper' id='main-wrapper' >  
                    <div className='modal' id='modal-container' onClick={this.closeModal}>
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
                                <button type='button ' className='generic-close-button' onClick={this.hideModal}>
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