import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";

const Iternary = () => {
  return (
    <section className="iternary-container container-fluid px-0">
      <header className="iternary-header row">
        <div className="col-5">
          <h3 className="search col-md-12 mt-5 fs-2 ms-4">Search results</h3>
          <span className="iternary-header-results-found col-md-12 mb-5 fs-6 ms-4">
            We found 15 results
          </span>
        </div>
        <nav className="col-7 mx-0">
          <ul className="row d-flex flex-row pe-5">
            <li selected>
              <a
                href="/"
                className="iternary-header-btn btn btn-sm btn-outline-secondary"
              >
                CHEAPEST
              </a>
            </li>
            <li>
              <a
                href="/"
                className="iternary-header-btn btn btn-sm btn-outline-secondary"
              >
                SHORTEST
              </a>
            </li>
            <li>
              <a
                href="/"
                className="iternary-header-btn btn btn-sm btn-outline-secondary"
              >
                RECOMMENDED
              </a>
            </li>
          </ul>
        </nav>
        <card className="iternary-header-card row my-3 ms-4 ps-0">
          <span className="iternary-header-card-span fs-2">
            <span>London</span>
            <BiRightArrowAlt className="iternary-header-card-icon mx-4" />
            <span>New York</span>
          </span>
        </card>
      </header>
      <main className="iternary-main row">
        <card className="iternary-main-card row my-3">
          <span className="iternary-main-card-span col-4">
            British Airways logo
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Depart</span>
            <span className="iternary-main-card-innerspan-date">
              11/11/2019
            </span>
            <span className="fs-5">7:34PM</span>
          </span>
          <span className="iternary-main-card-span col fs-6">
            <span className="iternary-main-card-innerspan my-2">0 Stops</span>
            <span className="iternary-main-card-innerspan-time fs-6">
              6Hours 45mins
            </span>
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Arrive</span>
            <span className="iternary-main-card-innerspan-date">
              12/11/2019
            </span>
            <span className="fs-5">2:45PM</span>
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Price</span>
            <span className="iternary-main-card-innerspan-price">$ 856</span>
          </span>
        </card>
        <card className="iternary-main-card row my-3">
          <span className="iternary-main-card-span col-4">
            British Airways logo
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Depart</span>
            <span className="iternary-main-card-innerspan-date">
              11/11/2019
            </span>
            <span className="fs-5">7:34PM</span>
          </span>
          <span className="iternary-main-card-span col fs-6">
            <span className="iternary-main-card-innerspan my-2">0 Stops</span>
            <span className="iternary-main-card-innerspan-time fs-6">
              6Hours 45mins
            </span>
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Arrive</span>
            <span className="iternary-main-card-innerspan-date">
              12/11/2019
            </span>
            <span className="fs-5">2:45PM</span>
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Price</span>
            <span className="iternary-main-card-innerspan-price">$ 856</span>
          </span>
        </card>
        <card className="iternary-main-card row my-3">
          <span className="iternary-main-card-span col-4">
            British Airways logo
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Depart</span>
            <span className="iternary-main-card-innerspan-date">
              11/11/2019
            </span>
            <span className="fs-5">7:34PM</span>
          </span>
          <span className="iternary-main-card-span col fs-6">
            <span className="iternary-main-card-innerspan my-2">0 Stops</span>
            <span className="iternary-main-card-innerspan-time fs-6">
              6Hours 45mins
            </span>
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Arrive</span>
            <span className="iternary-main-card-innerspan-date">
              12/11/2019
            </span>
            <span className="fs-5">2:45PM</span>
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Price</span>
            <span className="iternary-main-card-innerspan-price">$ 856</span>
          </span>
        </card>
        <card className="iternary-main-card row my-3">
          <span className="iternary-main-card-span col-4">
            British Airways logo
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Depart</span>
            <span className="iternary-main-card-innerspan-date">
              11/11/2019
            </span>
            <span className="fs-5">7:34PM</span>
          </span>
          <span className="iternary-main-card-span col fs-6">
            <span className="iternary-main-card-innerspan my-2">0 Stops</span>
            <span className="iternary-main-card-innerspan-time fs-6">
              6Hours 45mins
            </span>
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Arrive</span>
            <span className="iternary-main-card-innerspan-date">
              12/11/2019
            </span>
            <span className="fs-5">2:45PM</span>
          </span>
          <span className="iternary-main-card-span col">
            <span className="iternary-main-card-innerspan-title">Price</span>
            <span className="iternary-main-card-innerspan-price">$ 856</span>
          </span>
        </card>
      </main>
    </section>
  );
}

export default Iternary