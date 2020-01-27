import React from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SingUp from './signUp'
import { BlurDiv } from './Styles'
import Cookie from 'js-cookie'
import {Link, Redirect} from "react-router-dom";


import Login from './login'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bar: false,
            toggle: false,
            active: null,
            logIn: false,
            signUp: false,
            showItem: "block",
            redirect:false,
        }
    }

    componentWillMount() {
        if(Cookie.get('user')){
            this.setState({ userName: JSON.parse(Cookie.get('user')).first_name });
        }
    }

    dropSideBar = () => {
        this.setState({
            toggle: !this.state.toggle,
            showItem: `${this.state.showItem === "block" ? "none" : "block"}`
        })
    };

    changeActive = (index) => {
        this.setState({
            active: index
        })
    };

    openLogIn = () => {
        this.setState({ logIn: !this.state.logIn })
    };

    openSignUp = () => {
        this.setState({ signUp: !this.state.signUp })
    };

    userLogIn = (user) => {
        this.setState({ userName: user.first_name ? user.first_name : "",redirect:false })
        // console.log("name", this.state.userName)
    }
    logOut = () => {
        this.setState({ userName: "" ,redirect:true});
        Cookie.remove('user');
        }
    render() {
        // if (this.state.redirect) {
        //     return <Redirect to='/'/>;
        //   }
        // const { toggle } = this.state;
        return (
            <header id={"header"}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <div style={{width:'60px', height:'40px'}}>
                            <img src="../images/hiclipart.com.png"
                                style={{width:'100%', height:'100%'}}/>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {!this.state.userName ?
                                <Nav.Link>
                                    <h4 onClick={this.openLogIn} style={{ cursor: "pointer" }}>Log In</h4>
                                    {this.state.logIn &&
                                        <Login openLogIn={this.openLogIn} userLogIn={this.userLogIn} />}
                                </Nav.Link> :
                                <Nav.Link>
                                    <Link to={{pathname:"/UserPage"}} style={{textDecoration :'unset',color:'unset'}}>
                                        <h4 style={{ cursor: "pointer"}}>{this.state.userName}</h4>
                                    </Link>
                                </Nav.Link>}
                            {this.state.userName &&
                                <Nav.Link style={{cursor: "pointer" }} onClick={this.logOut} href="/">
                                    <h4>Log Out</h4>
                                </Nav.Link>}
                                <Nav.Link >
                                    <h4 style={{cursor: "pointer" }} onClick={this.openSignUp}>Sign Up</h4>
                                    {this.state.signUp && <BlurDiv><SingUp openSignUp={this.openSignUp} /></BlurDiv>}
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to={{pathname:"/Filters",state:{test:this.state.val}}} 
                                    style={{textDecoration :'unset',color:'unset'}}>
                                        <h4>Search</h4>
                                    </Link>
                                </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default Header;