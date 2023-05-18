import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <React.Fragment>
                <div className='sidebar-content'>
                    <div className='sidebar-content-title' id='dashboard-title'>
                        <label>
                            Dashboard
                        </label>

                        <li>

                            <i>
                                <FontAwesomeIcon icon={faUser} />
                            </i>
                            Personal Profile
                        </li>
                    </div>

                    <div className='sidebar-content-title' id='academics-title'>
                        <label>
                            Academics
                        </label>

                        <li>
                            Course Registration
                        </li>
                    </div>

                    <div className='sidebar-content-title' id='financials-title'>
                        <label>
                            Financials
                        </label>

                        <li>
                            Fee statement
                        </li>
                    </div>

                    <div className='sidebar-content-title' id='accomodation-title'>
                        <label>
                            Accomodation
                        </label>

                        <li>
                            Hostel Booking
                        </li>
                    </div>

                    <div className='sidebar-content-title' id='examination-title'>
                        <label>
                            Examination
                        </label>

                        <li>
                            Exam Card
                        </li>
                    </div>

                    <div className='sidebar-content-title' id='settings-title'>
                        <label>
                            Settings
                        </label>

                        <li>
                            Change Password
                        </li>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}
export default Sidebar;