package com.taxi;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.taxi.controller.BookingController;
import com.taxi.model.Booking;
import com.taxi.model.Cab;
import com.taxi.model.Customer;

@SpringBootTest
class OnlineTaxiBookingApplicationTests {

	@Autowired
	private BookingController bookingController;

	// for booking controller
	@Test
	void getallbookingTest() {
		List<Booking> book = bookingController.findAllBooking();
		System.out.println(book);
		assertNotNull(book);
	}

	// for adding

	@Test
	@Order(2)
	void addBooking() {
		Booking book = new Booking();
		Customer customer = new Customer();
		Cab cab = new Cab();

		book.setBookingStatus("booked");
		customer.setCustomerId(3);
		cab.setCabId(1);
		book.setCustomer(customer);
		book.setCab(cab);

		Booking result = bookingController.addBooking(book);
		assertNotNull(result);
	}

	@Test
	@Order(2)
	void getBooking() {
		Booking book = new Booking();
		book = bookingController.findBookingId(4);

		assertNotNull(book);

	}

}
