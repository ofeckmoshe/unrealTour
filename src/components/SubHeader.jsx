import React from 'react';
import {Container, Row,Col} from "react-bootstrap";
import {ABtn, BImage, SubLinks} from './Styles'
import {Link} from "react-router-dom";
import {getApartmentsFromServer,addWish} from "../api/controllers/apartments";
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
    onSuccess = (apartments, allApartmentsLength) => {
        let start = this.randIndex(apartments);
        this.setState({
            apartments:  apartments,
            allApartmentsLength: allApartmentsLength,
            shortApartments:apartments.slice(start,start+4),
            apartmentsLength:apartments.length,
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

    addToWishList = (user_id,apartment_id) =>{
        addWish(user_id,apartment_id)
    }

    render() {
        return (
            <div>
                <Container>
                    <Row style={{alignItems: 'baseline',justifyContent: 'center',margin:'5px'}}>
                        <img src=".\images\icons8-checkmark-16.png" style={{height: 'fit-content',margin:'0 5px'}}/>
                        <p style={{margin:'0 5px'}}>Be Ready to Buy... How Much Can You Borrow?</p>
                        <ABtn style={{margin:'0 5px'}}>Get Pre-Approved</ABtn>
                    </Row>
                </Container>
                <Container style={{ fontFamily: 'Architects Daughter',display:'flex',alignItems: 'baseline',justifyContent: 'center',alignItems:'center'}}>
                    <video autoPlay={'on'} loop={'loop'} muted={'on'} width={'100%'} style={{position: 'relative'}}>
                        <source type={"video/mp4"} src='../../1632 Stradella Road Bel Air_00_00_45-00_01_10 - oDownloader.mp4'/>
                    </video>
                <div style={{display:'flex',flexDirection:"column",position:'absolute'}}>
                    <h1 style={{color:'white',textAlign:'center'}} className="d-none d-md-block">The Home of Home Search</h1>
                    <Container>
                        <Row style={{justifyContent:'center', margin:'15px 0'}}>
                            <div><SubLinks href="/"><b>BUY</b></SubLinks></div>
                            <div><SubLinks href="/"><b>RENT</b></SubLinks></div>
                            <div><SubLinks href="/"><b>JUST SOLD!</b></SubLinks></div>
                            <div><SubLinks href="/"><b>HOME VALUE</b></SubLinks></div>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                            <input onChange={this.hendleChanges} type="text" name="city" placeholder="Address, City, Neighborhood or Zip" style={{width: '70%'}}/>
                            <Link to={{pathname:"/Filters",state:{test:this.state.val}}}><button style={{backgroundColor:'red',borderColor:'red'}}>Search</button></Link>
                        </Row>
                    </Container>
                </div>
                </Container>
                <div>
                    <Container>
                        <h4 style={{margin:'15px 0'}}>{this.state.apartmentsLength} New apartments in RealTour</h4>
                        <Link to={{pathname:"/Filters",state:{test:this.state.val}}}><p>Show all apartments</p></Link>
                    <Row>
                        {this.state.shortApartments.map((item,i) => {
                        return (
                        <Gallery {...item} key = {i} order={"row"} addToWishList={this.addToWishList}/>
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
                        <Col type={"5"} style={{backgroundImage:"url('https://images.globes.co.il/images/NewGlobes/big_image_800/2016/geser800.jpg')",
                            backgroundSize:'cover',minHeight:"200px",textAlign:"center",borderRadius:"10px",margin:"15px 5px"}}>
                            <h2 style={{color:"white"}}>The Insider's Guide to Renting in Jerusalem</h2>
                        </Col>
                        <Col type={"5"} style={{backgroundImage:"url('https://www.touristisrael.com/wp-content/uploads/tel-aviv-1779649_960_720-001.jpg')",
                            backgroundSize:'cover',minHeight:"200px",textAlign:"center",borderRadius:"10px",margin:"15px 5px"}}>
                            <h2 style={{color:"white"}}>The Insider's Guide to Renting in TLV City</h2>
                        </Col>
                    </Row>
                </Container>
                <Info/>
            </div>
        )
    }
}

export default SubHeader