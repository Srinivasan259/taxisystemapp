import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import CabService from "../Service/CabService";
import CustomerService from "../Service/CustomerService";
import BookingService from "../Service/BookingService";

function AddBooking() {
  var navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);

  const [booking, setBooking] = React.useState({
    bookingId: "",
    pickupLocation: "",
    dropLocation: "",
    bookingStatus: "",

    customer: {
      customerId: "",
    },
    cab: {
      cabId: id,
    },
  });

  const onRegChange = (e) => {
    if (e.target.name === "customerId") {
      console.log(e.target.name);
      setBooking({ ...booking, customer: { customerId: e.target.value } });
    } else {
      setBooking({ ...booking, [e.target.name]: e.target.value });
    }
  };

  const bookingcab = async (e) => {
    console.log(booking);
    if (
      booking.pickupLocation !== "" &&
      booking.dropLocation !== "" &&
      booking.dropLocation !== "" &&
      booking.bookingStatus !== ""
    ) {
      e.preventDefault();
      await BookingService.addBooking(booking).then((res) => {
        // console.log(res.data);
        setBooking(res.data);
        alert("Data added successfully");
        navigate("/");
      });
    } else {
      alert("Please fill all fields");
    }
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationErrors = {};
    if (booking.bookingStatus === "") {
      ValidationErrors.bookingStatus = "* Status is required";
    }

    if (booking.pickupLocation === "") {
      ValidationErrors.pickupLocation = "* Pickup location is required";
    }
    if (booking.dropLocation === "") {
      ValidationErrors.dropLocation = "* Drop location is required";
    }

    setErrors(ValidationErrors);
    // console.log(ValidationErrors);
    if (Object.keys(ValidationErrors).length === 0) {
    }
  };

  //------------------------------------------------------------------------------------------

  const [all, setAll] = useState([]);

  useEffect(() => {
    const loadDetails = async (e) => {
      await CustomerService.getAllCustomerIds()
        .then((res) => {
          console.log(res.data);
          setAll(res.data);
        })
        .catch((err) => console.log(err));
    };
    loadDetails();
  }, []);

  // const setPay = [];

  // useEffect(() => {
  //   const loadPaymentDetails = async (e) => {
  //     await CabService.getAllCabIds()
  //       .then((res) => {
  //         // console.log(res.data);
  //         setPay.push(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   loadPaymentDetails();
  // }, []);

  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar navbar-dark bg-success py-3 "
        id="navbar"
      >
        <title>
          <a className="navbar-brand" href="/">
            Online Taxi Booking Management System
          </a>
        </title>
      </nav>
      <div className="row">
        <form
          onSubmit={(e) => bookingcab(e, booking)}
          className="col-md-6 offset-md-3 border rounded p-5 mt-5 shadow"
          accordion
          id="addformdetail"
        >
          <h3>Add Booking Details</h3>
          <div>
            <label htmlFor="pickupLocation" className="form-label  fw-bold">
              Pickup Location:
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter pickup location"
              name="pickupLocation"
              // value={bus.empName}
              onBlur={handleSubmit}
              onChange={(e) => onRegChange(e)}
            />
            {errors.pickupLocation && (
              <span
                style={{
                  color: "red",
                }}
              >
                {errors.pickupLocation}
              </span>
            )}
          </div>
          <br />

          <div>
            <label htmlFor="dropLocation" className="form-label fw-bold">
              Drop Location:
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter drop location"
              name="dropLocation"
              onBlur={handleSubmit}
              onChange={(e) => onRegChange(e)}
            />
            {errors.dropLocation && (
              <span
                style={{
                  color: "red",
                }}
              >
                {errors.dropLocation}
              </span>
            )}
          </div>
          <br />

          <div>
            <label
              htmlFor="bookingStatus"
              className="form-label fw-bold me-1   "
            >
              Booking status:
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter booking status"
              name="bookingStatus"
              onBlur={handleSubmit}
              onChange={(e) => onRegChange(e)}
            />
            {errors.bookingStatus && (
              <span
                style={{
                  color: "red",
                }}
              >
                {errors.bookingStatus}
              </span>
            )}
          </div>
          <br />

          <div>
            <label htmlFor="customerId" className="form-label  fw-bold">
              Customer Id:
            </label>
            <br />
            <select
              name="customerId"
              required
              onChange={(e) => onRegChange(e)}
              // role="customerdropdown"
            >
              <option selected="selected">Choose</option>
              {all.map((index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="cabId" className="form-label  fw-bold">
              Cab Id:
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="bookingStatus"
              value={id}
              readOnly
              // onBlur={handleSubmit}
              onChange={(e) => onRegChange(e)}
            />

            {/* <select name="cabId" required onChange={(e) => onRegChange(e)}>
                <option selected="selected">Choose</option>
                {pay.map((index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
            </select> */}
          </div>

          <br />
          <div
          // role="savebutton"
          >
            <button className="btn btn-success btn-md mx-2 " name="add">
              Save
            </button>
            <Link className="btn btn-light  btn-md mx-2" to={"/cabhome"}>
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBooking;
