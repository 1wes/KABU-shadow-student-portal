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
                        <div className="info-section">
                            <div className="image-section">
                                <img src={require('../profile.png')} alt="image-placeholder" />
                            </div>

                            <div className="bioinfo-section">
                                <span className="key">
                                    <li>
                                        Reg. No
                                    </li>
                                    <li>
                                        Name
                                    </li>
                                    <li>
                                        ID No
                                    </li>
                                    <li>
                                        Gender
                                    </li>
                                </span>
                                <span className="value">
                                    <li>
                                        {this.props.regNo}
                                    </li>
                                    <li>
                                        {this.props.name}
                                    </li>
                                    <li>
                                        {this.props.idNo}
                                    </li>
                                    <li>
                                        {this.props.gender}
                                    </li>
                                </span>
                            </div>

                            <div className="bioinfo-section2">
                                <span className="key">

                                </span>
                                <span className="key">
                                    <li>
                                        Address
                                    </li>
                                    <li>
                                        Email
                                    </li>
                                    <li>
                                        Date of Birth
                                    </li>
                                    <li>
                                        Campus
                                    </li>
                                </span>
                            </div>

                            <div className="bioinfo-section3">
                                <span className="value">
                                    <li>
                                        {this.props.address}
                                    </li>
                                    <li>
                                        {this.props.email}
                                    </li>
                                    <li>
                                        {this.props.dob}
                                    </li>
                                    <li>
                                        {this.props.campus}
                                    </li>
                                </span>
                                <span className="value">

                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default Card;