package com.example.Groceryproject.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Softdrinks")
public class Softdrinks {
	@Id
	public int sid;
	private String sname;
	private int sprice;
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public int getSprice() {
		return sprice;
	}
	public void setSprice(int sprice) {
		this.sprice = sprice;
	}
	public Softdrinks(int sid, String sname, int sprice) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.sprice = sprice;
	}
	public Softdrinks() {
		
	}

}
