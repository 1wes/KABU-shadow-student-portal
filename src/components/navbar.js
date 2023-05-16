import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component{

    constructor(props){

        super(props);

        this.collapseSidebar=this.collapseSidebar.bind(this);
        this.collapseNav=React.createRef();
    }

    collapseSidebar=()=>{
        let collapsableNav=this.collapseNav.current;

        

    }

    render(){

        return(
            <React.Fragment>
                <nav>
                    <div className='collapsable-nav' ref={this.collapseNav}>
                        <Link to={'#'}>
                            <img src={require('../kaba-name.png')} alt='Kabarak Logo' />
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

                                <div className='profile'>
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