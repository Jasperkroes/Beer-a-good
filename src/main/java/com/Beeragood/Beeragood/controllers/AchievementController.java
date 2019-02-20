package com.Beeragood.Beeragood.controllers;

import com.Beeragood.Beeragood.model.Achievement;
import com.Beeragood.Beeragood.model.Bier;
import com.Beeragood.Beeragood.model.User;
import com.Beeragood.Beeragood.services.AchievementService;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class AchievementController {

	@Autowired private AchievementService achievementService;

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
		return new Achievement(0,"","","",0);
	}

	@ResponseBody
	@RequestMapping(value = "/achievementVijfVerschillende/{id}", method = RequestMethod.GET)
	public boolean validateVijfVerschillende(@PathVariable int id) {
		return achievementService.findVijfVerschillendeBiertjeRateVanUser(id)>4;
	}

	@ResponseBody
	@RequestMapping(value = "/achievementKoningsdag/{id}", method = RequestMethod.GET)
	public boolean validateKoningsdag(@PathVariable int id) {
		return achievementService.findKoningsdag(id)>0;
	}

	@ResponseBody
	@RequestMapping(value = "/achievementYear/{id}", method = RequestMethod.GET)
	public boolean validateYear(@PathVariable int id) {
		return achievementService.findYear(id)>0;
	}

}
