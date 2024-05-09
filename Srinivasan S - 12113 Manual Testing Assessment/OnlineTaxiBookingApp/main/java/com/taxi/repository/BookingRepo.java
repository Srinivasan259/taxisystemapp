package com.taxi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.taxi.model.Booking;

public interface BookingRepo extends JpaRepository<Booking, Integer>{
	
	Booking findByBookingId(int bookingId);
	
	
	

}
