package com.taxi.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table
public class Cab {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cabId;
	private String cabNo;
	private String cabType;
	private int cabCapacity;
	private int ratePerkm;

}
