import React from 'react';

export default function Products(props) {
    return (
        <div style={{display: 'flex',justifyContent: 'space-around'}}>
        <div className="card" style={{width: '40rem'}}>
       <iframe title="Video1"  className="card-img-top" width="560" height="315" src="https://www.youtube.com/embed/11jFoIWxx24?start=5" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div className="card-body">
    <h5 className="card-title">H&M Studio</h5>
    <p className="card-text">Fall/Winter 2017/2018 - Fashion Show - Paris Fashion Week</p>
  </div>
</div>
        <div className="card" style={{width: '40rem'}}>
        <iframe title="Video 2" className="card-img-top" width="560" height="315" src="https://www.youtube.com/embed/XrmC3RvSphU?start=5" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <div className="card-body">
     <h5 className="card-title">Hermes</h5>
     <p className="card-text">Spring Summer 2019 Full Fashion Show | Menswear</p>
   </div>
 </div>
 </div>
    )
}