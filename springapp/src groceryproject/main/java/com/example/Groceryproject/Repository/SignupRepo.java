package com.example.Groceryproject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Groceryproject.Entity.Signup;

public interface SignupRepo extends JpaRepository<Signup,Integer> {
	Signup findByEmail(String email);
}
