import { Component } from "react";
import axios from "axios";

const addbus = "http://localhost:8080/addCab"; // adding the bus
const findAllcab = "http://localhost:8080/allCabs"; // get all  busses
const findcabbyId = "http://localhost:8080/getCabById/"; // find bus by id
const getAllcabtId = "http://localhost:8080/getAllCabId";
const getPickup = "http://localhost:8080/getCabByPickup/";
const getDrop = "http://localhost:8080/getCabByDrop/";

class CabService extends Component {
  addBus(addDept) {
    return axios.post(addbus, addDept);
  }

  getAllCab() {
    return axios.get(findAllcab);
  }

  getCabById(cabId) {
    return axios.get(findcabbyId + cabId);
  }

  getAllCabIds() {
    return axios.get(getAllcabtId);
  }

  getPickUpLoc() {
    return axios.get(getPickup);
  }

  getCabByDrop() {
    return axios.get(getDrop);
  }
}
const cabService = new CabService();
export default cabService;
