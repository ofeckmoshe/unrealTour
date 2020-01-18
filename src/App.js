import React from 'react';
import logo from './logo.svg';
import GalleryWrapper from "./components/GalleryWrapper";
import Apartment from "./components/apartment";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Filters from "./components/Filters";
import Footer from "./components/Footer";

class App extends React.Component{
  render() {
    const {items} = this.props;
    return (
        <Router>
            <Header/>
            <Switch>
                {/*<Route path={"/Filters"} component={Filters} />*/}
                <Route path={"/Filters"} component={(props) => <Filters data={props.location.state.test}/>}/>

                <Route path={"/apartment/:id"} component={Apartment}/>
                <Route path="/" component={GalleryWrapper}/>

            </Switch>
            <Footer/>

        </Router>
    );
  }
}


export default App;