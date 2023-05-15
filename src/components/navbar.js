import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return(
            <React.Fragment>
                <nav>
                    <div className='collapsable-nav'>
                        <Link to={'#'}>
                            <img src={require('../kaba-name.png')} />
                        </Link>
                    </div>

                    <div className='navbar-menu'>
                        <div className='navbar-menu-content'>
                            <div className='hamburger-menu'>
                                <FontAwesomeIcon icon={faBars} className='fa-bars' />
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar;