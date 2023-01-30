import './footnote.css';
import React from 'react';
import Currentyear from './current-year';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footnote(props){

    return(
        <React.Fragment>
            <div className='footnote'>
                <div className='footnote-contents'>
                    <span className='current-year'><Currentyear/></span>
                    <span className='copyright'><FontAwesomeIcon icon={faCopyright} /></span>
                    <span className='designed-by'>Designed by</span>
                    <span className='link'>Wes</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footnote;