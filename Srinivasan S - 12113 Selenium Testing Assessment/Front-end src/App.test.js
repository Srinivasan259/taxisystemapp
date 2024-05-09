import { fireEvent, render, screen } from "@testing-library/react";
import BookingHome from "./Pages/BookingHome";
import CabHome from "./Pages/CabHome";
import "@testing-library/jest-dom";
import AddBooking from "./Pages/AddBookng";
import CustomerHome from "./Pages/CustomerHome";
jest.mock("react-router-dom");

// describe("test for booking home page", () => {
//   test("renders nav bar title", () => {
//     render(<BookingHome />);
//     const linkElement = screen.getByTestId("title");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent(
//       "Online Taxi Booking Management System"
//     );
//   });

//   test("test search is present", () => {
//     render(<BookingHome />);
//     const linkElement = screen.getByTitle("search");
//     expect(linkElement).toBeInTheDocument();
//   });

//   test("customer navigate link", () => {
//     render(<BookingHome />);
//     const customerElement = screen.getByRole("customer");
//     expect(customerElement).toBeInTheDocument();
//     // expect(linkElement).toHaveTextContent("Go to Customer Page");
//   });

//   test("cab navigate link", async () => {
//     render(<BookingHome />);
//     const cabElement = await screen.findByRole("cab");
//     console.log(cabElement);
//     expect(cabElement).toBeInTheDocument();
//   });

//   test("view button", async () => {
//     render(<BookingHome />);
//     const viewElement = screen.getByText(/View/i);
//     expect(viewElement).toBeInTheDocument();
//   });
// });

describe("test for cab page", () => {
  test("renders nav bar title", () => {
    render(<CabHome />);
    const linkElement = screen.getByTestId("title");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent(
      "Online Taxi Booking Management System"
    );
  });
  test("pickup location", () => {
    render(<CabHome />);
    const searchpickup = screen.getByPlaceholderText(
      "Search by pickup location..."
    );
    expect(searchpickup).toBeInTheDocument();
  });

  test("drop location", () => {
    render(<CabHome />);
    const searchdrop = screen.getByPlaceholderText(
      "Search by drop location..."
    );
    expect(searchdrop).toBeInTheDocument();
  });

  test("customer navigate link", () => {
    render(<CabHome />);
    const customerElement = screen.getByRole("customer");
    expect(customerElement).toBeInTheDocument();
  });
  test("booking navigate link", () => {
    render(<CabHome />);
    const customerElement = screen.getByRole("booking");
    expect(customerElement).toBeInTheDocument();
    // expect(linkElement).toHaveTextContent("Go to Customer Page");
  });
  test("give value to pickup location search bar", () => {
    render(<CabHome />);
    fireEvent.change(
      screen.getByPlaceholderText("Search by pickup location...")
    ),
      {
        target: { value: "Neyveli" },
      };
  });
  test("give value to drop location search bar", () => {
    render(<CabHome />);
    fireEvent.change(screen.getByPlaceholderText("Search by drop location...")),
      {
        target: { value: "Cuddalore" },
      };
  });
});

// describe("Test for booking cab page", () => {
//   test("pickup location text field", () => {
//     render(<AddBooking />);
//     const pickup = screen.getByPlaceholderText("Enter pickup location");
//     expect(pickup).toBeInTheDocument();
//   });

//   test("give value to pickup location ", () => {
//     render(<AddBooking />);
//     fireEvent.change(screen.getByPlaceholderText("Enter pickup location")),
//       {
//         target: { value: "Neyveli" },
//       };
//   });

//   test("drop location text field", () => {
//     render(<AddBooking />);
//     const drop = screen.getByPlaceholderText("Enter drop location");
//     expect(drop).toBeInTheDocument();
//   });

//   test("give value to drop location ", () => {
//     render(<AddBooking />);
//     fireEvent.change(screen.getByPlaceholderText("Enter drop location")),
//       {
//         target: { value: "Cuddalore" },
//       };
//   });

//   test("for booking status ", () => {
//     render(<AddBooking />);
//     fireEvent.change(screen.getByPlaceholderText("Enter booking status")),
//       {
//         target: { value: "booked" },
//       };
//   });

//   test("customer dropdown", () => {
//     render(<AddBooking />);
//     const customer = screen.getByRole("customerdropdown");
//     expect(customer).toBeInTheDocument();
//   });

//   //fireevent -Insert pickup loc
//   it("tests the pick up event", async () => {
//     render(<AddBooking placeholder="Enter pickup location" />);
//     const input = screen.getByPlaceholderText("Enter pickup location");
//     const value = "Neyveli";
//     fireEvent.change(input, {
//       target: {
//         value,
//       },
//     });
//     expect(input).toHaveValue("Neyveli");
//   });

//   test("for save button", () => {
//     render(<AddBooking />);
//     const customer = screen.getByRole("savebutton");
//     expect(customer).toBeInTheDocument();
//   });
// });

// describe("for customer home page", () => {
//   test("renders nav bar title", () => {
//     render(<CustomerHome />);
//     const linkElement = screen.getByTestId("title");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent(
//       "Online Taxi Booking Management System"
//     );
//   });

//   test(" customer id search bar", () => {
//     render(<CustomerHome />);
//     const searchcust = screen.getByPlaceholderText("Search by id...");
//     expect(searchcust).toBeInTheDocument();
//   });

//   test("give value to customer id search bar", () => {
//     render(<CustomerHome />);
//     fireEvent.change(screen.getByPlaceholderText("Search by id...")),
//       {
//         target: { value: "1" },
//       };
//   });

//   test("booking navigate link", () => {
//     render(<CustomerHome />);
//     const customerElement = screen.getByRole("booking");
//     expect(customerElement).toBeInTheDocument();
//   });
//   test("cab navigate link", () => {
//     render(<CustomerHome />);
//     const customerElement = screen.getByRole("cab");
//     expect(customerElement).toBeInTheDocument();
//   });

//   //fireevent -search customer id
//   it("tests the customer id search event", async () => {
//     render(<CustomerHome placeholder="Search by id..." />);
//     const input = screen.getByPlaceholderText("Search by id...");
//     const value = "1";
//     fireEvent.change(input, {
//       target: {
//         value,
//       },
//     });
//     expect(input).toHaveValue("1");
//   });
// });
