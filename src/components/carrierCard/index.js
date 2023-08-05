import React from 'react';

const CarrierCard = ( flight, index ) => {
  
  return (
    <div className="container-fluid">
      <card className="iternary-main-card row my-3">
        <span className="iternary-main-card-span col-4">
          <img
            src={`/images/${flight.carrier}.png`}
            class="card-img-top"
            alt="..."
            style={{ width: "7rem", height: "7rem" }}
          />
        </span>
        <span className="iternary-main-card-span col">
          <span className="iternary-main-card-innerspan-title">Depart</span>
          <span className="iternary-main-card-innerspan-date">11/11/2019</span>
          <span className="fs-5">
            {flight.arrivalTime}
          </span>
        </span>
        <span className="iternary-main-card-span col fs-6">
          <span className="iternary-main-card-innerspan my-2">0 Stops</span>
          <span className="iternary-main-card-innerspan-time fs-6">
            {flight.flightDuration}
          </span>
        </span>
        <span className="iternary-main-card-span col">
          <span className="iternary-main-card-innerspan-title">Arrive</span>
          <span className="iternary-main-card-innerspan-date">12/11/2019</span>
          <span className="fs-5">
            {flight.arrivalTime}
          </span>
        </span>
        <span className="iternary-main-card-span col">
          <span className="iternary-main-card-innerspan-title">Price</span>
          <span className="iternary-main-card-innerspan-price">
          ${flight.price}
          </span>
        </span>
      </card>
    </div>
  );
}

export default CarrierCard