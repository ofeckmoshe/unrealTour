import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Cookie from 'js-cookie';
import { getAllCitiesFromServer } from "../api/controllers/cities";
import {addApartment} from "../api/controllers/apartments"
import {addImages} from "../api/controllers/images"

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: Cookie.get('user') ? JSON.parse(Cookie.get('user')) : null,
            formOpen: false,
        }
    }

    componentDidMount() {
        getAllCitiesFromServer(this.onCitiesSuccess)
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

    hendleSelect = (e) => {
        const name = e.target.name;
        // console.log(name)
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
        console.log("myAppartment", myAppartment)
        for (let prop in myAppartment) {
            // console.log(this.state.myAppartment[prop])
            formData.append(prop, myAppartment[prop])
        }
        addApartment(formData);
        // addImages(newApartment.id, this.state.myAppartment.images);
        this.openForm()
    }

    fileUpload =(e) =>{ 
        this.setState({
            main_image : e.target.files[0]
        })
    }

    filesUpload =(e)=>{
        this.setState({
            images : e.target.files
        }) 
    }

    getCityId = (myCity) => {
        for (var city in this.state.cities) {
            if(myCity === this.state.cities[city].name){
                return this.state.cities[city].id
            }
        }
    }

    render() {
        const citiesArr = [];
        for (var city in this.state.cities) {
            citiesArr.push(this.state.cities[city].name);
        }
        return (
            <Container style={{ textAlign: 'center' }}>
                <h1>Hello {this.state.user.first_name}, Good to see you again</h1>
                <button onClick={this.openForm}>add apartment</button>
                {this.state.formOpen &&
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>City</Form.Label>
                                <Form.Control as="select" name={"city"}
                                    onSelect={this.hendleChanges} onChange={this.hendleChanges}>
                                    <option value={""} >Choose...</option>
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
                                    onChange={this.hendleChanges} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Price" name={"price"}
                                    onChange={this.hendleChanges} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRooms">
                                <Form.Label>Number of Rooms</Form.Label>
                                <Form.Control type="number" name={"number_of_room"}
                                    onChange={this.hendleChanges} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridBaths">
                                <Form.Label>Number of Bath</Form.Label>
                                <Form.Control type="number" name={"number_of_bath"}
                                    onChange={this.hendleChanges} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSqft">
                                <Form.Label>Sqft</Form.Label>
                                <Form.Control type="text" name={"sqft"}
                                    onChange={this.hendleChanges} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>property type</Form.Label>
                                <Form.Control as="select" name={"property_type"}
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
                                <Form.Control type="text" name={"description"}
                                    onChange={this.hendleChanges} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Rent / Sale</Form.Label>
                                <Form.Control as="select" name={"sale_status"}
                                    onSelect={this.hendleChanges} onChange={this.hendleChanges}>
                                    <option value={""} >select</option>
                                    <option value={"rent"} >rent</option>
                                    <option value={"sale"} >sale</option>
                                    <option value={"both"} >both</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>main image</Form.Label>
                                <Form.Control type="file" className="main_image" name={"main_image"} onChange={this.fileUpload}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Images</Form.Label>
                                <Form.Control type="file" className="Images" name={"Images"} onChange={this.filesUpload} multiple>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit" onClick={this.upload}>
                            Submit
                    </Button>
                    </Form>}
            </Container>
        );
    }
}

export default UserPage;