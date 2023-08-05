import { BiRightArrowAlt } from "react-icons/bi";
import CarrierCard from '../carrierCard';
import flights  from "../../assets/data/flights.json";
import DataTable from "react-data-table-component";

const Iternary = () => {

  const column = [
    {
      name: "",
      selector: (row) => {
        console.log(row);
        return CarrierCard(row);
      },
      // width: "100%",
      minWidth: "100%",
    },
  ];
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
        <DataTable
          columns={column}
          data={flights}
          pagination
          noTableHead={true}
          paginationPerPage={4}
        />
        {/* {flights.map(CarrierCard)} */}
      </main>
    </section>
  );
}

export default Iternary