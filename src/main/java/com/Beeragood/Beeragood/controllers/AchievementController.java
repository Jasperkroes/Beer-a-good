package com.Beeragood.Beeragood.controllers;

import com.Beeragood.Beeragood.model.Achievement;
import com.Beeragood.Beeragood.model.Bier;
import com.Beeragood.Beeragood.services.AchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
