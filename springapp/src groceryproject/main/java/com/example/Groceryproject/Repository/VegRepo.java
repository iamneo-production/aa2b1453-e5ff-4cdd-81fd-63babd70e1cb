package com.example.Groceryproject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Groceryproject.Entity.Vegetables;

public interface VegRepo extends JpaRepository<Vegetables,Integer>{

}
