import React from 'react';
import {Container, Row,Col} from "react-bootstrap";
import {ABtn, BImage, SubLinks} from './Styles'
import {Link} from "react-router-dom";
import {getApartmentsFromServer} from "./apartments";
import Gallery from "./Gallery";
import Detailes from "./detailes";
import Neighborhoods from "./Neighborhoods";
import Info from "./Info"

class SubHeader extends React.Component {
    constructor(props){
        super(props);
        this.state={
            shortApartments:[],
            apartmentsLength:0
        }
    }

    componentWillMount() {
        getApartmentsFromServer(this.onSuccess)
    };
    onSuccess = (apt, cities) => {
        let start = this.randIndex(apt);
        this.setState({
            apartments:  apt,
            cities: cities,
            shortApartments:apt.slice(start,start+4),
            apartmentsLength:apt.length,
        });
    };

    randIndex = (apt) =>{
        return parseInt(Math.random()*(apt.length-5))
    };
    hendleChanges = (e) =>{
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]:val,
            val:val
        });
    };

    render() {
        return (
            <div>
                <Container>
                <Row style={{alignItems: 'baseline',justifyContent: 'center'}}>
                    <img src=".\images\icons8-checkmark-16.png" style={{height: 'fit-content',margin:'0 5px'}}/>
                    <p style={{margin:'0 5px'}}>Be Ready to Buy... How Much Can You Borrow?</p>
                    <ABtn style={{margin:'0 5px'}}>Get Pre-Approved</ABtn>
                </Row>
                </Container>
                <div style={{backgroundImage:"url('./images/main_image.png')",minHeight:"300px",backgroundSize:'cover',margin:'15px 0',display:'flex',flexDirection:"column",justifyContent:'center'}}>
                    <h1 style={{color:'white',textAlign:'center'}}>The Home of Home Search</h1>
                    <h2 style={{color:'white',textAlign:'center',fontSize:'18px'}}>With the most complete source of homes for sale & real estate near you</h2>
                    <Container>
                    <Row style={{justifyContent:'center', margin:'15px 0'}}>
                        <div><SubLinks href="/"><b>BUY</b></SubLinks></div>
                        <div><SubLinks href="/"><b>RENT</b></SubLinks></div>
                        <div><SubLinks href="/"><b>JUST SOLD!</b></SubLinks></div>
                        <div><SubLinks href="/"><b>HOME VALUE</b></SubLinks></div>
                    </Row>
                    <Row style={{justifyContent:'center'}}>
                        <input onChange={this.hendleChanges} type="text" name="city" placeholder="Address, City, Neighborhood or Zip" style={{width:'300px'}}/>
                        <Link to={{pathname:"/Filters",state:{test:this.state.val}}}><button style={{backgroundColor:'red',borderColor:'red'}}>Search</button></Link>
                    </Row>
                    </Container>
                </div>
                <div>
                    <Container>
                        <h4 style={{margin:'15px 0'}}>{this.state.apartmentsLength} New apartments in RealTour</h4>
                        <Link to={{pathname:"/Filters",state:{test:this.state.val}}}><p>Show all apartments</p></Link>
                    <Row>
                        {this.state.shortApartments.map((item,i) => {
                        return (
                        <Gallery {...item} key = {i} order={"row"}/>
                        )
                    })}
                    </Row>
                    </Container>
                </div>
                <Detailes/>
                <BImage>
                    <a href="/">
                        <p>Trens</p>
                        <h1>Live Out Fall Fantasy in 1 of These 7 Homes Positioned for Prime Leaf Peeping</h1>
                        <button>Read More</button>
                    </a>
                </BImage>
                <Neighborhoods/>
                <Container>
                    <Row>
                        <Col type={"5"} style={{backgroundImage:"url('https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822')",
                            backgroundSize:'cover',minHeight:"200px",textAlign:"center",borderRadius:"10px",margin:"15px 5px"}}>
                            <h2 style={{color:"white"}}>The Insider's Guide to Renting in New York City</h2>
                        </Col>
                        <Col type={"5"} style={{backgroundImage:"url('https://www.nyp.org/graphics/pps/banner-pps.jpg')",
                            backgroundSize:'cover',minHeight:"200px",textAlign:"center",borderRadius:"10px",margin:"15px 5px"}}>
                            <h2 style={{color:"white"}}>The Insider's Guide to Renting in New York City</h2>
                        </Col>
                    </Row>
                </Container>
                <Info/>
            </div>
        )
    }
}

export default SubHeader