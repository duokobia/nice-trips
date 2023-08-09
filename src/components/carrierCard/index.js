
const CarrierCard = ( flight, index ) => {
  
  return (
    <div className="itinerary-main-card-container container w-100">
      <card className="itinerary-main-card row my-3 px-0">
        <span className="itinerary-main-card-span col-4">
          <img
            src={`/images/${flight.carrier}.png`}
            class="itinerary-main-card-img"
            alt="carrier-logo"
            style={{ width: "7rem", height: "7rem" }}
          />
        </span>
        <span className="itinerary-main-card-span col-2">
          <span className="itinerary-main-card-innerspan-title">Depart</span>
          <span className="itinerary-main-card-innerspan-date">11/11/2019</span>
          <span className="fs-5">{flight.arrivalTime}</span>
        </span>
        <span className="itinerary-main-card-span col-2 fs-6">
          <span className="itinerary-main-card-innerspan my-2">0 Stops</span>
          <span className="itinerary-main-card-innerspan-time fs-6">
            {flight.flightDuration}
          </span>
        </span>
        <span className="itinerary-main-card-span col-2">
          <span className="itinerary-main-card-innerspan-title">Arrive</span>
          <span className="itinerary-main-card-innerspan-date">12/11/2019</span>
          <span className="fs-5">{flight.arrivalTime}</span>
        </span>
        <span className="itinerary-main-card-span col-2">
          <span className="itinerary-main-card-innerspan-title">Price</span>
          <span className="itinerary-main-card-innerspan-price">
            ${flight.price}
          </span>
        </span>
      </card>
    </div>
  );
}

export default CarrierCard