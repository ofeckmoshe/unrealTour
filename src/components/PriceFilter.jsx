import React from "react";
import {apartments, cities} from "./apartments";
import {Fade, Form, Row, Col} from "react-bootstrap";
import {MyUl, MyLi,MyDiv,MyBtn} from "./Styles";

let newApartments = apartments;

class PriceFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minPrice: 0,
            maxPrice: 0,
            minHolder: ""
        }
    }

    priceOpen = () => {
        // this.state.priceSelect ? this.setState({priceSelect: false}) : this.setState({priceSelect: true});
        this.props.priceTog(!this.props.priceSelect);
        this.props.bedsTog(false);
        this.props.roomTog(false);
    };


    setMinPrice = (e) => {
        const val = e.target.innerHTML;
        let mult = val.slice(val.length - 1);
        const num = val.slice(1, val.length - 1);
        (mult === "K") ? this.setState({minPrice: num * 1000}, () => {this.setPrices()}) : 
            (mult === "M") ? this.setState({minPrice: num * 1000000}, () => {this.setPrices()}) : 
            this.setState({minprice: 0}, () => {this.setPrices()})
    };

    setMaxPrice = (e) => {
        const val = e.target.innerHTML;
        let mult = val.slice(val.length - 1);
        const num = val.slice(1, val.length - 1);
        (mult === "K") ? this.setState({
                maxPrice: num * 1000
            }, () => {this.setPrices()})
            :

            (mult === "M") ?
                this.setState({maxPrice: num * 1000000}, () => {this.setPrices()}) :
                this.setState({minprice: 400000}, () => {this.setPrices()});

    };

    setPrices = () => {
        this.props.getPrices([this.state.minPrice, this.state.maxPrice]);
    };

    render() {
        const minPrices = ["$0", "$800K", "$1M", "$1.2M", "$1.4M", "$1.8M", "$2M"];
        const maxPrices = ["$1M", "$1.2M", "$1.4M", "$1.8M", "$2.4M", "$3M", "$5M"];
        return (
            <div style={{paddingTop:"15px"}}>
                <MyBtn onClick={() => this.priceOpen()}>Price <i className="fa fa-dollar"></i></MyBtn>
                {this.props.priceSelect &&<MyDiv>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="min" value={this.state.minPrice}/>
                                <MyUl>
                                    {this.props.priceSelect && minPrices.map((price, i) => <MyLi
                                        onClick={this.setMinPrice}>{price}</MyLi>)}
                                </MyUl>
                            </Col>
                            <Col>
                                <Form.Control placeholder="max" value={this.state.maxPrice} onChange={this.setPrices}/>
                                <MyUl>
                                    {this.props.priceSelect && maxPrices.map((price, i) => <MyLi
                                        onClick={this.setMaxPrice}>{price}</MyLi>)}
                                </MyUl>
                            </Col>
                        </Form.Row>
                    </Form>
                </MyDiv>}

            </div>
        )
    }
}

export default PriceFilter;