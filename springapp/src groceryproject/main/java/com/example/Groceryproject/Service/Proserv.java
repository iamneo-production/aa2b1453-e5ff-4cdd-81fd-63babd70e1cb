package com.example.Groceryproject.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Groceryproject.Entity.Signup;
import com.example.Groceryproject.Repository.SignupRepo;


@Service
public class Proserv {
	@Autowired
	SignupRepo sRepo;
	public Signup saveDetails(Signup e) {
		return sRepo.save(e);
	}
	public List<Signup> getDetails(){
		return sRepo.findAll();
	}
	public Signup findByEmail(String email) {
		return sRepo.findByEmail(email);
	}
}
