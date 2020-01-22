import React, { Component } from 'react';
import {Container,Row,Col,InputGroup,FormControl,Form,ButtonGroup,Button} from 'react-bootstrap';
import {SignUpDiv} from './Styles'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state ={
                    email:{value:'', errors:[], validations:{required:true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test()}},
                    emailErrors:[],
                    password:{value:'',errors:[],validations:{required:true}},
                    passwordErrors:[],
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    inputChange = ({target:{name,value}}) =>{
        const errors = []
        if(this.state[name].validations.required && !value){
            errors.push(`${name} is required`)
        }
        this.setState({
            [name]:value,
            [`${name}Errors`]:errors
        })
    }
    render() {
        return (
                <SignUpDiv>
                    <form method="GET" action="/user" onSubmit={this.onSubmit}>
                    <div style={{borderBottom:"1px solid red",color:"white"}}>
                        <h1>User Details</h1>
                        <h4>Hello User! please fill your deatils</h4>
                    </div>
                    <Row style={{marginTop:"20px"}}>
                        <Col>
                        <Form.Label style={{marginRight:"100%",color:"white"}}>Email</Form.Label>
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
                            {this.state.emailErrors.map(error =>(
                                <small className="text-danger" style={{float:"left"}}
                                >{error}</small>
                            ))}
                        </Col>
                        <Col>
                        <Form.Label style={{marginRight:"100%",color:"white"}}>Password</Form.Label>
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
                            {this.state.passwordErrors.map(error =>(
                                <small className="text-danger" style={{float:"left"}}
                                >{error}</small>
                            ))}
                        </Col>
                    </Row>
                    <Row style={{marginTop:"10px"}}>
                        <Col>
                            <Form.Label style={{marginRight:"100%",color:"white"}}>Address</Form.Label>
                            <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"><i class='fas fa-address-card'></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Street, Number, City, Zip"
                                        aria-label="Address"
                                        aria-describedby="basic-addon1"
                                    />
                            </InputGroup> 
                        </Col>
                    </Row>
                    <input type="submit" variant="primary" style={{color:'white',backgroundColor:'blue',borderColor:'blue',margin:'5px'}}/>
                    <button onClick={this.props.openSignUp} style={{color:'white',backgroundColor:'red',borderColor:'red',margin:'5px'}}>
                        Not Now
                    </button>
                    </form>
                </SignUpDiv>
        );
    }
}

export default SignUp;