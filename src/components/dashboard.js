import React from 'react';
import Mainlayout, { Header, Wrapper, ContentArea, SidebarArea } from './site-layout';
import Navbar from './navbar';
import './dashboard.css';
import axios from 'axios';
import Sidebar from './sidebar';
import StudentInfo from './card';
import Footnote from './footnote';
import Currentyear from './current-year';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

let DashboardPageTitle=()=>{

    return(
        <React.Fragment>
            <div className='dashboard-page-title'>
                Dashboard
            </div>
        </React.Fragment>
    )
}

let DashboardFooter=()=>{

    return(
        <React.Fragment>
            <div className='dashboard-footer'>
                <div className='divider'>

                </div>
                <div className='dashboard-footnote'>
                    <span><Currentyear/></span><span><FontAwesomeIcon icon={faCopyright}/></span><span>Designed </span><span>by</span><span>Wes</span>
                </div>
            </div>
        </React.Fragment>
    )
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
                            <StudentInfo name={loggedInUser} gender={gender} idNo={idNo} 
                            regNo={regNo} address={address} email={email} dob={dob} campus={campus} />

                            <DashboardFooter/>
                        </ContentArea>
                    </Wrapper>
                </Mainlayout>
            </React.Fragment>
        )
    }
}
export default Dashboard;