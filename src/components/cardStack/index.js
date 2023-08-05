import React from 'react';
// import flights from "../../data/flights.json";
import CarrierCard from '../carrierCard copy';
// import CarrierCard from "../carrierCard";
// import Logo from "../../assets/images/1501.png";


const CardStack = ({ flights, index }) => {
  return (
    // <div className="container-fluid">
    //   <li key={flights.id}>
    //     {flights.carrier}
    //     {flights.arrivalTime}
    //     {flights.flightDuration}
    //     {flights.arrivalTime}
    //   </li>
    // </div>
    // <div className="container-fluid">
    //   <card className="iternary-main-card row my-3">
    //     <span className="iternary-main-card-span col-4">
    //       {/* British Airways logo */}
    //       {/* {flights.carrier} */}
    //       <img
    //         src={flights.carrier}
    //         class="card-img-top"
    //         alt="..."
    //         style={{ width: "15rem", height: "15rem" }}
    //       />
    //     </span>
    //     <span className="iternary-main-card-span col">
    //       <span className="iternary-main-card-innerspan-title">Depart</span>
    //       <span className="iternary-main-card-innerspan-date">11/11/2019</span>
    //       <span className="fs-5">
    //         {/* 7:34PM */}
    //         {flights.arrivalTime}
    //       </span>
    //     </span>
    //     <span className="iternary-main-card-span col fs-6">
    //       <span className="iternary-main-card-innerspan my-2">0 Stops</span>
    //       <span className="iternary-main-card-innerspan-time fs-6">
    //         {/* 6Hours 45mins */}
    //         {flights.flightDuration}
    //       </span>
    //     </span>
    //     <span className="iternary-main-card-span col">
    //       <span className="iternary-main-card-innerspan-title">Arrive</span>
    //       <span className="iternary-main-card-innerspan-date">12/11/2019</span>
    //       <span className="fs-5">
    //         {/* 2:45PM */}
    //         {flights.arrivalTime}
    //       </span>
    //     </span>
    //     <span className="iternary-main-card-span col">
    //       <span className="iternary-main-card-innerspan-title">Price</span>
    //       <span className="iternary-main-card-innerspan-price">
    //         {/* $ 856 */}${flights.price}
    //       </span>
    //     </span>
    //   </card>
    // </div>
    <CarrierCard flights={flights} key={index}/>
  );
}

export default CardStack