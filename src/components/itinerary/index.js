import { BiRightArrowAlt } from "react-icons/bi";
import CarrierCard from '../carrierCard';
import flights  from "../../assets/data/flights.json";
import DataTable from "react-data-table-component";

const Itinerary = () => {
  const column = [
    {
      name: "",
      selector: (row) => {
        console.log(row);
        return CarrierCard(row);
      },
      width: "100%",
    },
  ];
  return (
    <section className="itinerary-container container-fluid">
      <header className="itinerary-header row">
        <div className="col-5">
          <h3 className="search col-md-12 mt-5 fs-2 ms-4">Search results</h3>
          <span className="itinerary-header-results-found col-md-12 mb-5 fs-6 ms-4">
            We found 15 results
          </span>
        </div>
        <nav className="col-7 mx-0">
          <ul className="row d-flex flex-row pe-5">
            <li selected>
              <a
                href="/"
                className="itinerary-header-btn btn btn-sm btn-outline-secondary"
              >
                CHEAPEST
              </a>
            </li>
            <li>
              <a
                href="/"
                className="itinerary-header-btn btn btn-sm btn-outline-secondary"
              >
                SHORTEST
              </a>
            </li>
            <li>
              <a
                href="/"
                className="itinerary-header-btn btn btn-sm btn-outline-secondary"
              >
                RECOMMENDED
              </a>
            </li>
          </ul>
        </nav>
        <card className="itinerary-header-card row my-3 ms-4 ps-0">
          <span className="itinerary-header-card-span fs-2">
            <span>London</span>
            <BiRightArrowAlt className="itinerary-header-card-icon mx-4" />
            <span>New York</span>
          </span>
        </card>
      </header>
      <main className="itinerary-main container-fluid">
        <div className="row mx-0 px-0">
          <div className="col">
            <DataTable
              columns={column}
              data={flights}
              pagination
              noTableHead={true}
              paginationPerPage={4}
              className="d-flex mx-0 px-0"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Itinerary;