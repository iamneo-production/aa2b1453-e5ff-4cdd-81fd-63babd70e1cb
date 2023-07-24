package com.example.Groceryproject.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Groceryproject.Entity.ProductDetails;
import com.example.Groceryproject.Repository.ProdRepo;

@Service
public class Prodserv {
	@Autowired
	ProdRepo prepo;
	
	public ProductDetails saveDetails(ProductDetails e) {
		return prepo.save(e);
	}
	
	public List<ProductDetails> getDetails(){
		return prepo.findAll();
	}
	
	public ProductDetails updateDetails(int pid, ProductDetails s) {
		ProductDetails modelx=prepo.findById(pid).orElse(null);
		if(modelx!=null) {
			modelx.setPname(s.getPname());
			modelx.setPprice(s.getPprice());
			modelx.setPdescription(s.getPdescription());
			return prepo.saveAndFlush(modelx);
		}else {
			return null;
		}
	}
	
	public void deleteDetails(int pid) {
		prepo.deleteById(pid);
	}
	
	public ProductDetails updateImageUrl(int pid, String pimageurl) {
		ProductDetails modelx=prepo.findById(pid).orElse(null);
		if(modelx!=null && pimageurl!=null) {
			modelx.setPimageurl(pimageurl);
			return prepo.saveAndFlush(modelx);
		}else {
			return null;
		}
	}
	
}
