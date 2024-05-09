package com.taxi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.taxi.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer>{

	
	Customer findByCustomerId(int customerId);

	
	@Query("select customerId from Customer")
	public List<Integer> getCustomerId();
}
