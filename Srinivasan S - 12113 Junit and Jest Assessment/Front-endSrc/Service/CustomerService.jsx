import React, { Component } from "react";
import axios from "axios";

const findAllcust = "http://localhost:8080/allCustomers"; // get all  busses
const findcustbyId = "http://localhost:8080/getCustById/"; // find bus by id
const getAllcustId = "http://localhost:8080/getAllCustomerId";

class CustomerService extends Component {
  getAllCust() {
    return axios.get(findAllcust);
  }

  getBusById(customerId) {
    return axios.get(findcustbyId + customerId);
  }

  getAllCustomerIds() {
    return axios.get(getAllcustId);
  }
}
export default new CustomerService();
