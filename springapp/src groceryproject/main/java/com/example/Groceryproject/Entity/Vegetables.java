package com.example.Groceryproject.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Vegetables")
public class Vegetables {
	@Id
	public int vid;
	private String vname;
	private int vprice;
	public int getVid() {
		return vid;
	}
	public void setVid(int vid) {
		this.vid = vid;
	}
	public String getVname() {
		return vname;
	}
	public void setVname(String vname) {
		this.vname = vname;
	}
	public int getVprice() {
		return vprice;
	}
	public void setVprice(int vprice) {
		this.vprice = vprice;
	}
	public Vegetables(int vid, String vname, int vprice) {
		super();
		this.vid = vid;
		this.vname = vname;
		this.vprice = vprice;
	}
	public Vegetables() {
		
	}

}
