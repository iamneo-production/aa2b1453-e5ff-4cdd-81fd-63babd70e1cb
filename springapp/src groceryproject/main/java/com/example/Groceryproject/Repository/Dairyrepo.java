package com.example.Groceryproject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Groceryproject.Entity.DairyProducts;

public interface Dairyrepo extends JpaRepository<DairyProducts,Integer>{

}
