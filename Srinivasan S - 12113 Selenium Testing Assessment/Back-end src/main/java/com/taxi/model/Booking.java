package com.taxi.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingId;
	
	private String bookingStatus;

	@ManyToOne(targetEntity = Customer.class, cascade = CascadeType.MERGE)
	private Customer customer;

	@ManyToOne(targetEntity = Cab.class,cascade = CascadeType.MERGE)
	@JoinTable(name = "cab_booking", joinColumns = @JoinColumn(name = "booking_Id"), inverseJoinColumns = @JoinColumn(name = "cab_Id"))
	private Cab cab;
}
