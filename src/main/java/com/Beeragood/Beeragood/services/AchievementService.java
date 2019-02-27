package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.Achievement;

import com.Beeragood.Beeragood.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchievementService extends CrudRepository<Achievement, Integer> {

	@Query(value = "select count(*) from rate where user_id = :id and bier_id in (select id from bier where alcohol_percentage = 0)", nativeQuery = true)
	int findAlcoholVrijeBiertjesRatingsVanUser(int id);

	@Query(value = "select count(distinct bier_id) from rate where user_id = :id", nativeQuery = true)
	int findVijfVerschillendeBiertjeRateVanUser(int id);

	@Query(value = "select count(*) from rate where datum like '%04-27%' and user_id = :id", nativeQuery = true)
	int findKoningsdag(int id);

	@Query(value = "select count(*) from rate where user_id = :id and datum < date_sub(current_date, interval 1 year)", nativeQuery = true)
	int findYear(int id);


	@Query(value = "select count(*) from rate where user_id = :id and bier_id in (select id from bier where afkomst = 'Midden-Oosten')", nativeQuery = true)
	int findGenie(int id);

	@Query(value = "select count(*) from rate where user_id = :id and locatie = 'Belgie'", nativeQuery = true)
	int findInBelgie(int id);

	@Query(value = "select count(*) from rate where user_id = :id and ((locatie = 'Mexico' and bier_id in (select id from bier where afkomst = 'Mexico')) or" +
		" (locatie = 'Spain' and bier_id in (select id from bier where afkomst = 'Spain')))", nativeQuery = true)
	int findFiesta(int id);

	@Query(value = "select count(bier_id) - count(distinct bier_id) from rate where user_id = :id", nativeQuery = true)
	int findRewind(int id);

	@Query(value = "select count(distinct l.id)-count(distinct r.locatie) from rate r, locatie l where user_id = :id", nativeQuery = true)
	int findAroundTheWorld(int id);



	Iterable<Achievement> findByNaam(String naam);

	@Query(value = "select * from user where id = :uid", nativeQuery = true)
	Iterable<User> selectAchievement(int uid);
}
