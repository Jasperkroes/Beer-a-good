package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.UserAchievement;
import com.Beeragood.Beeragood.model.UserAchievementIdentity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAchievementService extends CrudRepository<UserAchievement, UserAchievementIdentity> {
}
