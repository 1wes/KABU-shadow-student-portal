import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

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
                        Am the menu
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar;