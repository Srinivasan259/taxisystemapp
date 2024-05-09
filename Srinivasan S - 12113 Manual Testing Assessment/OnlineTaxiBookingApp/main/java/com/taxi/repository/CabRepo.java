package com.taxi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.taxi.model.Cab;

public interface CabRepo extends JpaRepository<Cab, Integer>{

	Cab findByCabId(int cabId);
	
	@Query("select cabId from Cab")
	public List<Integer> getCabId();

}
