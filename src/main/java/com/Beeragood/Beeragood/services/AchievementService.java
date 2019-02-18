package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.Achievement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchievementService extends CrudRepository<Achievement, Integer> {
}
