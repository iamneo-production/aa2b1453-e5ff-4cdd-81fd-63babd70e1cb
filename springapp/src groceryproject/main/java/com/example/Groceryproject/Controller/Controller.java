package com.example.Groceryproject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Groceryproject.Entity.Signup;
import com.example.Groceryproject.Service.Proserv;

@RestController
@CrossOrigin 
public class Controller {
	@Autowired
	Proserv serv;
	@PostMapping("/add")
	public Signup addInfo(@RequestBody Signup g) {
		return serv.saveDetails(g);
	}
	@GetMapping("/getting")
	public List<Signup> fetchDetails(){
		return serv.getDetails();
	}
	
	@PostMapping("/Login")
	public ResponseEntity<String> loginUser(@RequestBody Signup loginInfo){
		String email=loginInfo.getEmail();
		String password=loginInfo.getPassword();
		
		Signup user=serv.findByEmail(email);
		if(user==null) {	
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
		}
		
		
		if(!user.getPassword().equals(password)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
		}
		
		return ResponseEntity.ok("Login successful");
	}
}
