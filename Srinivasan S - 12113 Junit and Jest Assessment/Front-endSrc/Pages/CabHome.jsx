import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import CabService from "../Service/CabService";

function CabHome() {
  // view all details

  var navigate = useNavigate();

  const [all, setAll] = useState([]);

  const loadDetails = async (e) => {
    await CabService.getAllCab()
      .then((res) => setAll(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadDetails();
  }, []);

  // to view particular data

  const [viewdetails, setViewdetails] = useState({});

  const handleView = (cabId) => {
    console.log(cabId);
    console.log(viewdetails);
    CabService.getCabById(cabId).then((response) => {
      setViewdetails(response.data);
      console.log(response.data);
    });
    handleShow();
  };

  //for modal box
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const values = [true];

  // const handleClose = () => set;

  const handleClose = () => setShow(false);
  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  // for search
  const [search, setSearch] = useState("");
  const [cab, setCab] = useState([]);
  // console.log(search);

  const [search1, setSearch1] = useState("");
  const [cab1, setCab1] = useState([]);

  const handleSubmit = (e) => {
    setSearch(e.target.value);
    onSearch();
  };

  const handleSubmit1 = (e) => {
    setSearch1(e.target.value);
    onSearch1();
  };

  const onSearch = async () => {
    await CabService.getPickUpLoc()
      .then((result) => {
        // console.log(result.status);
        setCab(result.data);
      })
      .catch((err) => console.log(err));
  };
  const onSearch1 = async () => {
    await CabService.getCabByDrop()
      .then((result) => {
        // console.log(result.status);
        setCab1(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid ">
      <nav
        className="navbar navbar-expand-lg navbar navbar-dark bg-success "
        id="navbar"
      >
        <a className="navbar-brand p-1 " href="/" data-testid="title">
          <b> Online Taxi Booking Management System</b>
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav"></div>
        </div>
      </nav>

      <div className="container-fluid col-8 ">
        <form class="form-inline mb-4">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search by pickup location..."
            aria-label="Search"
            id="search"
            onChange={(e) => handleSubmit(e)}
          />
        </form>
        <form class="form-inline mb-4">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search by drop location..."
            aria-label="Search"
            id="search1"
            onChange={(e) => handleSubmit1(e)}
          />
        </form>
        <div>
          <Link className="btn btn-outline-secondary btn-md" to="/" id="back">
            Back
          </Link>
        </div>
        <div role="customer">
          <Link className="btn btn-success btn-sm " to="/custhome" id="deptbut">
            Go to Customer Page
          </Link>
        </div>
        <div role="booking">
          <Link className="btn btn-success btn-sm " to="/" id="paybut">
            Go to Booking Page
          </Link>
        </div>
        <table className="table table-striped border shadow " id="hometable">
          <thead className="table-success ">
            <tr>
              <th scope="col">Cab Id</th>
              <th scope="col">Cab number</th>
              <th scope="col">Cab Type</th>
              <th scope="col">Cab Capacity</th>
              <th scope="col">Pickup Location</th>
              <th scope="col">Drop Location</th>
              <th scope="col">Rate Per km</th>
              <th scope="col">Add</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {all
              .filter((index) => {
                return search
                  .toUpperCase()
                  .split(" ")
                  .every(
                    (filterVal) =>
                      index.pickupLocation.toUpperCase().indexOf(filterVal) > -1
                  );
              })
              .filter((index) => {
                return search1
                  .toUpperCase()
                  .split(" ")
                  .every(
                    (filterVal) =>
                      index.dropLocation.toUpperCase().indexOf(filterVal) > -1
                  );
              })
              .map((stud, index) => (
                <tr>
                  <th key={index}>{stud.cabId}</th>

                  <td>{stud.cabNo}</td>
                  <td>{stud.cabType}</td>
                  <td>{stud.cabCapacity}</td>
                  <td>{stud.pickupLocation}</td>
                  <td>{stud.dropLocation}</td>
                  <td>{stud.ratePerkm}</td>
                  <td>
                    <div role="book">
                      <Link
                        to={`/addBook/${stud.cabId}`}
                        className="btn btn-warning"
                      >
                        Book
                      </Link>
                    </div>
                  </td>

                  <td>
                    <>
                      {values.map((v, idx) => (
                        <Button
                          key={idx}
                          className="me-2 mb-2"
                          variant="secondary"
                          onClick={() => handleView(stud.cabId)}
                        >
                          View
                          {typeof v === "string" && `below ${v.split("-")[0]}`}
                        </Button>
                      ))}

                      <Modal
                        show={show}
                        // fullscreen={fullscreen}
                        onHide={() => setShow(false)}
                        id="cabbody"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Cab Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Table
                              className="table table-striped border shadow striped"
                              id="viewcabtable"
                            >
                              <thead>
                                <tr>
                                  <th scope="col">Cab Id</th>
                                  <th scope="col">Cab number</th>
                                  <th scope="col">Cab Type</th>
                                  <th scope="col">Cab Capacity</th>
                                  <th scope="col">Pickup </th>
                                  <th scope="col">Drop </th>
                                  <th scope="col">Rate Per km</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{viewdetails.cabId}</td>
                                  <td>{viewdetails.cabNo}</td>
                                  <td>{viewdetails.cabType}</td>
                                  <td>{viewdetails.cabCapacity}</td>
                                  <td>{viewdetails.pickupLocation}</td>
                                  <td>{viewdetails.dropLocation}</td>
                                  <td>{viewdetails.ratePerkm}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Form>
                        </Modal.Body>
                      </Modal>
                    </>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CabHome;
