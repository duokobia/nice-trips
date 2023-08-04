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
    <section className="booking-container container px-0">
      <header className="booking-header row">
        <h3 className="logo col-md-12 my-5 fs-2 ms-4">Nice Trips</h3>
        <nav className="booking-header-navlist row mx-0">
          <ul>
            <li className="navListBtn" selected>
              <a href="/">
                <MdFlight />
                <span>Flight</span>
              </a>
            </li>
            <li>
              <a href="/">
                <MdTrain />
                <span>Trains</span>
              </a>
            </li>
            <li>
              <a href="/">
                <RiShipFill />
                <span>Ship</span>
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillCar />
                <span>Cars</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="booking-main row mx-4">
        <card className="booking-header-card row my-3">
          <h1 className="form-header col-md-12 fs-1">Best flight deals with</h1>
          <h2 className="form-logo col-md-12 fs-1">Nice Trips</h2>
        </card>
        <form>
          <div className="mb-4">
            <label for="exampleInputEmail1" className="form-label">
              Depart from
              <MdFlightTakeoff />
              <MdFlightLand />
              <BsFillPersonFill />
              <MdOutlineCalendarMonth />
            </label>
            <input
              type="email"
              className="form-control py-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="London - All Airports, England, UK"
            />
          </div>
          <div class="mb-4">
            <label for="exampleInputPassword1" className="form-label">
              Arrive at
            </label>
            <input
              type="password"
              className="form-control py-3"
              id="exampleInputPassword1"
              placeholder="New York - All Airports, New York, USA"
            />
          </div>
          <div className="row mb-4 form-datepicker">
            <div className="col">
              <label for="date" className="col-6 col-form-label">
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
                    id="date"
                    placeholder="11/11/2019"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <label for="date" className="col-6 col-form-label">
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
                    id="date"
                    placeholder="30/11/2019"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4 form-classpassenger">
            <div className="form-class col-6">
              <label for="date" className="col-6 col-form-label">
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
              <label for="date" className="col-6 col-form-label">
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