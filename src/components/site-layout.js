import React from 'react';
import './site-layout.css'

class Header extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return(
            <React.Fragment>
                <div className={this.props.className}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

class SidebarArea extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <React.Fragment>
                <div className={this.props.className}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

class ContentArea extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return(
            <React.Fragment>
                <div className={this.props.className}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

class Wrapper extends React.Component{

    constructor(props){
        
        super(props);
    }

    render(){

        return(
            <React.Fragment>
                <div className={this.props.className}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

class Mainlayout extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export{
    Header,
    Wrapper,
    SidebarArea,
    ContentArea
}

export default Mainlayout