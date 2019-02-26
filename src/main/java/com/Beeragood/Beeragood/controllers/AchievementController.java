package com.Beeragood.Beeragood.controllers;

import com.Beeragood.Beeragood.model.*;
import com.Beeragood.Beeragood.services.AchievementService;
import com.Beeragood.Beeragood.services.UserAchievementService;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class AchievementController {

	@Autowired private AchievementService achievementService;
	@Autowired private UserAchievementService userAchievementService;
	private Achievement mockAchievement = new Achievement(0,"","","",0);

	//curl  http://localhost:8080/achievement
	@ResponseBody
	@RequestMapping(value = "/achievement", method = RequestMethod.GET)
	public List<Achievement> findAll() {
		return (List<Achievement>)achievementService.findAll();
	}

	//curl -H "Content-Type: application/json" -X POST -d '{"id": 0, "task", "description","date": "taskTest"}' http://localhost:8080/achievement
	@ResponseBody
	@RequestMapping(value = "/achievement", method = RequestMethod.POST)
	public int create(@RequestBody Achievement achievement) {
		return achievementService.save(achievement).getId();
	}

	@ResponseBody
	@RequestMapping(value = "/achievementAlcoholVrij/{id}", method = RequestMethod.GET)
	public Achievement validateAlcoholVrij(@PathVariable int id) {
		if (achievementService.findAlcoholVrijeBiertjesRatingsVanUser(id) > 0) {
			return achievementService.findByNaam("De Nullpointer").iterator().next();
		}
		return mockAchievement;
	}

	@ResponseBody
	@RequestMapping(value = "/achievementVijfVerschillende/{id}", method = RequestMethod.GET)
	public Achievement validateVijfVerschillende(@PathVariable int id) {
		if (achievementService.findVijfVerschillendeBiertjeRateVanUser(id)>4) {
			return achievementService.findByNaam("5").iterator().next();
		}
		return mockAchievement;
	}

	@ResponseBody
	@RequestMapping(value = "/achievementKoningsdag/{id}", method = RequestMethod.GET)
	public Achievement validateKoningsdag(@PathVariable int id) {
		if(achievementService.findKoningsdag(id)>0) {
			return achievementService.findByNaam("De Koning").iterator().next();
		}
		return mockAchievement;
	}

	@ResponseBody
	@RequestMapping(value = "/achievementYear/{id}", method = RequestMethod.GET)
	public Achievement validateYear(@PathVariable int id) {
		if(achievementService.findYear(id)>0){
			return achievementService.findByNaam("Happy new beer").iterator().next();
		}
		return mockAchievement;
	}

	@ResponseBody
	@RequestMapping(value = "/achievementInBelgie/{id}", method = RequestMethod.GET)
	public Achievement validateInBelgie(@PathVariable int id) {
		if(achievementService.findInBelgie(id)>0){
			return achievementService.findByNaam("De Belgische Zot").iterator().next();
		}
		return mockAchievement;
	}

}
