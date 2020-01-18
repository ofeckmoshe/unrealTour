import React from "react";
import "./footer.css";

class Footer extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <div className="row links">
                    <div className="col-12 col-md-6 col-lg-3">
                        <img src="../images/nar-logo.png"/>
                            <p className="first-text">Find out how the NAR works for consumers and REALTORS®</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <p><b>Learn About N.A.R</b></p>
                        <ul>
                            <li><a href="/">About NAR</a></li>
                            <li><a href="/">Agent vs. REALTOR®</a></li>
                            <li><a href="/">Find an Appraiser</a></li>
                            <li><a href="/">Commercial Services</a></li>
                            <li><a href="/">NAR Global Alliances</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <p><b>For Homeowners</b></p>
                        <ul>
                            <li><a href="/">Dreamy Ways to Add Functionality to Your Outdoor Space</a></li>
                            <li><a href="/">Why Use a REALTOR® with the MRP?</a></li>
                            <li><a href="/">Real Estate Today Radio</a></li>
                            <li><a href="/">REALTORS® Relief Foundation</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <p><b>For REALTORS®</b></p>
                        <ul>
                            <li><a href="/">NAR’s iOi Summit: Innovation Worth Exploring</a></li>
                            <li><a href="/">Earn free business boosting rewards with MVP!</a></li>
                            <li><a href="/">REALTOR Benefits® Program</a></li>
                            <li><a href="/">Center for REALTOR® Development</a></li>
                        </ul>
                    </div>
                </div>


                <div className="footer">
                    <div className="footer-images row">
                        <div className="col-12 col-md-6">
                            <a href="/"><img src="../images/f.png"/></a>
                            <a href="/"><img src="../images/b.png"/></a>
                            <a href="/"><img src="../images/i.png"/></a>
                            <a href="/"><img src="../images/c.png"/></a>
                            <a href="/"><img src="../images/p.png"/></a>
                            <a href="/"><img src="../images/u.png"/></a>
                        </div>
                        <div className="col-12 col-md-6 logos row justify-content-end">
                            <a href="/"><img src="../images/WhatsApp Image 2019-09-12 at 16.08.38.jpeg"/></a>
                            <a href="/"><img src="../images/WhatsApp Image 2019-09-12 at 16.08.44.jpeg"/></a>
                        </div>
                    </div>
                    <div className="foot-links">
                        <ul className="row">
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Feedback</a></li>
                            <li><a href="/">Media room</a></li>
                            <li><a href="/">Ad Choices</a></li>
                            <li><a href="/">Advertise with us</a></li>
                            <li><a href="/">Agent support</a></li>
                            <li><a href="/">Privacy</a></li>
                            <li><a href="/">Terms</a></li>
                            <li><a href="/">Home Made</a></li>
                            <li><a href="/">Tech Blog</a></li>
                            <li><a href="/">Sitemap</a></li>
                        </ul>
                        <p>PRODUCTS</p>
                        <ul className="row">
                            <li><a href="/">Leads & Branding</a></li>
                            <li><a href="/">ListHub</a></li>
                            <li><a href="/">Top Producer</a></li>
                            <li><a href="/">Market Snapshot</a></li>
                            <li><a href="/">FiveStreet</a></li>
                            <li><a href="/">Move.com</a></li>
                            <li><a href="/">Relocation</a></li>
                            <li><a href="/">Moving.com</a></li>
                            <li><a href="/">International</a></li>
                            <li><a href="/">SeniorHousingNet.com</a></li>
                            <li><a href="/">Doorsteps</a></li>
                            <li><a href="/">Remodelista</a></li>
                            <li><a href="/">Gardenista</a></li>
                        </ul>
                        <p>NEWS CORP</p>
                        <ul className="row">
                            <li><a href="/">Barrons</a></li>
                            <li><a href="/">Checkout 51</a></li>
                            <li><a href="/">Financial News</a></li>
                            <li><a href="/">Harper Collins</a></li>
                            <li><a href="/">Mansion Global</a></li>
                            <li><a href="/">Market Watch</a></li>
                            <li><a href="/">New York Post</a></li>
                            <li><a href="/">REA Group</a></li>
                            <li><a href="/">Storyful</a></li>
                            <li><a href="/">Wall Street Journal</a></li>
                            <li><a href="/">Makaan.com</a></li>
                            <li><a href="/">Housing.com</a></li>
                            <li><a href="/">PropTiger.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer