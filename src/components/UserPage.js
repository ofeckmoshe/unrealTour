import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Cookie from 'js-cookie';
import { getAllCitiesFromServer } from "../api/controllers/cities";
import {addApartment} from "../api/controllers/apartments"
import {getApartmentsFromServer,getWishList} from "../api/controllers/apartments";
import Gallery from "./Gallery";

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.uploaded = React.createRef()
        this.wish = React.createRef() 
        this.state = {
            user: Cookie.get('user') ? JSON.parse(Cookie.get('user')) : null,
            formOpen: false,
            counter:0,
            isButtonDisabled:true,
            query:{},
            myUpload:false,
            myWishList:false,
        }
    }

    async componentDidMount() {
        this.state.query.user_id=this.state.user.id
        getAllCitiesFromServer(this.onCitiesSuccess)
        getApartmentsFromServer(this.onSuccess,this.state.query)
        this.setState({wishList:await getWishList(this.state.user.id),done:true})
    };
    

    onSuccess = (apt) => {
        this.setState({
            apartments:  apt,
            
        });
    };

    onCitiesSuccess = (cities) => {
        this.setState({
            cities: cities
        })
    }

    openForm = () => {
        this.setState({ formOpen: !this.state.formOpen });
    }

    hendleChanges = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]: val,
            val: val,
        });

    };

    upload = (e) => {
        e.preventDefault()
        const formData = new FormData();
        const imagesArr = [];
        this.state.main_image &&
        imagesArr.push(this.state.main_image);
        this.state.images &&
        imagesArr.push(...this.state.images);
        imagesArr.forEach(image => {
            formData.append('images', image);
        })
        const myAppartment = {
            user_id: this.state.user.id,
            city_id: this.getCityId(this.state.city),
            address:this.state.address,
            price:this.state.price,
            number_of_room:this.state.number_of_room,
            number_of_bath:this.state.number_of_bath,
            sqft:this.state.sqft,
            sale_status:this.state.sale_status,
            availability: 'available',
            property_type:this.state.property_type,
            description:this.state.description,
        }
        for (let prop in myAppartment) {
            formData.append(prop, myAppartment[prop])
        }
        addApartment(formData);
        this.openForm()
    }

    fileUpload =(e) =>{ 
        this.setState({
            main_image : e.target.files[0],
            counter :++this.state.counter
        })
    }

    filesUpload =(e)=>{
        this.setState({
            images : e.target.files,
            counter :++this.state.counter
        }) 
    }

    getCityId = (myCity) => {
        for (var city in this.state.cities) {
            if(myCity === this.state.cities[city].name){
                return this.state.cities[city].id
            }
        }
    }

    myUpload = () =>{
        this.setState({myUpload:!this.state.myUpload},()=>{this.state.myUpload&&window.scrollTo(0, this.uploaded.current.offsetTop)})
        
    }

    myWishList = () =>{
        this.setState({myWishList:!this.state.myWishList},()=>{this.state.myWishList&&window.scrollTo(0, this.wish.current.offsetTop)})
    }

    backToTop = (from) =>{
        if(from == 'upload'){
            this.myUpload();
        }else{
            this.myWishList();
        }
        window.scrollTo(0, 0);
    }

    render() {
        const citiesArr = [];
        for (var city in this.state.cities) {
            citiesArr.push(this.state.cities[city].name);
        }
        return (
            <Container fluid >
            <Row>
                <div style={{display:'flex',flexDirection:'column',backgroundColor:'lightgray',padding:'0'}} className={'col-2'}>
                    <Button variant="info" onClick={this.openForm} style={{float:'left',display:'block'}}>
                        add apartment</Button>
                    <Button variant="info" onClick={this.myUpload} style={{float:'left'}}>
                        Your apartments</Button>
                    <Button variant="info" onClick={this.myWishList} style={{float:'left'}}>
                    Your wish list</Button></div>
            
            <Container className={'col-10'}>
            <Container 
            style={{ textAlign: 'center', backgroundImage: "url(./images/realestate-aidturk.jpg)",backgroundSize:'cover' ,height:'550px',position:'relative'}}>
                <h1 style={{textShadow:'2px 2px 2px lightseagreen'}}>
                    Hello {this.state.user.first_name}, Good to see you again</h1>

                {this.state.formOpen &&
                    <Form style={{backgroundColor:'aliceblue',padding:'15px'}} onSubmit={this.upload}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>City</Form.Label>
                                <Form.Control as="select" name={"city"} required
                                    onSelect={this.hendleChanges} onChange={this.hendleChanges}>
                                    <option value={""} ></option>
                                    {citiesArr.map((city, i) => {
                                        return (
                                            <option key={i} value={city}>{city}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Enter your apartment address" name={"address"}
                                    required onChange={this.hendleChanges} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Price" name={"price"}
                                    required onChange={this.hendleChanges} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRooms">
                                <Form.Label>Number of Rooms</Form.Label>
                                <Form.Control type="number" name={"number_of_room"}
                                    required onChange={this.hendleChanges} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridBaths">
                                <Form.Label>Number of Bath</Form.Label>
                                <Form.Control type="number" name={"number_of_bath"}
                                    required onChange={this.hendleChanges} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSqft">
                                <Form.Label>Sqft</Form.Label>
                                <Form.Control type="text" name={"sqft"}
                                    required onChange={this.hendleChanges} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>property type</Form.Label>
                                <Form.Control as="select" name={"property_type"} required
                                    onSelect={this.hendleChanges} onChange={this.hendleChanges}>
                                    <option value={""} >select</option>
                                    <option value={"house"} >house</option>
                                    <option value={"ranch"} >ranch</option>
                                    <option value={"condo"} >condo</option>
                                    <option value={"land"} >land</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name={"description"} required
                                    onChange={this.hendleChanges} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Rent / Sale</Form.Label>
                                <Form.Control as="select" name={"sale_status"} required
                                    onSelect={this.hendleChanges} onChange={this.hendleChanges}>
                                    <option value={""} >select</option>
                                    <option value={"rent"} >rent</option>
                                    <option value={"sale"} >sale</option>
                                    <option value={"both"} >both</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>main image</Form.Label>
                                <Form.Control type="file" className="main_image" name={"main_image"} required onChange={this.fileUpload}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Images</Form.Label>
                                <Form.Control type="file" className="Images" name={"Images"} required onChange={this.filesUpload} multiple>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                      <input type="submit" onSubmit={this.upload}/>
                    </Form>}
            </Container>
            {this.state.apartments && this.state.myUpload &&
            <div ref={this.uploaded} id={'apartmentDeck'} className={'row card-deck cards d-flex justify-content-center'} style={{alignItems:"center",padding:'10px',overflowX:'auto'}}>
                    <h3 className={'col-11'}>your uploaded apartments list - {this.state.apartments.length} apartments is available</h3>
                    <Button onClick={() =>{this.backToTop('upload')}} className={'col-1'} variant="info">top</Button>
                    {this.state.apartments.map((item,i) => {
                        return (
                            <Gallery {...item} key = {i} order={'row'}/>
                        )
                    })
                    }
                </div>}
            {this.state.wishList && this.state.myWishList &&
            <div ref={this.wish} id={'apartmentDeck'} className={'row card-deck cards d-flex justify-content-start'} style={{padding:'10px',overflowX:'auto'}}>
                    <h3 className={'col-11'}>your wish list - {this.state.wishList.length} apartments is available</h3>
                    <Button onClick={() =>{this.backToTop('wish')}} className={'col-1'} variant="info">top</Button>
                    {this.state.wishList.map((item,i) => {
                        return (
                            <Gallery {...item} key = {i} order={'row'}/>
                        )
                    })
                    }
                </div>}
            </Container>
            </Row>
            </Container>
        );
    }
}

export default UserPage;