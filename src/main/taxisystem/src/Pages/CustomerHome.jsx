import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import CustomerService from "../Service/CustomerService";

function CustomerHome() {
  // view all details

  // var navigate = useNavigate();

  const [all, setAll] = useState([]);

  useEffect(() => {
    const loadDetails = async (e) => {
      await CustomerService.getAllCust()
        .then((res) => setAll(res.data))
        .catch((err) => console.log(err));
    };

    loadDetails();
  }, []);

  // to view particular data

  const [viewdetails, setViewdetails] = useState({});

  const handleView = (customerId) => {
    console.log(customerId);
    console.log(viewdetails);
    CustomerService.getBusById(customerId).then((response) => {
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

  // const handleClose = () => setShow(false);
  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  // for search
  const [search, setSearch] = useState("");
  const setCustomer = [];
  // console.log(search);

  const handleSubmit = (e) => {
    setSearch(e.target.value);
    onSearch();
  };

  const onSearch = async () => {
    await CustomerService.getBusById()
      .then((result) => {
        console.log(result.status);
        setCustomer(result.data);
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
            placeholder="Search by id..."
            aria-label="Search"
            id="search"
            onChange={(e) => handleSubmit(e)}
          />
        </form>
        <div>
          <Link className="btn btn-outline-secondary btn-md" to="/" id="back">
            Back
          </Link>
        </div>
        <div
        // role="cab"
        >
          <Link className="btn btn-success btn-sm " to="/cabhome" id="deptbut">
            Go to Cab Page
          </Link>
        </div>
        <div
        // role="booking"
        >
          <Link className="btn btn-success btn-sm " to="/" id="paybut">
            Go to Booking Page
          </Link>
        </div>
        <table className="table table-striped border shadow " id="hometable">
          <thead className="table-success ">
            <tr>
              <th scope="col">Customer Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Mobile no</th>

              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {all
              // by employee id
              .filter((index) => {
                return !search || index.customerId === search;
              })
              .map((stud, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {stud.customerId}
                  </th>

                  <td>{stud.customerName}</td>
                  <td>{stud.phnNo}</td>

                  <td>
                    <>
                      {values.map((v, idx) => (
                        <Button
                          key={idx}
                          className="me-2 mb-2"
                          variant="secondary"
                          onClick={() => handleView(stud.customerId)}
                        >
                          View
                          {typeof v === "string" && `below ${v.split("-")[0]}`}
                        </Button>
                      ))}

                      <Modal
                        show={show}
                        fullscreen={fullscreen}
                        onHide={() => setShow(false)}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Customer Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Table
                              className="table table-striped border shadow striped"
                              id="custviewtable"
                            >
                              <thead>
                                <tr>
                                  <th scope="col">Customer Id</th>
                                  <th scope="col">Customer Name</th>
                                  <th scope="col">Mobile no</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{viewdetails.customerId}</td>
                                  <td>{viewdetails.customerName}</td>
                                  <td>{viewdetails.phnNo}</td>
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

export default CustomerHome;
