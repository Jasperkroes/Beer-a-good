package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.UserAchievement;
import com.Beeragood.Beeragood.model.UserAchievementIdentity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserAchievementService extends CrudRepository<UserAchievement, UserAchievementIdentity> {
    @Query(value = "select * from user_achievement where user_id = :uid and datum_behaald = :datum", nativeQuery = true)
    List<UserAchievement> achievementsByDate(int uid, String datum);
}
