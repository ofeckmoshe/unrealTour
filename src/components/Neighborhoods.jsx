import React from "react";


class Neighborhoods extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
           <div>
               <div className="container d-none d-md-block">
                   <div className="text-block">
                       <h1 style={{fontSize:'1.5rem'}}>Recommended neighborhoods</h1>
                       <p>Based on your previous search</p>
                   </div>
               </div>
                   <div className="container">
                       <div className="row">
                           <div className="card-deck cards d-flex justify-content-center">
                               <div className="col-md-6 col-lg-3">
                                   <a href="/" style={{textDecoration:'none',color:'black'}}>
                                       <div className="card img-card">
                                           <img
                                               src="https://i.kinja-img.com/gawker-media/image/upload/s--a_cUXmc5--/c_scale,f_auto,fl_progressive,q_80,w_800/icvhxoclqtne3ar2r14t.jpg"
                                               className="card-img-top img-c" alt="..."
                                               style={{maxHeight:"130px"}}/>
                                               <div className="card-body">
                                                   <h5 className="card-title">Upper East Side</h5>
                                                   <p className="card-text"><b>1,588</b> listings for sale</p>
                                                   <p className="card-text">Median listing price <b>$1,475,000</b></p>
                                               </div>
                                       </div>
                                   </a>
                               </div>
                               <div className="col-md-6 col-lg-3">
                                   <a href="/" style={{textDecoration:'none',color:'black'}}>
                                       <div className="card img-card">
                                           <img
                                               src="https://p1cdn4static.civiclive.com/UserFiles/Servers/Server_4323159/Image/Government/Departments/CommDev/Neighborhoods_subdivision-2.jpg"
                                               className="card-img-top img-c" alt="..."
                                               style={{maxHeight:"130px"}}/>
                                               <div className="card-body">
                                                   <h5 className="card-title">Upper West Side</h5>
                                                   <p className="card-text"><b>1,482</b> listings for sale</p>
                                                   <p className="card-text">Median listing price <b>$1,400,000</b></p>
                                               </div>
                                       </div>
                                   </a>
                               </div>
                               <div className="col-md-6 col-lg-3">
                                   <a href="/" style={{textDecoration:'none',color:'black'}}>
                                       <div className="card img-card">
                                           <img
                                               src="https://maps.googleapis.com/maps/api/staticmap?center=40.756253%2C-73.972244&channel=rdc-hp-niq-suggest&client=gme-movesalesinc&key=&scale=2&size=305x150&style=feature%3Apoi%7Cvisibility%3Aoff&visible=40.756253%2C-73.972244&zoom=14&markers=color%3Ared%7C40.756253%2C-73.972244&signature=-bIN3EjkkCRM0lWUoSAwDJT2PRM="
                                               className="card-img-top img-c" alt="..."
                                               style={{maxHeight:"130px"}}/>
                                               <div className="card-body">
                                                   <h5 className="card-title">Midtown East</h5>
                                                   <p className="card-text"><b>859</b> listings for sale</p>
                                                   <p className="card-text">Median listing price <b>$1,050,000</b></p>
                                               </div>
                                       </div>
                                   </a>
                               </div>
                               <div className="col-md-6 col-lg-3">
                                   <a href="/" style={{textDecoration:'none',color:'black'}}>
                                       <div className="card img-card">
                                           <img
                                               src="https://maps.googleapis.com/maps/api/staticmap?center=40.74731%2C-74.000915&channel=rdc-hp-niq-suggest&client=gme-movesalesinc&key=&scale=2&size=305x150&style=feature%3Apoi%7Cvisibility%3Aoff&visible=40.74731%2C-74.000915&zoom=14&markers=color%3Ared%7C40.74731%2C-74.000915&signature=lMnGy15cbxg1k5WqWltrunPqPM0="
                                               className="card-img-top img-c" alt="..."
                                               style={{maxHeight:"130px"}}/>
                                               <div className="card-body">
                                                   <h5 className="card-title">Celsea</h5>
                                                   <p className="card-text"><b>498</b> listings for sale</p>
                                                   <p className="card-text">Median listing price <b>$1,875,000</b></p>
                                               </div>
                                       </div>
                                   </a>
                               </div>
                           </div>
                       </div>
                   </div>
           </div>
        )
    }
}

export default Neighborhoods