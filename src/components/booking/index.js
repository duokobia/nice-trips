import React from 'react';
import { SlCalender } from "react-icons/sl";
import {
  MdFlight,
  MdFlightTakeoff,
  MdFlightLand,
  MdTrain,
  MdOutlineCalendarMonth,
} from "react-icons/md";
import { RiShipFill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Booking = () => {
  return (
    <section className="booking-container container-fluid px-0">
      <header className="booking-header w-100 row">
        <h3 className="logo col-md-12 my-5 fs-2 ms-4">Nice Trips</h3>
        <nav className="row mx-0 px-0">
          <ul className="col-12">
            <li className="booking-header-navlist py-4 d-inline-block" selected>
              <a href="/" class="text-decoration-none">
                <MdFlight className="fs-3" />
                <span>Flight</span>
              </a>
            </li>
            <li className="booking-header-navlist py-4 d-block">
              <a href="/" class="text-decoration-none">
                <MdTrain className="fs-3" />
                <span>Trains</span>
              </a>
            </li>
            <li className="booking-header-navlist py-4 d-block">
              <a href="/" class="text-decoration-none">
                <RiShipFill className="fs-3" />
                <span>Ship</span>
              </a>
            </li>
            <li className="booking-header-navlist py-4 d-block">
              <a href="/" class="text-decoration-none">
                <AiFillCar className="fs-3" />
                <span>Cars</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="booking-main row mx-4">
        <card className="booking-header-card row mt-4 mb-4">
          <h1 className="form-header col-md-12 fs-1">Best flight deals with</h1>
          <h2 className="form-logo col-md-12 fs-1">Nice Trips</h2>
        </card>
        <form>
          <div className="mb-4">
            <label for="departFrom" className="form-label">
              Depart from
              <MdFlightTakeoff />
              <MdFlightLand />
              <BsFillPersonFill />
              <MdOutlineCalendarMonth />
            </label>
            <input
              type="email"
              className="form-control py-3"
              id="departFrom"
              aria-describedby="departureHelp"
              placeholder="London - All Airports, England, UK"
            />
          </div>
          <div class="mb-4">
            <label for="arrivalAt" className="form-label">
              Arrive at
            </label>
            <input
              type="password"
              className="form-control py-3"
              id="arrivalAt"
              placeholder="New York - All Airports, New York, USA"
            />
          </div>
          <div className="row mb-4 form-datepicker">
            <div className="col">
              <label for="departureDate" className="col-6 col-form-label">
                Departure date
              </label>
              <div className="col-12">
                <div className="input-group date" id="datepicker">
                  <span className="input-group-append">
                    <span className="input-group-text bg-light d-block fs-2">
                      <SlCalender />
                    </span>
                  </span>
                  <input
                    type="text"
                    className="form-control py-2"
                    id="departureDate"
                    placeholder="11/11/2019"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <label for="returnDate" className="col-6 col-form-label">
                Return date
              </label>
              <div className="col-12">
                <div className="input-group date" id="datepicker">
                  <span className="input-group-append">
                    <span className="input-group-text bg-light d-block fs-2">
                      <SlCalender />
                    </span>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="returnDate"
                    placeholder="30/11/2019"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4 form-classpassenger">
            <div className="form-class col-6">
              <label for="classOfSeat" className="col-6 col-form-label">
                Class
              </label>
              <select
                className="form-select form-select-lg form-option col-12 mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>Economy</option>
                <option value="1">First</option>
                <option value="2">Business</option>
                <option value="3">Economy</option>
              </select>
            </div>
            <div className="form-passengers col-6">
              <label for="numberOfPassengers" className="col-6 col-form-label">
                Passengers
              </label>
              <select
                className="form-select form-select-lg form-option col-12 mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>2</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 py-3">
            FIND FLIGHT
          </button>
        </form>
      </main>
    </section>
  );
}

export default Booking