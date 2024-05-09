import { Component } from "react";
import axios from "axios";

const addbooking = "http://localhost:8080/addBooking"; // adding the bus
const findAllbooking = "http://localhost:8080/getAllbooking"; // get all  busses
const findBookingbyId = "http://localhost:8080/getBookingById/"; // find bus by id

class BookingService extends Component {
  addBooking(booking) {
    return axios.post(addbooking, booking);
  }

  getAllBooking() {
    return axios.get(findAllbooking);
  }

  getBookingById(bookingId) {
    return axios.get(findBookingbyId + bookingId);
  }
}
const bookingService = new BookingService();
export default bookingService;
