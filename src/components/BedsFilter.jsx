import React from "react";
import {apartments, cities} from "./apartments";
import {Fade, Form, Row, Col} from "react-bootstrap";
import {BedLi,MyUl,MyDiv,MyBtn} from "./Styles";

let newApartments = apartments;

class BedsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beds:null
        }
    }
    setBeds = (e) =>{
        const val = e.target.innerHTML[0];
        this.props.getBeds(val);
    };
    openBeds = () =>{
        this.props.bedsTog(!this.props.bedSelect);
        this.props.priceTog(false);
        this.props.roomTog(false);
    };


    render() {
        return(
            <div style={{paddingTop:"15px"}}>
                <MyBtn onClick={()=>{this.openBeds()}}>Beds <i
                    className="fa fa-bed"></i></MyBtn>
                {this.props.bedSelect &&<MyDiv>
                    <h3>Bedrooms</h3>
                    <MyUl>
                        <Row>
                        <BedLi onClick={this.setBeds}>Any</BedLi>
                        <BedLi onClick={this.setBeds}>1+</BedLi>
                        <BedLi onClick={this.setBeds}>2+</BedLi>
                        <BedLi onClick={this.setBeds}>3+</BedLi>
                        <BedLi onClick={this.setBeds}>4+</BedLi>
                        <BedLi onClick={this.setBeds}>5+</BedLi>
                        </Row>
                    </MyUl>
                </MyDiv>}
            </div>
        )
    }
}

export default BedsFilter;