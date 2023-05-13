import React from 'react';
import Mainlayout from './site-layout';

class Dashboard extends React.Component{

    constructor(props){

        super(props);
    }

    render(){
        
        return(

            <React.Fragment>
                <Mainlayout/>
            </React.Fragment>
        )
    }
}
export default Dashboard;