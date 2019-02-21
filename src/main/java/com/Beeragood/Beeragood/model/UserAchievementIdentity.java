package com.Beeragood.Beeragood.model;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Embeddable
public class UserAchievementIdentity implements Serializable {

	@ManyToOne
	@NotNull
	private User user;

	@ManyToOne
	@NotNull
	private Achievement achievement;

	public UserAchievementIdentity() {}

	public UserAchievementIdentity(User user, Achievement achievement) {
		this.user = user;
		this.achievement = achievement;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Achievement getAchievement() {
		return achievement;
	}

	public void setAchievement(Achievement achievement) {
		this.achievement = achievement;
	}
}
