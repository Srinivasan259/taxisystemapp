package com.taxi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.taxi.model.Cab;
import com.taxi.repository.CabRepo;

import jakarta.annotation.security.PermitAll;

@RestController
@CrossOrigin("*")
public class CabController {
	
	@Autowired
	private CabRepo repo;
	
	@PostMapping("/addCab")
	public Cab addcab(@RequestBody Cab cab) {

		return repo.save(cab);
	}
	
	@GetMapping("/allCabs")
	public	List<Cab> getAllCab() {
		return repo.findAll();
	}
	
	@GetMapping("/getCabByPickup/{pickupLocation}")
	public	Cab findCabPickup(@PathVariable("pickupLocation") String pickupLocation) {
		return repo.findByPickupLocationContaining(pickupLocation);

	}
	
	@GetMapping("/getCabByDrop/{dropLocation}")
	public	Cab findCabDrop(@PathVariable("dropLocation") String dropLocation) {
		return repo.findByDropLocationContaining(dropLocation);

	}
	
	@GetMapping("/getCabById/{cabId}")
	public Cab findByCabId(@PathVariable("cabId") int cabId) {
		return repo.findByCabId(cabId);
	}
		
	@GetMapping("/getAllCabId")
	public	List<Integer> findAllCabIds() {
		return repo.getCabId();
	}
	
}
