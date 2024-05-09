import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingHome from "./Pages/BookingHome";
import CabHome from "./Pages/CabHome";
import CustomerHome from "./Pages/CustomerHome";
import AddBooking from "./Pages/AddBookng";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookingHome />}></Route>

          <Route path="/cabhome" element={<CabHome />}></Route>

          <Route path="/custhome" element={<CustomerHome />}></Route>

          <Route path="/addBook/:id" element={<AddBooking />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
