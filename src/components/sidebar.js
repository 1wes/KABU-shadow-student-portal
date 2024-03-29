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
                <div className='sidebar-content' id='sidebar'>
                    <div className='sidebar-menu-category' id='menu-title'>
                        <label className='sidebar-menu-title'>
                            Dashboard
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faUser} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Personal Profile</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-category' id='academics-title'>
                        <label className='sidebar-menu-title'>
                            Academics
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faRegistered} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Course Registration</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faCodePullRequest} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Academic Requistion</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faNoteSticky} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Course Evaluation</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-category' id='financials-title'>
                        <label className='sidebar-menu-title'>
                            Financials
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faYenSign} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Fee Statement</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faFolderMinus} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Receipts</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faSterlingSign} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Fee Structure</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faYenSign} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Legacy Statement</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-category' id='accomodation-title'>
                        <label className='sidebar-menu-title'>
                            Accomodation
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faBed} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Hostel Booking</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-category' id='examination-title'>
                        <label className='sidebar-menu-title'>
                            Examination
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faArrowsDownToLine} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Exam Card</span>
                        </li>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faCloudArrowDown} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Transcript</span>
                        </li>
                    </div>

                    <div className='sidebar-menu-category' id='settings-title'>
                        <label className='sidebar-menu-title'>
                            Settings
                        </label>

                        <li>
                            <i>
                                <FontAwesomeIcon icon={faGear} fixedWidth />
                            </i>
                            <span className='sidebar-menu-item'>Change Password</span>
                        </li>
                    </div>
                </div>

                <div className='sidebar-footer'>
                </div>
            </React.Fragment>
        )
    }
}
export default Sidebar;