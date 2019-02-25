package com.Beeragood.Beeragood.model;

import javax.persistence.*;

@Entity
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int cijfer;
    private String omschrijving;
    private String datum;
//    Todo: rate heeft welke locatie? Locatie is nu een .java file
    private String locatie;

    @ManyToOne
    private User user;

    @ManyToOne
    private Bier bier;

    public Rate() {}

    public Rate(int id, int cijfer, String omschrijving, String datum, String locatie, User user, Bier bier) {
        this.id = id;
        this.cijfer = cijfer;
        this.omschrijving = omschrijving;
        this.datum = datum;
        this.locatie = locatie;
        this.user = user;
        this.bier = bier;
    }

    public int getId() {
        return id;
    }

    public int getCijfer() {
        return cijfer;
    }

    public void setCijfer(int cijfer) {
        this.cijfer = cijfer;
    }

    public String getOmschrijving() {
        return omschrijving;
    }

    public void setOmschrijving(String omschrijving) {
        this.omschrijving = omschrijving;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    public String getLocatie() {
        return locatie;
    }

    public void setLocatie(String locatie) {
        this.locatie = locatie;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Bier getBier() {
        return bier;
    }

    public void setBier(Bier bier) {
        this.bier = bier;
    }
}

