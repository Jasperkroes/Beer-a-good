package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.Achievement;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchievementService extends CrudRepository<Achievement, Integer> {

	@Query(value = "select count(*) from rate where user_id = :id and bier_id in (select id from bier where alcohol_percentage = 0)", nativeQuery = true)
	int findAlcoholVrijeBiertjesRatingsVanUser(int id);


	@Query(value = "select count(distinct bier_id) from rate where user_id = :id", nativeQuery = true)
	int findVijfVerschillendeBiertjeRateVanUser(int id);

	@Query(value = "select * from rate where datum like %04-27% where user_id = :id", nativeQuery = true)
	int findKoningsdag(int id);

	@Query(value = "select datum from rate where user_id = :id and datum < date_sub(current_date, interval 1 year)", nativeQuery = true)
	int findYear(int id);
}