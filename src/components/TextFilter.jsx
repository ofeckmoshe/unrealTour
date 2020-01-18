import React from "react";
import { apartments, cities } from "./apartments";
import { Form, Col } from 'react-bootstrap';
// import Gallery from "./Gallery";

let newApartments = apartments;
class TextFilter extends React.Component {
    constructor() {
        super();

        this.state = {
            // city : "",
            priceSelect: false,
        }

    }



    render() {
        // const {city} = this.state;
        // console.log(this.props.cities)
        const citiesArr = [];
        for(var city in this.props.cities){
            citiesArr.push(this.props.cities[city].name);
            // console.log(this.props.cities[city].name)
        }
        return (
            <div style={{ paddingTop: "10px" }}>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select" name={"city"} onSelect={this.props.hendleChanges} onChange={this.props.hendleChanges}>
                        <option value={""} >Choose...</option>
                            {citiesArr.map((city,i) => {
                                return (
                                <option key={i} value={city}>{city}</option>
                                )
                            })}
                        </Form.Control>
                </Form.Group>
                {/* </form> */}
            </div>
        )
    }
}

export default TextFilter;