package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.Achievement;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchievementService extends CrudRepository<Achievement, Integer> {

	@Query(value = "select count(*) from rate where user_id = :id and bier_id in (select id from bier where alcohol_percentage = 0)", nativeQuery = true)
	int findAlcoholVrijeBiertjesRatingsVanUser(int id);
}