package com.example.Groceryproject.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="DairyProducts")
public class DairyProducts {
	@Id
	public int did;
	private String dname;
	private String dprice;
	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public String getDname() {
		return dname;
	}
	public void setDname(String dname) {
		this.dname = dname;
	}
	public String getDprice() {
		return dprice;
	}
	public void setDprice(String dprice) {
		this.dprice = dprice;
	}
	public DairyProducts(int did, String dname, String dprice) {
		super();
		this.did = did;
		this.dname = dname;
		this.dprice = dprice;
	}
	public DairyProducts() {
		
	}

}
