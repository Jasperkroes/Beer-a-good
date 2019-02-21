package com.Beeragood.Beeragood.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
public class Achievement {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String naam;
	private String omschrijving;
	private String plaatje;
	private int score;

	@OneToMany
	private Set<UserAchievement> userAchievements = new HashSet<>();

	public Achievement() {}

	public Achievement(int id, String naam, String omschrijving, String plaatje, int score) {
		this.id = id;
		this.naam = naam;
		this.omschrijving = omschrijving;
		this.plaatje = plaatje;
		this.score = score;
	}

	public int getId() {
		return id;
	}

	public String getNaam() {
		return naam;
	}

	public void setNaam(String naam) {
		this.naam = naam;
	}

	public String getOmschrijving() {
		return omschrijving;
	}

	public void setOmschrijving(String omschrijving) {
		this.omschrijving = omschrijving;
	}

	public String getPlaatje() {
		return plaatje;
	}

	public void setPlaatje(String plaatje) {
		this.plaatje = plaatje;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public Set<UserAchievement> getUserAchievements() {
		return userAchievements;
	}

	public void setUserAchievements(Set<UserAchievement> userAchievements) {
		this.userAchievements = userAchievements;
	}

	@Override
	public String toString() {
		return "Achievement{" +
			"id=" + id +
			", naam='" + naam + '\'' +
			", omschrijving='" + omschrijving + '\'' +
			", plaatje='" + plaatje + '\'' +
			", score=" + score +
			'}';
	}
}
