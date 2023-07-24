package com.example.Groceryproject.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Healthdrinks")
public class Healthdrinksinfo {
	@Id
	public int hid;
	private String hname;
	private int hprice;
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	public String getHname() {
		return hname;
	}
	public void setHname(String hname) {
		this.hname = hname;
	}
	public int getHprice() {
		return hprice;
	}
	public void setHprice(int hprice) {
		this.hprice = hprice;
	}
	public Healthdrinksinfo(int hid, String hname, int hprice) {
		super();
		this.hid = hid;
		this.hname = hname;
		this.hprice = hprice;
	}
	public Healthdrinksinfo() {
		
	}

}
