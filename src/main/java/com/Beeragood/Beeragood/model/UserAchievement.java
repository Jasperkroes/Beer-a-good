package com.Beeragood.Beeragood.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
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

	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (!(o instanceof UserAchievement)) {
			return false;
		}
		UserAchievement that = (UserAchievement) o;
		return Objects.equals(user, that.user) &&
			Objects.equals(achievement, that.achievement) &&
			Objects.equals(datumBehaald, that.datumBehaald);
	}

	@Override
	public int hashCode() {
		return Objects.hash(user.getNaam(), achievement.getNaam(), datumBehaald);
	}
}
