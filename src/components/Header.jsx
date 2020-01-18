import React from "react";
import "./Header.css";
import { navigation } from "./navigation.js";
import {Fade,Col,Row} from 'react-bootstrap';
import {LogInBtn,FbBtn,SignOrLog} from './Styles'
class Links extends React.Component{
    constructor(props){
        super(props);
        this.state={
            toggle:false
        }
    }

    render() {
        return(
            <div className="dropdown">
                    <ul className={"listContent"}>
                    {this.props.innerMenu && this.props.innerMenu.map((innerNavItem) => {
                        return(
                            <div>
                                {innerNavItem.map((listItem,i) => {
                                    return(
                                        <li key = {i} className={"contentBlock"}>
                                            <a href={listItem.href ? listItem.href : "javascript:void(0)"}>
                                                {listItem.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bar:false,
            toggle:false,
            active:null,
            logIn:false,
            showItem:"block"
        }
    }
    dropSideBar = () => {
        this.setState({
            toggle:!this.state.toggle,
            showItem:`${this.state.showItem === "block" ? "none":"block"}`
        })
    };

    changeActive = (index) => {
        this.setState({
            active:index
        })
    };

    openLogIn = () =>{
        this.setState({logIn:!this.state.logIn})
    };

    render() {
        const{toggle} = this.state;
        return(
            <header id={"header"}>
                <div className={toggle ? 'responsive topnav':'topnav'} id="responsiveBar">
                    <a href="/" className="active"><img src={"../images/logo.png"}/></a>
                    <ul className={"buttons dropbtn "} style={{display: "flex",justifyContent:"space-between"}}>
                        {navigation.map((data,i) => {
                            return (
                                <li key={i} onMouseOver={() => this.changeActive(i)} onMouseOut={() => this.changeActive(-1)} >
                                    <h4 >{data.label}</h4>
                                    <Fade unmountOnExit={true} in={this.state.active === i}><Links innerMenu={data.innerMenu}/></Fade>
                                </li>
                            );
                        })}
                        <li style={{display:this.state.showItem}} class="d-none d-lg-block">
                            <h4 onClick={this.openLogIn}>Log In</h4>
                            {this.state.logIn &&
                            <SignOrLog>
                                <Col type={"8"}>
                                    <h4 style={{color:"black"}}>Log in to your account</h4>
                                    <input type={"email"} placeholder={"Email"} style={{margin:"10px 0"}}/>
                                    <input type={"password"} placeholder={"Password"}/>
                                    <a style={{color:"gray"}} href={"/"}>forgot password?</a>
                                    <LogInBtn>Log In</LogInBtn>
                                    <FbBtn>Log In With Facebook</FbBtn>
                                </Col>
                                <Col type={"4"}>
                                    <h4 style={{color:"black"}}><a style={{color:"red"}} href={"/"}>No account? Sign Up</a></h4>
                                    <img src={"../images/84e94sp.png"}/>
                                    <img src={"../images/nar-logo.png"} style={{maxWidth:"250px"}}/>
                                    <h4 onClick={this.openLogIn}>
                                        <i style={{fontSize:"24px",position:"absolute",top:"0",right:"40px",color:"black"}} className="fa">&#xf00d;</i>
                                    </h4>
                                </Col>
                            </SignOrLog>
                            }
                        </li>
                        <li style={{display:this.state.showItem}} class="d-none d-xl-block"><h4>Sign Up</h4></li>
                        <li style={{display:this.state.showItem}} class="d-none d-xl-block"><h4> | </h4></li>
                        <li style={{display:this.state.showItem}} class="d-none d-xl-block"><h4>Advertise</h4></li>
                        <li style={{display:this.state.showItem}} class="d-none d-xl-block"><img src={"../images/icons8-iphone-32.png"}/></li>
                    </ul>

                    <span><a href="javascript:void(0);" className="icon" onClick={this.dropSideBar}>&#9776;</a></span>
                </div>
            </header>
        )}
}

export default Header;