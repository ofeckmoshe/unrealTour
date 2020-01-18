import React from 'react';
import {Carousel, Container, Row,Col} from "react-bootstrap";
import {apartments, getApartmentsFromServer, getSingleApartment} from "./apartments";
import {GreenRect,BlackRectF,BlackRectS,AskBtn,ShareBtn} from "./Styles";
import Question from "./Question";

class Apartment extends React.Component{
    constructor(props){
        super(props);
        // const apartmentId = this.props.match.params.id;
        this.state ={
            loading:true,
            share:false,
            showAsk:false,
        }
    };

    async componentDidMount() {
        const apartment = await getSingleApartment(this.props.match.params.id);
        this.onSuccess(apartment);
    };
    onSuccess = (apartment) => {
        console.log("apartment: ", apartment.images);
        this.setState({
            apartments:  apartment,
            loading:false,
            apartment,
            city: apartment.city,
            imagesLength:apartment.images.split(",").length,
            images:apartment.images.split(","),
            index:1,
        });

        
    };

    getApartmentById = (id) =>{
        return apartments.find(apartment => apartment.id === parseInt(id));
    };

    getImagesLength =(apartmentId) =>{
        const apartment = this.getApartmentById(apartmentId);
        return apartment.images.length;
    };

    setIndex = () => {
        this.state.index < this.state.imagesLength ?
            this.setState({
                index:this.state.index +1
            }):
            this.setState({
                index:1
            })
    };

    share = ()=>{
        this.setState({share:!this.state.share});
    };

    ask = () =>{
      this.setState({
          showAsk:!this.state.showAsk,
      })
    };

    render() {
        return (
            this.state.loading ?<p style={{margin:"auto"}}>Lpading...</p>:
            <Container>
            <Carousel onSlideEnd={this.setIndex} indicators={false}>
                {this.state.apartment.images.split(',').map((img,i) => {
                    return (
                        <Carousel.Item>
                            <img
                                style={{height:'400px',maxHeight:'400px',width:'100%',maxWidth:'100%'}}
                                className="d-block w-100"
                                src={`http://localhost:5000/${img}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )
                })
                }
            </Carousel>
                <Row style={{position:'relative',bottom:'35px'}}>
            <GreenRect>Created on - {new Date(this.state.apartment.created_on).toLocaleDateString()}</GreenRect>
                    <BlackRectF>Rent/Sale: {this.state.apartment.sale_status} active</BlackRectF>
                    <BlackRectS> <i className='fas fa-camera'></i> {this.state.index}/{this.state.imagesLength}</BlackRectS>
                </Row>
                {/*<InHeart href={"javascript:void(0)"}><i className="fa fa-heart-o"></i></InHeart>*/}
                <Row style={{borderBottom:"1px solid",paddingBottom:"35px"}}>
                    <Col type={"4"}>
                        <h1>${this.state.apartment.price}M</h1>
                        <p>{this.state.apartment.number_of_bath} baths |  {this.state.apartment.number_of_room} rooms | {this.state.apartment.sqft} sqft lot</p>
                        <h5>{this.state.apartment.address} - {this.state.apartment.city}</h5>
                    </Col>
                    <Col type={"8"} style={{marginRight:"30px"}}>
                        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{position:"absolute",top:"0",width:"100%"}}>
                            <iframe src={`https://maps.google.com/maps?q=${this.state.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder="0"
                                    style={{border:"0",height:"100%",width:"100%"}} allowFullScreen></iframe>
                        </div>
                    </Col>
                </Row>
                <Row style={{textAlign:"center"}}>
                    <Col type={"4"} style={{borderRight:"1px solid"}}>
                        <p>description: {this.state.apartment.description}</p>
                        <p>Year Built - 1920</p>
                    </Col>
                    <Col type={"4"} >
                        <p>Property Type - {this.state.apartment.property_type}</p>
                        {this.state.apartment.sqft &&
                        <p>Price per sqft - {parseInt((this.state.apartment.price)/this.state.apartment.sqft)}$</p>}

                    </Col>
                    <Col type={"4"} style={{borderLeft:"1px solid"}}>
                        <p>Created On - {new Date(this.state.apartment.created_on).toLocaleDateString()}</p>
                        <p>Style - Colonial</p>
                    </Col>

                </Row>
                <Row style={{display:"flex",justifyContent:"center", marginBottom:'5px'}}>
                    <AskBtn onClick={this.ask}>Ask a question</AskBtn>
                    <ShareBtn onClick={this.share}>Share this home</ShareBtn>
                </Row>
                <Question apt={this.state.apartment} show={this.state.showAsk} close={this.ask}/>
                <div style={{display:"flex",justifyContent:"center", opacity: this.state.share ? 1 : 0,transition:"0.5s opacity"}}>
                    <i className='fab fa-facebook' style={{fontSize:'36px',color:'blue' ,margin:'0 2px', transitionDelay: 0}}/>
                    <i className='fab fa-whatsapp' style={{fontSize:'36px',color:'lightgreen',margin:'0 2px', transitionDelay: '1s'}}/>
                    <i className='fab fa-twitter' style={{fontSize:'36px',color:'lightblue',margin:'0 2px', transitionDelay: '1.5s'}}/>
                </div>
                <Row style={{margin:'50px 0'}}>
                    <Col type={"4"} style={{backgroundColor:'lightgray'}}>
                        <form style={{display:'flex',flexDirection:'column',padding:'30px 0'}}>
                            <h4>Ask a question</h4>
                            <input type={"text"} placeholder={"Full Name"} style={{margin:'5px 0'}}/>
                            <input type={"email"} placeholder={"Email"} style={{margin:'5px 0'}}/>
                            <input type={"text"} placeholder={"Phone Number"} style={{margin:'5px 0'}}/>
                            <textarea placeholder={`'I am interested in ${this.state.apartment.address}'`} style={{margin:'5px 0'}}/>
                            <AskBtn>Email Agent</AskBtn>
                        </form>
                    </Col>
                    <Col type={"8"} style={{backgroundImage:'url(../images/stoneridge.jpg)',backgroundSize:'100% 100%'}}></Col>
                </Row>
            </Container>

        )
    }
}
export default Apartment