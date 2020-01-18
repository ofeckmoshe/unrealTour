import React from "react";
import {apartments, cities} from "./apartments";
import {Fade, Form, Row, Col} from "react-bootstrap";
import {BedLi,MyUl,MyDiv,MyBtn} from "./Styles";

let newApartments = apartments;
class RoomsFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            roomSelect:false,
            rooms:null
        }
    };
    setRooms = (e) =>{
        const val = e.target.innerHTML[0];
        this.props.getRooms(val);
    };
    openRooms = () =>{
        this.props.roomTog(!this.props.roomSelect);
        this.props.priceTog(false);
        this.props.bedsTog(false);
    };

    render() {
        return(
            <div style={{paddingTop:"15px"}}>
                <MyBtn onClick={()=>{this.openRooms()}}>Rooms <i
                    className="fa fa-home"></i></MyBtn>
                {this.props.roomSelect &&<MyDiv>
                    <h3>Rooms</h3>
                    <MyUl>
                        <Row>
                            <BedLi onClick={this.setRooms}>Any</BedLi>
                            <BedLi onClick={this.setRooms}>1+</BedLi>
                            <BedLi onClick={this.setRooms}>2+</BedLi>
                            <BedLi onClick={this.setRooms}>3+</BedLi>
                            <BedLi onClick={this.setRooms}>4+</BedLi>
                            <BedLi onClick={this.setRooms}>5+</BedLi>
                        </Row>
                    </MyUl>
                </MyDiv>}
            </div>
        )
    }
}

export default RoomsFilter;