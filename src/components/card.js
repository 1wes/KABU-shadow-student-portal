import React from "react";
import './card.css';

class Card extends React.Component{

    render(){

        return(
            <React.Fragment>
                <div className="general-card">
                    <div className="card-title">
                        {this.props.cardTitle}
                    </div>
                    <div className="card-content">

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default Card;