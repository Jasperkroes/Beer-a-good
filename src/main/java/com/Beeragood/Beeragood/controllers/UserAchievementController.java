package com.Beeragood.Beeragood.controllers;

import com.Beeragood.Beeragood.model.Achievement;
import com.Beeragood.Beeragood.model.User;
import com.Beeragood.Beeragood.model.UserAchievement;
import com.Beeragood.Beeragood.model.UserAchievementIdentity;
import com.Beeragood.Beeragood.services.AchievementService;
import com.Beeragood.Beeragood.services.UserAchievementService;
import com.Beeragood.Beeragood.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class UserAchievementController {
	@Autowired	private UserAchievementService userAchievementService;
	@Autowired	private UserService userService;
	@Autowired	private AchievementService achievementService;

	//curl -H "Content-Type: application/json" -X PUT -d '{"id": 1, "task", "description","date": "taskTest"}' http://localhost:8080/user/1
	@ResponseBody
	@RequestMapping(value = "/user/{uid}/achievement/{aid}", method = RequestMethod.PUT)
	public UserAchievement updateUserWithAchievement(@PathVariable int uid, @PathVariable int aid, @RequestBody String date) {
		User user = userService.findById(uid).get();
		Achievement achievement = achievementService.findById(aid).get();
		System.out.println(user + " : " + achievement);
		return userAchievementService.save(new UserAchievement(new UserAchievementIdentity(user, achievement), LocalDate.now().toString()));
	}
}
