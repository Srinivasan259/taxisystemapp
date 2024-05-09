package com.taxi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.taxi.model.Booking;
import com.taxi.repository.BookingRepo;


@RestController
@CrossOrigin("*")
public class BookingController {

	@Autowired
	private BookingRepo repo;

	@PostMapping("/addBooking")
	public Booking addBooking(@RequestBody Booking booking) {

		return repo.saveAndFlush(booking);
	}

	@GetMapping("/getAllbooking")
	public List<Booking> findAllBooking() {
		return repo.findAll();
	}

	@GetMapping("/getBookingById/{bookingId}")
	
	public Booking findBookingId(@PathVariable("bookingId") int bookingId) {
		return repo.findByBookingId(bookingId);

	}
	

}
