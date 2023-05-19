import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsDownToLine, faBed, faCloudArrowDown, faCodePullRequest, faFolderMinus, faGear, faNoteSticky, faRegistered, faSterlingSign, faUser, faYenSign } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <React.Fragment>
                <div className='sidebar-content'>
                    <div className='sidebar-menu-title' id='dashboard-title'>
                        <label>
                            Dashboard
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faUser} />
                            </i>
                            <span className='sidebar-menu-item'>Personal Profile</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-title' id='academics-title'>
                        <label>
                            Academics
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faRegistered} />
                            </i>
                            <span className='sidebar-menu-item'>Course Registration</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faCodePullRequest} />
                            </i>
                            <span className='sidebar-menu-item'>Academic Requistion</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faNoteSticky} />
                            </i>
                            <span className='sidebar-menu-item'>Course Evaluation</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-title' id='financials-title'>
                        <label>
                            Financials
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faYenSign}  />
                            </i>
                            <span className='sidebar-menu-item'>Fee Statement</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faFolderMinus}  />
                            </i>
                            <span className='sidebar-menu-item'>Receipts</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faSterlingSign}  />
                            </i>
                            <span className='sidebar-menu-item'>Fee Structure</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faYenSign}  />
                            </i>
                            <span className='sidebar-menu-item'>Legacy Statement</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-title' id='accomodation-title'>
                        <label>
                            Accomodation
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faBed}  />
                            </i>
                            <span className='sidebar-menu-item'>Hostel Booking</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-title' id='examination-title'>
                        <label>
                            Examination
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faArrowsDownToLine}  />
                            </i>
                            <span className='sidebar-menu-item'>Exam Card</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faCloudArrowDown}  />
                            </i>
                            <span className='sidebar-menu-item'>Transcript</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-title' id='settings-title'>
                        <label>
                            Settings
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faGear}  />
                            </i>
                            <span className='sidebar-menu-item'>Settings</span>
                        </li>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Sidebar;