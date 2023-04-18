import React from 'react';
import './password-reset.css';
import {Link, json} from 'react-router-dom';
import Footnote from './footnote';
import Modal from './modal';
import axios from '../baseUrl';


let warningMessage="Enter Registration Number";
let infoMessage="Reset link has been sent to "

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

function Logobanner(){

    return(
        <React.Fragment>
            <div className='logo-banner'>
                <div className='kabarak-logo'>
                    <img className='name' src={require('../kaba-name.png')} alt='kabarak-university-logo-&-name' />
                </div>
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

        this.submitForm=this.submitForm.bind(this);
    }

    submitForm=(e)=>{
        this.props.submitForm(e);
    }

    render(){

        return(
            <React.Fragment>
                <div className='submit-btn'>
                    <button className='reg-submit-btn' type='submit' value='Submit' onClick={this.submitForm}>
                        {this.props.buttonMessage}
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
        this.submitForm=this.submitForm.bind(this)
    }

    handleRegChange=event=>{
        this.props.handleRegChange(event.target.value)
    }

    submitForm=(e)=>{
        this.props.submitForm(e)
    }

    render(){

        let submitBtnMessage='Reset password'
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

                    <SubmitButton text='Reset password' buttonMessage={submitBtnMessage} submitForm={this.submitForm}/>

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
            reg_no:'',
            valid:false, 
            modalIsOpen:false,
            email:''
        }

        this.handleRegChange=this.handleRegChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
        this.closeOnClickingOnButton=this.closeOnClickingOnButton.bind(this);
        this.closeOnClickingOutsideModal=this.closeOnClickingOutsideModal.bind(this);
        this.modalWrapper=React.createRef();
    }

    handleRegChange=new_reg_no=>{

        if(new_reg_no!==''){
            this.setState({
                reg_no:new_reg_no,
                valid:true
            })
        }else{
            this.setState({
                reg_no:'',
                valid:false
            })
        }
    }

    submitForm=e=>{
        e.preventDefault();

        let {valid, modalIsOpen, reg_no}=this.state;

        let wrapper=this.modalWrapper.current

        if(valid){
            let regData={
                reg:reg_no
            }

            axios.post('/student/forgotPassword', regData).then(res=>{

                this.setState({
                    email:JSON.stringify(res.data)
                })

                let wrapperClass=wrapper.getAttribute('class');

                wrapper.classList.remove(wrapperClass);
                wrapper.classList.add('modal-show')
    
                this.setState({
                    modalIsOpen:!this.state.modalIsOpen
                })

            }).catch(err=>{
                console.log(err)
            })

        }else if(!valid&&!modalIsOpen){
            let wrapperClass=wrapper.getAttribute('class');

            wrapper.classList.remove(wrapperClass);
            wrapper.classList.add('modal-show')

            this.setState({
                modalIsOpen:!this.state.modalIsOpen
            })
        }
    }

    closeOnClickingOnButton=e=>{

        e.preventDefault();

        if(this.state.modalIsOpen){
            let wrapper=this.modalWrapper.current

            let wrapperClass=wrapper.getAttribute('class');
    
            wrapper.classList.remove(wrapperClass);
            wrapper.classList.add('modal-wrapper')

            this.setState({
                modalIsOpen:!this.state.modalIsOpen
            })
        }
    }

    closeOnClickingOutsideModal=()=>{

        let wrapper=this.modalWrapper.current

        if(this.state.modalIsOpen){
            let wrapperClass=wrapper.getAttribute('class');

            wrapper.classList.remove(wrapperClass);
            wrapper.classList.add('modal-wrapper')

            this.setState({
                modalIsOpen:!this.state.modalIsOpen
            })
        }



    }

    render(){

        return(
            <React.Fragment>
            <div className='password-reset'>
                <Centeredsegment>
                    <Contentsegment>
                        <Logobanner/>
                        <hr />

                        <Resetpasswordform>
                            <Resetform handleRegChange={this.handleRegChange} submitForm={this.submitForm}/>
                        </Resetpasswordform>
                    </Contentsegment>
                </Centeredsegment>

                <Footnote/>
                {
                    this.state.email===''?<Modal message={warningMessage} ref={this.modalWrapper} closeOnClickingOnButton={this.closeOnClickingOnButton} 
                    closeOnClickingOutsideModal={this.closeOnClickingOutsideModal} />:<Modal message={`${infoMessage} ${this.state.email}`} ref={this.modalWrapper} 
                    closeOnClickingOnButton={this.closeOnClickingOnButton} closeOnClickingOutsideModal={this.closeOnClickingOutsideModal} /> 
                }
            </div>
            </React.Fragment>
        )
    }
}


export{
    Centeredsegment,
    Contentsegment,
    Logobanner,
    SubmitButton,
    Footnote
}

export default Resetpassword;