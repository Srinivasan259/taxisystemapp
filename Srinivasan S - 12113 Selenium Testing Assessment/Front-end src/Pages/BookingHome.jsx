import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import BookingService from "../Service/BookingService";

function BookingHome() {
  // view all details

  var navigate = useNavigate();

  const [all, setAll] = useState([]);

  const loadDetails = async (e) => {
    await BookingService.getAllBooking().then((res) => setAll(res.data))
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadDetails();
  }, []);

  // to view particular data

  const [viewdetails, setViewdetails] = useState({});

  const handleView = (bookingId) => {
    console.log(bookingId);
    console.log(viewdetails);
    BookingService.getBookingById(bookingId).then((response) => {
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
  const [booking, setBooking] = useState([]);
  // console.log(search);

  const handleSubmit = (e) => {
    setSearch(e.target.value);
    onSearch();
  };

  const onSearch = async () => {
    await BookingService.getBusById().then((result) => {
      console.log(result.status);
      setBooking(result.data);
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
      </nav>

      <div className="container-fluid col-8 ">
        <form class="form-inline mb-4">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search by id..."
            aria-label="Search"
            id="search"
            title="search"
            onChange={(e) => handleSubmit(e)}
          />
        </form>
        <div>
          <Link
            className="btn btn-outline-secondary btn-md"
            to="/"
            id="back"
            role="back"
          >
            Back
          </Link>
        </div>
        <div role="customer">
          <Link className="btn btn-success btn-sm " to="/custhome" id="deptbut">
            Go to Customer Page
          </Link>
        </div>
        <div role="cab">
          <Link className="btn btn-success btn-sm " to="/cabhome" id="paybut">
            Go to Cab Page
          </Link>
        </div>
        <table className="table table-striped border shadow " id="hometable">
          <thead className="table-success ">
            <tr>
              <th scope="col">Booking Id</th>

              <th scope="col">Booking Status</th>
              <th scope="col">Customer Id</th>
              <th scope="col">Cab Id</th>

              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {all
              // by employee id
              .filter((index) => {
                return !search || index.bookingId == search;
              })
              .map((stud, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {stud.bookingId}
                  </th>

                  <td>{stud.bookingStatus}</td>
                  <td>{stud.customer.customerId}</td>
                  <td>{stud.cab.cabId}</td>

                  <td>
                    <>
                      {values.map((v, idx) => (
                        <div role="viewbutton">
                          <Button
                            key={idx}
                            role="viewbutton"
                            className="me-2 mb-2"
                            variant="secondary"
                            onClick={() => handleView(stud.bookingId)}
                          >
                            View
                            {typeof v === "string" &&
                              `below ${v.split("-")[0]}`}
                          </Button>
                        </div>
                      ))}

                      <Modal
                        show={show}
                        fullscreen={fullscreen}
                        onHide={() => setShow(false)}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Booking Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Table
                              className="table table-striped border shadow striped"
                              id="viewtable"
                            >
                              <thead>
                                <tr>
                                  <th scope="col">Booking Id</th>

                                  <th scope="col">Booking Status</th>
                                  <th scope="col">Customer Id</th>
                                  <th scope="col">Cab Id</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{viewdetails.bookingId}</td>

                                  <td>{viewdetails.bookingStatus}</td>
                                  <td>{stud.customer.customerId}</td>
                                  <td>{stud.cab.cabId}</td>
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

export default BookingHome;
