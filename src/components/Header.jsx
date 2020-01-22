import React from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SingUp from './signUp'
import { BlurDiv } from './Styles'
import Cookie from 'js-cookie'
import {Link, Redirect} from "react-router-dom";

// import {Link} from "react-router-dom";
import Login from './login'
// class Links extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             toggle: false,
//         }
//     }

//     render() {
//         return (
//             <div className="dropdown">
//                 <ul className={"listContent"}>
//                     {this.props.innerMenu && this.props.innerMenu.map((innerNavItem) => {
//                         return (
//                             <div>
//                                 {innerNavItem.map((listItem, i) => {
//                                     return (
//                                         <li key={i} className={"contentBlock"}>
//                                             <a href={listItem.href ? listItem.href : "javascript:void(0)"}>
//                                                 {listItem.title}
//                                             </a>
//                                         </li>
//                                     )
//                                 })}
//                             </div>
//                         )
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }
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
        if(JSON.parse(Cookie.get('user'))){
            this.state =  { userName: JSON.parse(Cookie.get('user')).first_name }
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
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to={{pathname:"/Filters",state:{test:this.state.val}}} 
                                    style={{textDecoration :'unset',color:'unset'}}>
                                        <h4>Search</h4>
                                    </Link>
                                </Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <div className={toggle ? 'responsive topnav' : 'topnav'} id="responsiveBar">
                    <a href="/" className="active"><img src={"../images/logo.png"} /></a>
                    <ul className={"buttons dropbtn "} style={{ display: "flex", justifyContent: "space-between" }}>
                        {navigation.map((data,i) => {
                            return (
                                <li key={i} onMouseOver={() => this.changeActive(i)} onMouseOut={() => this.changeActive(-1)} >
                                    <h4 >{data.label}</h4>
                                    <Fade unmountOnExit={true} in={this.state.active === i}><Links innerMenu={data.innerMenu}/></Fade>
                                </li>
                            );
                        })} */} 
                        {/* {!this.state.userName ?
                            <li style={{ display: this.state.showItem }}>
                                <h4 onClick={this.openLogIn} style={{ cursor: "pointer" }}>Log In</h4>
                                {this.state.logIn &&
                                    <Login openLogIn={this.openLogIn} userLogIn={this.userLogIn} />
                                }
                            </li> :
                            <li style={{ display: this.state.showItem }}>
                                <h4 style={{ cursor: "pointer" }}>{this.state.userName}</h4>
                            </li>
                        }
                        {/* <li style={{display:this.state.showItem}} class="d-none d-lg-block"> */}
                        {/* <h4 onClick={this.openLogIn} style={{cursor: "pointer"}}>{!this.state.userName?'Log In':`${this.state.userName}`}</h4>
                            {this.state.logIn &&
                                <Login openLogIn ={this.openLogIn} userLogIn={this.userLogIn}/>
                            }
                        </li> */}
                        {/* {this.state.userName &&
                            <li style={{ display: this.state.showItem, cursor: "pointer" }} onClick={this.logOut}><h4>Log Out</h4></li>}
                        <li style={{ display: this.state.showItem, cursor: "pointer" }} onClick={this.openSignUp}><h4>Sign Up</h4></li>
                        {this.state.signUp && <BlurDiv><SingUp openSignUp={this.openSignUp} /></BlurDiv>}
                        <li style={{ display: this.state.showItem }}><h4>Advertise</h4></li>
                        <li style={{ display: this.state.showItem }}><img src={"../images/icons8-iphone-32.png"} /></li>
                    </ul>

                    <span><a href="javascript:void(0);" className="icon" onClick={this.dropSideBar}>&#9776;</a></span>
                </div> */}
            </header>
        )
    }
}

export default Header;