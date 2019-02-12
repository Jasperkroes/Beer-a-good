package com.Beeragood.Beeragood.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String naam;
    private int leeftijd;
    private String username;
    private String password;

    public User() {}

    public User(int id, String naam, int leeftijd, String username, String password) {
        this.id = id;
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.username = username;
        this.password = password;
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

    public int getLeeftijd() {
        return leeftijd;
    }

    public void setLeeftijd(int leeftijd) {
        this.leeftijd = leeftijd;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", naam='" + naam + '\'' +
                ", leeftijd=" + leeftijd +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}