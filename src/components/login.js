import React, { Component } from 'react';
import { LogInBtn, FbBtn, SignOrLog } from './Styles'
import {Fade,Col,Row} from 'react-bootstrap';
class Login extends Component {
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
            <div>
                <form method="GET" action="/user" onSubmit={this.onSubmit}>
                <SignOrLog>
                    <Col type={"8"}>
                        <h4 style={{ color: "black" }}>Log in to your account</h4>
                        <input  placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                name="email"
                                onBlur={this.inputChange} style={{ margin: "10px 0" }} />
                        <input placeholder="password"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                name="password"
                                type="password"
                                onBlur={this.inputChange} />
                        <a style={{ color: "gray" }} href={"/"}>forgot password?</a>
                        <LogInBtn>Log In</LogInBtn>
                        <FbBtn>Log In With Facebook</FbBtn>
                    </Col>
                    <Col type={"4"}>
                        <h4 style={{ color: "black" }}><a style={{ color: "red" }} href={"/"}>No account? Sign Up</a></h4>
                        <img src={"../images/84e94sp.png"} />
                        <img src={"../images/nar-logo.png"} style={{ maxWidth: "250px" }} />
                        <h4 onClick={this.openLogIn}>
                            <i style={{ fontSize: "24px", position: "absolute", top: "0", right: "40px", color: "black" }} className="fa">&#xf00d;</i>
                        </h4>
                    </Col>
                </SignOrLog>
                </form>
            </div>
        );
    }
}

export default Login;