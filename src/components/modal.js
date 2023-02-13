import React from 'react';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component{

    constructor(props){

        super(props);

        this.state={
            isOpen:false
        }

        this.closeOnClickingOutsidemodal=this.closeOnClickingOutsidemodal.bind(this);
        this.closeOnClickingOnButton=this.closeOnClickingOnButton.bind(this);
    }

    closeOnClickingOutsidemodal=()=>{
        this.props.closeOnClickingoutsidemodal();
    }

    closeOnClickingOnButton=(e)=>{
        this.props.closeOnClickingOnButton(e)
    }

    render(){

        return(
            <React.Fragment>
                <div className='modal-wrapper' id='main-wrapper' ref={this.props.modalWrapper} >  
                    <div className='modal' id='modal-container'  onClick={this.closeOnClickingOutsidemodal}>
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
                                <button type='button ' className='generic-close-button' onClick={this.closeOnClickingOnButton}>
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

export default React.forwardRef((props, ref)=>(
    <Modal {...props} modalWrapper={ref} />
))