package com.example.Groceryproject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Groceryproject.Entity.ProductDetails;

public interface ProdRepo extends JpaRepository<ProductDetails,Integer>{

}
