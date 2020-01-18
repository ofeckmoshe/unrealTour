import React from "react";
import {Container} from "react-bootstrap";
import {Deat,DeatVal,DeatBox} from './Styles'

class Detailes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <div style={{padding: '75px 0'}}>
                    <h5>What`s happening in San Francisco, CA</h5>
                    <DeatBox className="row justify-content-center" style={{textDecoration: 'none'}}>
                        <div className="col-6 col-md-2" style={{padding: '25px 45px',textAlign: 'center'}}>
                            <Deat>1228</Deat>
                            <DeatVal>Homes for sale</DeatVal>
                        </div>
                        <div className="col-6 col-md-2" style={{padding: '25px 45px',textAlign: 'center'}}>
                            <Deat>978</Deat>
                            <DeatVal>Open houses</DeatVal>
                        </div>
                        <div className="col-6 col-md-2" style={{padding: '25px 45px',textAlign: 'center'}}>
                            <Deat>4286</Deat>
                            <DeatVal>Recently sold</DeatVal>
                        </div>
                        <div className="col-6 col-md-2" style={{padding: '25px 45px',textAlign: 'center'}}>
                            <Deat>13</Deat>
                            <DeatVal>Foreclosures</DeatVal>
                        </div>
                        <div className="col-6 col-md-2" style={{padding: '25px 45px',textAlign: 'center'}}>
                            <Deat>945</Deat>
                            <DeatVal>Price reduced</DeatVal>
                        </div>
                    </DeatBox>
                </div>
            </Container>
        );
    };
};
export default Detailes