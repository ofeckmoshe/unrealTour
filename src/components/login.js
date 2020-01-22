import React, { Component } from 'react';
import { LogInBtn, FbBtn, SignOrLog } from './Styles'
import {Col} from 'react-bootstrap';

import {login} from '../api/controllers/login';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
                    userName:"",
                    emailVali:{value:'', errors:[], validations:{required:true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test()}},
                    emailErrors:[],
                    passwordVali:{value:'',errors:[],validations:{required:true}},
                    passwordErrors:[],
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.logIn(this.state.emailVali,this.state.passwordVali);
        console.log(this.state);
        this.props.openLogIn();
    }

    inputChange = ({target:{name,value}}) =>{
        const errors = []
        if(this.state[`${name}Vali`].validations.required && !value){
            errors.push(`${name} is required`)
        }
        this.setState({
            [`${name}Vali`]:value,
            [`${name}Errors`]:errors
        })
    }

    // handleChange = (e,{target:{name,value}}) =>{
    //     e.preventDefault();
    //     this.setState({
    //         [name]:value
    //     })
    //     if(this.state.email && this.state.password){
    //         this.logIn(this.state.email,this.state.password);
    //     }
    // }

    logIn = async (email,password) =>{
        try{
            const user = await login(email, password);
            this.props.userLogIn(user);
        }catch(error){
            console.log(error);
        }
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
                                onChange={this.handleChange}
                                onBlur={this.inputChange} style={{ margin: "10px 0" }} />
                        <input placeholder="password"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                onBlur={this.inputChange} />
                        <a style={{ color: "gray" }} href={"/"}>forgot password?</a>
                        <LogInBtn onClick={this.onSubmit}>Log In</LogInBtn>
                        <FbBtn>Log In With Facebook</FbBtn>
                    </Col>
                    <Col type={"4"}>
                        <h4 onClick={this.props.openLogIn} style={{cursor: "pointer"}}>
                            <i style={{ fontSize: "24px", position: "absolute", top: "0", right: "40px", color: "black",marginBottom:"5px" }} className="fa">&#xf00d;</i>
                        </h4>
                        <h4 style={{ color: "black", padding:'15px' }}><a style={{ color: "red" }} href={"/"}>No account? Sign Up</a></h4>
                        <img src={"../images/84e94sp.png"} />
                        <img src={"../images/nar-logo.png"} style={{ maxWidth: "250px" }} />
                    </Col>
                </SignOrLog>
                </form>
            </div>
        );
    }
}

export default Login;