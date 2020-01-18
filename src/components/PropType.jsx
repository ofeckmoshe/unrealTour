import React from "react";
import {apartments, cities} from "./apartments";
import {Form} from "react-bootstrap";
import {MyBtn} from "./Styles";

let newApartments = apartments;
 class PropType extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
            rent:false,
            sale:false
         }
     }
     setRent = () => {
         this.state.rent?this.setState({rent:null}):
         this.setState({rent:!this.state.rent});
         this.props.getRent(this.state.rent);
     };
     setSale = () => {
         this.state.sale?this.setState({sale:null}):
             this.setState({sale:!this.state.sale});
         this.props.getSale(this.state.sale);
     };
     render() {
         return (
             <div style={{paddingTop:"15px"}}>
                 <MyBtn onClick={() => this.setRent()}>Rent</MyBtn>
                 <MyBtn onClick={() => this.setSale()}>Sale</MyBtn>
             </div>
         )
     }
 }
//  style={{backgroundColor:`${!this.state.rent?'aliceblue':'red'}`}}
 export default PropType;