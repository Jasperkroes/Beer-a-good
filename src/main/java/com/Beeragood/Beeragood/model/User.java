package com.Beeragood.Beeragood.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String naam;
    private int leeftijd;
    private String username;
    private String password;
    private int score;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("achievement")
    private Set<UserAchievement> userAchievements = new HashSet<>();

    public User() {}

    public User(int id, String naam, int leeftijd, String username, String password, int score, UserAchievement... userAchievements) {
        this.id = id;
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.username = username;
        this.password = password;
        this.score = score;
        for (UserAchievement ua: userAchievements) {
            ua.setUser(this);
        }
        this.userAchievements = Stream.of(userAchievements).collect(Collectors.toSet());
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
        return "User{" +
            "id=" + id +
            ", naam='" + naam + '\'' +
            ", leeftijd=" + leeftijd +
            ", username='" + username + '\'' +
            ", password='" + password + '\'' +
            ", score=" + score +
            ", userAchievements=" + userAchievements +
            '}';
    }
}
