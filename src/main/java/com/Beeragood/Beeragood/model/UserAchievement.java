package com.Beeragood.Beeragood.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Entity
public class UserAchievement implements Serializable {

	@EmbeddedId
	private UserAchievementIdentity userAchievementIdentity;

	private String datumBehaald;
	private boolean gezien;

	public UserAchievement() {}

	public UserAchievement(UserAchievementIdentity userAchievementIdentity, String datumBehaald) {
		this.userAchievementIdentity = userAchievementIdentity;
		this.datumBehaald = datumBehaald;
		this.gezien = false;
	}

	public User getUser() {
		return userAchievementIdentity.getUser();
	}

	public void setUser(User user) {
		this.userAchievementIdentity.setUser(user);
	}

	public boolean isGezien() {
		return gezien;
	}

	public void setGezien(boolean gezien) {
		this.gezien = gezien;
	}

	public void setAchievement(Achievement achievement) {
		this.userAchievementIdentity.setAchievement(achievement);
	}

	public Achievement getAchievement() {
		return userAchievementIdentity.getAchievement();
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
			"user=" + userAchievementIdentity.getUser().getId() +
			", achievement=" + userAchievementIdentity.getAchievement().getId() +
			", datumBehaald='" + datumBehaald + '\'' +
			'}';
	}

}
