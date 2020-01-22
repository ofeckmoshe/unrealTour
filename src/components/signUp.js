import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Form, ButtonGroup, Button } from 'react-bootstrap';
import { SignUpDiv } from './Styles'
import {newUserSignUp} from '../api/controllers/signUp'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: { value: '', errors: [], validations: { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test() } },
            emailErrors: [],
            password: { value: '', errors: [], validations: { required: true } },
            passwordErrors: [],
            first_name: { value: '', errors: [], validations: { required: true } },
            first_nameErrors: [],
            last_name: { value: '', errors: [], validations: { required: true } },
            last_nameErrors: [],
            phone: { value: '', errors: [], validations: { required: true } },
            phoneErrors: [],
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        if(this.state.email && this.state.password && this.state.first_name && this.state.last_name && this.state.phone){
            const user ={
                email:this.state.email,
                password:this.state.password,
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                phone:this.state.phone
            }
            newUserSignUp(user)
        }else{
            alert('you must fill all fields')
        }
        
    }

    inputChange = ({ target: { name, value } }) => {
        const errors = []
        if (this.state[name].validations.required && !value) {
            errors.push(`${name} is required`)
        }
        this.setState({
            [name]: value,
            [`${name}Errors`]: errors
        })
    }
    render() {
        return (
            <SignUpDiv>
                <form method="GET" action="/user" >
                    <div style={{ borderBottom: "1px solid red", color: "white" }}>
                        <h1>User Details</h1>
                        <h4>Hello User! please fill your deatils</h4>
                    </div>
                    <Row style={{ marginTop: "20px" }}>
                        <Col>
                            <Form.Label style={{ float: "left", color: "white" }}>Email</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"><i class='fas fa-user'></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    name="email"
                                    onBlur={this.inputChange}
                                />
                            </InputGroup>
                            {this.state.emailErrors.map(error => (
                                <small className="text-danger" style={{ float: "left" }}
                                >{error}</small>
                            ))}
                        </Col>
                        <Col>
                            <Form.Label style={{ float: "left", color: "white" }}>Password</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="password"
                                    aria-label="password"
                                    aria-describedby="basic-addon1"
                                    name="password"
                                    type="password"
                                    onBlur={this.inputChange}
                                />
                            </InputGroup>
                            {this.state.passwordErrors.map(error => (
                                <small className="text-danger" style={{ float: "left" }}
                                >{error}</small>
                            ))}
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Form.Label style={{ float: "left", color: "white" }}>Name</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-describedby="basic-addon1"
                                    name="first_name"
                                    type="text"
                                    onBlur={this.inputChange}
                                />
                            </InputGroup>
                            {this.state.first_nameErrors.map(error => (
                                <small className="text-danger" style={{ float: "left" }}
                                >{error}</small>
                            ))}
                        </Col>
                        <Col>
                            <Form.Label style={{ float: "left", color: "white" }}>Last Name</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Last Name"
                                    aria-label="Last Name"
                                    aria-describedby="basic-addon1"
                                    name="last_name"
                                    type="text"
                                    onBlur={this.inputChange}
                                />
                            </InputGroup>
                            {this.state.last_nameErrors.map(error => (
                                <small className="text-danger" style={{ float: "left" }}
                                >{error}</small>
                            ))}
                        </Col>
                        <Col>
                            <Form.Label style={{ float: "left", color: "white" }}>Phone</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Phone Number"
                                    aria-label="Phone Number"
                                    aria-describedby="basic-addon1"
                                    name="phone"
                                    type="text"
                                    onBlur={this.inputChange}
                                />
                            </InputGroup>
                            {this.state.phoneErrors.map(error => (
                                <small className="text-danger" style={{ float: "left" }}
                                >{error}</small>
                            ))}
                        </Col>
                    </Row>
                    <input type="submit" variant="primary" style={{ color: 'white', backgroundColor: 'blue', borderColor: 'blue', margin: '5px' }} onClick={this.onSubmit, this.props.openSignUp}/>
                    <button onClick={this.props.openSignUp} style={{ color: 'white', backgroundColor: 'red', borderColor: 'red', margin: '5px' }}>
                        Not Now
                    </button>
                </form>
            </SignUpDiv>
        );
    }
}

export default SignUp;