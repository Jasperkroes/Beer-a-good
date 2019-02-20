package com.Beeragood.Beeragood.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Entity
public class UserAchievement implements Serializable {
	@Id
	@ManyToOne
	@JoinColumn
	private User user;

	@Id
	@ManyToOne
	@JoinColumn
	private Achievement achievement;

	private String datumBehaald;

	public UserAchievement() {}

	public UserAchievement(Achievement achievement, String datumBehaald) {
		this.achievement = achievement;
		this.datumBehaald = datumBehaald;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setAchievement(Achievement achievement) {
		this.achievement = achievement;
	}

	public Achievement getAchievement() {
		return achievement;
	}

	public String getDatumBehaald() {
		return datumBehaald;
	}

	public void setDatumBehaald(String datumBehaald) {
		this.datumBehaald = datumBehaald;
	}

	@Override
	public String toString() {
		return "UserAchievement{" +
			"user=" + user +
			", achievement=" + achievement +
			", datumBehaald='" + datumBehaald + '\'' +
			'}';
	}
}
