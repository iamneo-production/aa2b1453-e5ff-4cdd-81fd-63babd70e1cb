package com.example.Groceryproject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.Groceryproject.Entity.ProductDetails;
import com.example.Groceryproject.Service.Prodserv;

@CrossOrigin
@RestController
@RequestMapping("api/v1/user")
public class ProdController {
	@Autowired(required=true)
	Prodserv pserv;
	
	@PostMapping("/addpro")
	public ProductDetails adddetails(@RequestBody ProductDetails e) {
		return pserv.saveDetails(e);
	}
	
	@GetMapping("/showpro")
	public List<ProductDetails> fetchDetails(){
		return pserv.getDetails();
	}
	
	@PutMapping("updatepro/{pid}") 
	public ProductDetails updateInfo(@PathVariable int pid, @RequestBody ProductDetails s) {
		return pserv.updateDetails(pid,  s);
	}
	
	@DeleteMapping("/deletepro/{pid}")
	public String deleteInfo(@PathVariable("pid") int pid) {
		pserv.deleteDetails(pid);
		return "Details Deleted Successfully";
	}
	
	@PostMapping("/updateImageUrl/{pid}")
	public ProductDetails updateImageUrl(@PathVariable int pid, @RequestParam("pimageUrl") String pimageUrl) {
		ProductDetails model=pserv.updateImageUrl(pid,  pimageUrl);
		return model;
	}
}
