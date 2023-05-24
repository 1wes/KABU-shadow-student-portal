import React from "react";
import './card.css';

let GenericButton=(props)=>{

    return(
        <button className="generic-btn" id={props.id}>
            <span className="generic-btn-msg">{props.btnMessage}</span>
        </button>
    )
}

let Card=(props)=>{

    return(
        <React.Fragment>
            <div className="general-card">
                <div className="card-title">
                    {props.cardTitle}
                </div>

                {props.children}
            </div>
        </React.Fragment>
    )
}

let CardContent=(props)=>{

    return(
        <React.Fragment>
            <div className="card-content">
                {props.children}
            </div>
        </React.Fragment>
    )
}

let InfoSection=(props)=>{

    return(
        <React.Fragment>
            <div className="info-section" id={props.id}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

let ImageSection=(props)=>{

    return(
        <React.Fragment>
            <div className="image-section">
                {props.children}
            </div>
        </React.Fragment>
    )
}

let BioinfoSection=(props)=>{

    return(

        <React.Fragment>
            <div className="bioinfo-section">
                {props.children}
            </div>
        </React.Fragment>
    )
}

let BioinfoSection2=(props)=>{

    return(
        <React.Fragment>
            <div className="bioinfo-section2">
                {props.children}
            </div>
        </React.Fragment>
    )
}

let BioinfoSection3=(props)=>{

    return(
        <React.Fragment>
            <div className="bioinfo-section3">
                {props.children}
            </div>
        </React.Fragment>
    )
}

let TokenSection=(props)=>{

    return(
        <React.Fragment>
            <div className="token-section">
                <span>
                    {props.children}
                </span>
            </div>
        </React.Fragment>
    )
}

let CalendarSection=(props)=>{

    return(
        <React.Fragment>
            <div className="calendar-section">
                <span>
                    <div>
                        {props.children}
                    </div>
                </span>
            </div>
        </React.Fragment>
    )
}

let AcademicAndFeesInfo=(props)=>{

    return(

        <React.Fragment>
            <div className="acad-and-fee">
                {props.children}
            </div>
        </React.Fragment>
    )
}

let ImportantDocument=(props)=>{

    return(
        <React.Fragment>
            <div className="documents-section">
                {props.children}
            </div>
        </React.Fragment>
    )
}

let DocumentsTable=(props)=>{

    return(
        <React.Fragment>
            <table>
                <tr className="table-headers">
                    <th>
                        #
                    </th>
                    <th>
                        File Name
                    </th>
                    <th>
                        Remarks
                    </th>
                    <th>
                        Action
                    </th>
                </tr>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Memo</td>
                        <td>None</td>
                        <td>Check</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Memo</td>
                        <td>None</td>
                        <td>Check</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Memo</td>
                        <td>None</td>
                        <td>Check</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Memo</td>
                        <td>None</td>
                        <td>Check</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

class StudentInfo extends React.Component{

    render(){

        return(
            <React.Fragment>
                <Card cardTitle={'Basic Information'}>
                    <CardContent>
                        <InfoSection>
                            <ImageSection>
                                <img src={require('../profile.png')} alt="image-placeholder" />
                            </ImageSection>
                            <BioinfoSection>
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
                            </BioinfoSection>
                            <BioinfoSection2>
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
                            </BioinfoSection2>
                            <BioinfoSection3>
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
                            </BioinfoSection3>
                        </InfoSection>

                        <InfoSection id='token-and-calendar'>
                            <ImageSection />
                            <TokenSection>
                                <div id="token-details">
                                    <div>
                                        <GenericButton btnMessage='Get Catering Token' id='generic-token-btn'/>
                                    </div>
                                    <div className="token-label">
                                        Current Catering Token:
                                    </div>

                                    <div>
                                        {this.props.cateringToken}
                                    </div>
                                </div>
                            </TokenSection>
                            <CalendarSection>
                                <div>
                                    <GenericButton btnMessage='Get Academic Calendar' id='generic-calendar-btn' />
                                </div>
                            </CalendarSection>
                            <BioinfoSection3/>
                        </InfoSection>
                    </CardContent>
                </Card>

                <AcademicAndFeesInfo>
                    <div className="academic-info">
                        <Card cardTitle='Academic Information'>
                            <CardContent>
                                <InfoSection>
                                    <span className="key" id="acad-fee-info-key">
                                        <li>
                                            Current Programme
                                        </li>
                                        <li>
                                            Attempted Units
                                        </li>
                                        <li>
                                            Registered Units
                                        </li>
                                    </span>
                                    <span className="value" id="acad-fee-info-value">
                                        <li>
                                            {this.props.currentProgramme}
                                        </li>
                                        <li>
                                            {this.props.attemptedUnits}
                                        </li>
                                        <li>
                                            {this.props.registeredUnits}
                                        </li>   
                                    </span>
                                </InfoSection>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="fees-info">
                        <Card cardTitle='Fee Payment'>
                            <CardContent>
                                <InfoSection>
                                    <span className="key" id="acad-fee-info-key">
                                        <li>
                                            Total Billed
                                        </li>
                                        <li>
                                            Total Paid
                                        </li>
                                        <li>
                                            Fee Balance
                                        </li>
                                    </span>
                                    <span className="value" id="acad-fee-info-value">
                                        <li>
                                            {this.props.totalBilled}
                                        </li>
                                        <li>
                                            {this.props.totalPaid}
                                        </li>
                                        <li>
                                            {this.props.balance}
                                        </li>   
                                    </span>
                                </InfoSection>
                            </CardContent>
                        </Card>
                    </div>
                </AcademicAndFeesInfo>

                <ImportantDocument>
                    <Card cardTitle='Important Documents'>
                        <CardContent>
                            <InfoSection>
                                <DocumentsTable>
                                    
                                </DocumentsTable>
                            </InfoSection>
                        </CardContent>
                    </Card>
                </ImportantDocument>
            </React.Fragment>
        )
    }
}
export default StudentInfo;