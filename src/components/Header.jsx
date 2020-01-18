import React from "react";
import "./Header.css";
import { navigation } from "./navigation.js";
import {Fade,Col,Row} from 'react-bootstrap';
import SingUp from './signUp'
// import {LogInBtn,FbBtn,SignOrLog} from './Styles'
// import {Link} from "react-router-dom";
import Login from './login'
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
            signUp:false,
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

    openSignUp = () =>{
        this.setState({signUp:!this.state.signUp})
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
                                <Login/>
                            }
                        </li>
                        <li style={{display:this.state.showItem}} class="d-none d-xl-block" onClick={this.openSignUp}><h4>Sign Up</h4></li>
                        {this.state.signUp&&<SingUp/>}
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