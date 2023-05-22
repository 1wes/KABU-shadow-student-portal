import React from 'react';
import './navbar.css';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBars, faChevronDown, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from '../baseUrl';
import checkToken from '../utils/checkCookie';

class Navbar extends React.Component{

    constructor(props){

        super(props);

        this.state={
            logout:false
        }

        this.collapseSidebar=this.collapseSidebar.bind(this);
        this.collapseNav=React.createRef();
        this.profileDropdown=React.createRef();
        this.toggleProfileDropdown=this.toggleProfileDropdown.bind(this);
        this.logoutUser=this.logoutUser.bind(this);
    }

    collapseSidebar=()=>{
        let collapsableNav=this.collapseNav.current;
        let navMenu=document.getElementById('nav-menu');
        let sidebar=document.getElementById('sidebar-area');
        let contentSection=document.getElementById('content-area');
        let sidebarItemTitle=document.getElementsByClassName('sidebar-menu-title');
        let sidebarMenuItem=document.getElementsByClassName('sidebar-menu-item');
        let minimizedSidebar=document.getElementById('sidebar')

        collapsableNav.classList.toggle('min-collapsable-nav');
        navMenu.classList.toggle('max-navbar-menu');
        sidebar.classList.toggle('min-sidebar-section');
        contentSection.classList.toggle('max-content-section');
        minimizedSidebar.classList.toggle('min-sidebar-content');
        
        for(let i=0; i<sidebarItemTitle.length; i++){
            sidebarItemTitle[i].classList.toggle('hide-sidebar-menu-title');
        }

        for(let i=0; i<sidebarMenuItem.length; i++){
            sidebarMenuItem[i].classList.toggle('hide-sidebar-menu-item');
        }
    }

    toggleProfileDropdown=()=>{

        let profileDropdownMenu=this.profileDropdown.current;

        profileDropdownMenu.classList.toggle('show-profile-dropdown');

    }

    componentDidMount=async()=>{

        await checkToken().then(res=>{
            this.setState({
                logout:false
            })
        }).catch(err=>{
            this.setState({
                logout:true
            })
        })
    }

    logoutUser=()=>{
        axios.get('/student/logout', {withCredentials:true}).then(res=>{
            if(res.data=='OK'){
                this.setState({
                    logout:true
                })
            }
        }).catch(err=>{
            this.setState({
                logout:true
            })
        })
    }

    render(){

        let {logout}=this.state;

        return(
            <React.Fragment>
                {
                    logout &&(<Navigate to={'/'} />)
                }

                <nav id='navbar'>
                    <div className='collapsable-nav' ref={this.collapseNav}>
                        <Link to={'#'}>
                            <img src={require('../kaba-name.png')} alt='Kabarak Logo' id='kaba-logo' />
                        </Link>
                    </div>

                    <div className='navbar-menu' id='nav-menu' >
                        <div className='navbar-menu-content'>
                            <div className='hamburger-menu'>
                                <FontAwesomeIcon icon={faBars} className='fa-bars' onClick={this.collapseSidebar} />
                            </div>

                            <div className='search-bar-and-profile'>
                                <div className='search-bar'>
                                    <input type='text' placeholder='Search...'></input>

                                    <i className='search-icon'>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </i>
                                </div>

                                <div className='profile' onClick={this.toggleProfileDropdown}>
                                    <div className='profile-picture'>
                                        <img src={require('../profile.png')} alt='Person Avatar' />
                                    </div>

                                    <span className='username'>
                                        {this.props.loggedInUser}
                                    </span>

                                    <span className='profile-menu-dropdown-icon'>
                                        <i>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </i>
                                    </span>

                                    <div className='profile-dropdown' ref={this.profileDropdown} >
                                        <div className='profile-dropdown-content'>
                                            <li className='profile-link'>
                                                <i>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </i>

                                                <span>Profile</span>
                                            </li>
                                            <li className='logout-link' onClick={this.logoutUser}>
                                                <i>
                                                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                                </i>
                                                <span>Logout</span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar;