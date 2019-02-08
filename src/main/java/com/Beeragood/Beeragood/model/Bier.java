package com.Beeragood.Beeragood.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bier {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String naam;
    //foto
    private  String afkomst;
    private double alcoholPercentage;

    public Bier() {}

    public Bier(int id, String naam, String afkomst, double alcoholPercentage) {
        this.id = id;
        this.naam = naam;
        this.afkomst = afkomst;
        this.alcoholPercentage = alcoholPercentage;
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

    public String getAfkomst() {
        return afkomst;
    }

    public void setAfkomst(String afkomst) {
        this.afkomst = afkomst;
    }

    public double getAlcoholPercentage() {
        return alcoholPercentage;
    }

    public void setAlcoholPercentage(double alcoholPercentage) {
        this.alcoholPercentage = alcoholPercentage;
    }

    @Override
    public String toString() {
        return "Bier{" +
                "id=" + id +
                ", naam='" + naam + '\'' +
                ", afkomst='" + afkomst + '\'' +
                ", alcoholPercentage=" + alcoholPercentage +
                '}';
    }
}

