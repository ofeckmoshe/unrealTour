import React from 'react';
import "./Gallery.css";
import {cities} from "./apartments";
import {Link} from "react-router-dom";

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            order:this.props.order,
        }
    }
    changeCardSize = ()=>{
        if(this.state.order === "row"){
            return "100%";
        }else {
            return "700px"
        }
    };
    render(){
        const {title, main_image, price, address, number_of_bath,number_of_room,sqft,city_name,city_id,id,order,sale_status,created_on} = this.props;
        const sqftText = sqft && `sqft: ${sqft}`;

        return(
            <div className={`${order === 'row' ? "col-lg-3 col-md-6 col-sm-10 col-xs-12 d-flex justify-content-center":'col-10'}`}>
                <Link to={`/apartment/${id}`} className={"apartmentCard"} style={{width:"100%"}}>
                    <div className="card" style={{boxShadow: "rgba(0,0,0,0.5) 0px 5px 15px", margin:"0!important",minHeight:"370px"}}>
                        <div style={{height:`${order === "row"?"200px":"400px"}`,position:'relative'}}>
                            <img src = {"http://localhost:5000/"+main_image} className={"card-img-top cardImage"} style={{height:"100%"}}/>
                            <h1 className={'price'}>${price/1000000}M</h1>
                        </div>
                        <h4 className={'title'}>{title}</h4>

                        <p>City: {city_name}</p>
                        <p>Address: {address} </p>
                        <p>Rent/Sell: {sale_status}</p>
                        <span>beds: {number_of_bath} rooms: {number_of_room} {sqftText}</span>
                        <i className={"heart fas fa-heart"}></i>
                        <span className={'greenSqr'}>{new Date(created_on).toLocaleDateString()}</span>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Gallery;