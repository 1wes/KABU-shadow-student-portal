import React from 'react';
import Mainlayout, { Header, Wrapper, ContentArea, SidebarArea } from './site-layout';
import Navbar from './navbar';
import './dashboard.css';
import axios from 'axios';
import Sidebar from './sidebar';
import Card from './card';

let DashboardPageTitle=()=>{

    return(
        <React.Fragment>
            <div className='dashboard-page-title'>
                Dashboard
            </div>
        </React.Fragment>
    )
}

class BasicInfo extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return(
            <React.Fragment>
                <div>

                </div>
            </React.Fragment>
        )
    }
}


class Dashboard extends React.Component{

    constructor(props){

        super(props);

        this.state={
            loggedInUser:'',

        }
    }

    componentDidMount(){

        axios.get("/student/basicInfo", {withCredentials:true}).then(res=>{
            
            this.setState({
                loggedInUser:res.data.username,
                regNo:res.data.reg_no,
                idNo:res.data.id,
                gender:res.data.gender,
                address:res.data.address,
                email:res.data.email,
                dob:res.data.dob,
                campus:res.data.campus
            });

        }).catch(err=>{
            console.log(err);
        });
    }

    render(){

        let cardTitle='Basic Information';
        let{ loggedInUser,regNo, idNo, gender, address, email, dob, campus }=this.state;
        
        return(
            <React.Fragment>
                <Mainlayout>
                    <Header className='page-header'>
                        <Navbar loggedInUser={loggedInUser} />
                    </Header>

                    <Wrapper className='section-separation'>
                        <SidebarArea className='sidebar-section'>
                            <Sidebar/>
                        </SidebarArea>

                        <ContentArea className='content-section'>
                            <DashboardPageTitle />
                            <Card  cardTitle={cardTitle} name={loggedInUser} gender={gender} idNo={idNo} 
                            regNo={regNo} address={address} email={email} dob={dob} campus={campus} />
                        </ContentArea>
                    </Wrapper>
                </Mainlayout>
            </React.Fragment>
        )
    }
}
export default Dashboard;