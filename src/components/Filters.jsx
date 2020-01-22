import React from "react";
// import {getApartmentsFromServer} from "./apartments.js";
import {getCitiesFromServer} from "../api/controllers/cities";
import Gallery from "./Gallery";
import TextFilter from "./TextFilter";
import {Container, Row} from 'react-bootstrap';
import PriceFilter from "./PriceFilter";
import BedsFilter from "./BedsFilter";
import RoomsFilter from "./RoomsFilter";
import PropType from "./PropType";
import {FBtn} from "./Styles";
import {getApartmentsFromServer,getSingleApartment} from "../api/controllers/apartments"

class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newApartments:[],
            cities:[],
            filters:false,
            rent:null,
            sale:null,
            min:null,
            max:null,
            beds:null,
            rooms:null,
            priceSelect: false,
            roomSelect:false,
            bedSelect:false,
            sale_status:"",
            order:"row",
            val:this.props.data ? this.props.data:"",
            query:{}
        }
    }
    componentDidMount() {
        getApartmentsFromServer(this.onSuccess,this.state.query)
        getCitiesFromServer(this.onCitiesSuccess)
    };

    onCitiesSuccess = (cities) =>{
        this.setState({
            cities: cities
        })
    }

    onSuccess = (apt) => {
        this.setState({
            apartments:  apt,
        });
        if(this.state.val){
            this.uptateArr(this.state.val);
        }
        else {
            this.uptateArr();
        }
    };
    hendleChanges = (e) =>{
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]:val,
            val:val,  
        });
        this.state.query.city = val;
        getApartmentsFromServer(this.onSuccess,this.state.query)
    };
    uptateArr = (val=this.state.val) =>{
        let {apartments} = this.state;
        this.setState({
            newApartments: apartments
        })
    };
    findCity = (newId) => {
        const myId = this.state.cities.find(city => city.id === newId);
        return myId ? myId.label: "";
    };
    getPrices = (list=[null,null]) => {
        this.setState({
            min:list[0],
            max:list[1]
        }, () => {if(this.state.min){this.state.query.min_price = this.state.min};
            if(this.state.max){this.state.query.max_price = this.state.max};
            getApartmentsFromServer(this.onSuccess,this.state.query)});
    };
    getBeds = (beds) =>{
        this.setState({beds:beds}, () => {this.state.query.number_of_bath = this.state.beds;
            getApartmentsFromServer(this.onSuccess,this.state.query)});
    };
    getRooms = (rooms) =>{
        this.setState({rooms:rooms}, () => {this.state.query.number_of_room = this.state.rooms;
            getApartmentsFromServer(this.onSuccess,this.state.query)});
    };
    getRent = (rent) =>{
        this.setState({rent:rent}, () => {this.state.query.sale_status = this.state.query.sale_status == 'sale'?"":'rent';
            getApartmentsFromServer(this.onSuccess,this.state.query)});
    };
    getSale = (sale) =>{
        this.setState({sale:sale}, () => {this.state.query.sale_status = this.state.query.sale_status == 'rent'?"":'sale';
            getApartmentsFromServer(this.onSuccess,this.state.query)});
    };
    bedsTog = (val) =>{
        this.setState({bedSelect:val})
    };
    priceTog = (val) =>{
        this.setState({priceSelect:val})
    };
    roomTog = (val) =>{
        this.setState({roomSelect:val})
    };
    changeOrder = () =>{
        this.state.order === "row"?
            this.setState({order:"column"}):
            this.setState({order:"row"})
    };
    render() {
        return(
            <Container>
                <FBtn onClick={this.changeOrder}>
                    {this.state.order === "row"? <i className="fa fa-reorder"></i>:
                    <i className='fas fa-grip-vertical'></i>}
                </FBtn>
                <FBtn onClick={() => {this.state.filters?this.setState({filters:false}):this.setState({filters:true})}}>Filters <i className="fa fa-filter"></i></FBtn>
                {this.state.filters &&
                <Row style={{position:"sticky",top:"30px",left:"0",zIndex:"9999",opacity:"0.8",padding:"5px 25px"}}>
                    <TextFilter hendleChanges={this.hendleChanges} priceSelect={this.state.priceSelect} priceTog={this.priceTog} cities={this.state.cities}/>
                    <PropType getRent={this.getRent} getSale={this.getSale}/>
                    <PriceFilter getPrices={this.getPrices} bedsTog={this.bedsTog} priceTog={this.priceTog} roomTog={this.roomTog} priceSelect={this.state.priceSelect}/>
                    <BedsFilter getBeds={this.getBeds} bedsTog={this.bedsTog} priceTog={this.priceTog} roomTog={this.roomTog} bedSelect={this.state.bedSelect} />
                    <RoomsFilter getRooms={this.getRooms} bedsTog={this.bedsTog} priceTog={this.priceTog} roomTog={this.roomTog} roomSelect={this.state.roomSelect}/>
                </Row>
                }
                <div id={'apartmentDeck'} className={'row card-deck cards d-flex justify-content-center'} style={{alignItems:"center",flexDirection:this.state.order}}>
                    {this.state.newApartments.map((item,i) => {
                        return (
                            <Gallery {...item} key = {i} order={this.state.order}/>
                        )
                    })
                    }
                </div>
            </Container>
        )
    }
}

export default Filters;