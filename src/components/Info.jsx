import React from "react";
import "./Info.css";
import {Container, Row} from "react-bootstrap";
import {MergeDivs,MergeDivs2} from "./Styles";

class Info extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <Container>
                <Row>
                    <MergeDivs style={{backgroundImage:"url('https://na.rdcpix.com/1071828432/9a3271730f260df6a422720c22884a43w-c0xd-w685_h860_q80.jpg')"}}></MergeDivs>
                    <div className="info">
                        <h1>Need a home loan? Get pre-approved</h1>
                        <h2>Find a lender who can offer competitive mortgage rates and help you with pre-approval</h2>
                        <button>Get pre-approved now</button>
                    </div>
                </Row>
                <Row>
                    <div className="info2 d-md-block d-none">
                        <h1>Find Your Neighborhood</h1>
                        <h2>Does it have pet-friendly rentals? What are the crime rates? How are the schools? Get
                            important local information on the area you're most interested in.</h2>
                        <div className="form2">
                            <input type="text" name="Search" placeholder="Address, City or Zip"/>
                            <button>Search</button>
                        </div>
                    </div>
                    <MergeDivs style={{backgroundImage:"url('https://cdn.kinsights.com/cache/17/72/1772eea8221be1590cd07dbea9fb9b8f.jpg')"}}></MergeDivs>
                </Row>
            </Container>
        )
    }
}

export default Info