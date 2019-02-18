package com.Beeragood.Beeragood.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Achievement {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String naam;
	private String omschrijving;
	private String datumBehaald;
	private String plaatje;
	private int score;

	public Achievement() {}

	public Achievement(int id, String naam, String omschrijving, String datumBehaald, String plaatje, int score) {
		this.id = id;
		this.naam = naam;
		this.omschrijving = omschrijving;
		this.datumBehaald = datumBehaald;
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

	public String getDatumBehaald() {
		return datumBehaald;
	}

	public void setDatumBehaald(String datumBehaald) {
		this.datumBehaald = datumBehaald;
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

	@Override
	public String toString() {
		return "Achievement{" +
			"id=" + id +
			", naam='" + naam + '\'' +
			", omschrijving='" + omschrijving + '\'' +
			", datumBehaald='" + datumBehaald + '\'' +
			", plaatje='" + plaatje + '\'' +
			", score=" + score +
			'}';
	}
}