package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserService extends CrudRepository<User, Integer > {
Iterable<User> findByUsernameAndPassword(String username, String password);
Iterable<User> findByUsername(String username);

@Query(value = "insert into user_achievement (user_ id, achievement_id, datum_behaald) values (:uid, :aid, current_date)", nativeQuery = true)
int putNewUserWithAchievemnt(int uid, int aid);
}
