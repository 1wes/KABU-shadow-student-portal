import React from 'react';
import Mainlayout, { Header, Wrapper, ContentArea, SidebarArea } from './site-layout';
import Navbar from './navbar';
import './dashboard.css';
import axios from 'axios';

let DashboardPageTitle=()=>{

    return(
        <React.Fragment>
            <div className='dashboard-page-title'>
                Dashboard
            </div>
        </React.Fragment>
    )
}


class Dashboard extends React.Component{

    constructor(props){

        super(props);

        this.state={
            loggedInUser:''
        }
    }

    componentDidMount(){

        axios.get("/student/loginAuth").then(res=>{
            
            this.setState({
                loggedInUser:res.data.username
            });

        }).catch(err=>{
            console.log(err)
        });
    }

    render(){
        
        return(
            <React.Fragment>
                <Mainlayout>
                    <Header className='page-header'>
                        <Navbar loggedInUser={this.state.loggedInUser} />
                    </Header>

                    <Wrapper className='section-separation'>
                        <SidebarArea className='sidebar-section'>
                            Am the sidebar
                        </SidebarArea>

                        <ContentArea className='content-section'>
                            <DashboardPageTitle />
                        </ContentArea>
                    </Wrapper>
                </Mainlayout>
            </React.Fragment>
        )
    }
}
export default Dashboard;