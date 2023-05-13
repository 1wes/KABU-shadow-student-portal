import React from 'react';
import './site-layout.css'

class Header extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return(
            <React.Fragment>
                <div className='page-header'>
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
                <div className='sidebar'>
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
                <div className='content-area'>
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
                <Header>
                    Am the header
                </Header>

                <div className='section-separation'>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export{
    SidebarArea,
    ContentArea
}

export default Mainlayout