import React from "react";
import {Container, Row} from "react-bootstrap";
import {AskBtn} from "./Styles";
class Question extends React.Component {
    constructor(props){
        super(props);

    }


    render() {
        return (
            <div onClick={this.props.close} style={{display:`${this.props.show?'flex':'none'}`,alignItems:'center',justifyContent:'center',position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:'999',backgroundColor:'rgba(0,0,0,0.5)'}}>
                <div style={{backgroundColor:"white",justifyContent:'center',width:'fit-content',height:'fit-content',padding:'10px'}}>
                    <Container>
                        <Row style={{justifyContent:'space-between'}}>
                            <h4>Ask a question</h4>
                            <h4 onClick={this.props.close} style={{cursor:'pointer'}}>X</h4>
                        </Row>
                    </Container>
                    <img src={'../images/apartment/'+this.props.apt.main_image} style={{width:'300px'}}/>
                    <Container style={{zIndex:'9999',backgroundColor:"lightgray",justifyContent:'center',display:'flex',flexDirection:'column',padding:'5px'}}>
                        <input type={'text'} placeholder={'Full Name'}/>
                        <p>Please enter your full name</p>
                        <input type={'email'} placeholder={'Email'}/>
                        <p>Please enter your email</p>
                        <input type={'text'} placeholder={'Phone'}/>
                        <p>Please enter your phone number</p>
                        <textarea placeholder={'Ask a question'}/>
                        <AskBtn style={{margin:'15px 0'}}>Email Agent</AskBtn>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Question