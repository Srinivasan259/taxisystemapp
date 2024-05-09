package com.taxi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.taxi.model.Cab;
import com.taxi.model.Customer;
import com.taxi.repository.CustomerRepo;

@RestController
@CrossOrigin("*")
public class CustomerController {
	
	@Autowired
	private CustomerRepo repo;
	
	@GetMapping("/allCustomers")
	public	List<Customer> getAllcustomers(){
		return repo.findAll();
	}
	
	@GetMapping("/getAllCustomerId")
	public List<Integer> findAllCustomerIds() {
		return repo.getCustomerId();
	}

	@GetMapping("/getCustById/{customerId}")	
	public Customer findCustomerId(@PathVariable("customerId") int customerId) {
		return repo.findByCustomerId(customerId);

	}
}
