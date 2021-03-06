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
import java.util.List;
import java.util.Optional;

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
//		System.out.println(user + " : " + achievement);
		String a = LocalDate.now().toString();
		return userAchievementService.save(new UserAchievement(new UserAchievementIdentity(user, achievement), a));
	}

	@ResponseBody
	@RequestMapping(value = "/checkGehaald/{aid}/{uid}", method = RequestMethod.GET)
	public UserAchievement checkGehaald(@PathVariable int aid, @PathVariable int uid) {
		UserAchievement uaMock = new UserAchievement(new UserAchievementIdentity(null,null), "-");
		Optional<User> user = userService.findById(uid);
		if(!user.isPresent()) {
			return uaMock;
		}
		Optional<Achievement> achievement = achievementService.findById(aid);
		if(!achievement.isPresent()) {
			return uaMock;
		}
		Optional<UserAchievement> ua = userAchievementService.findById(new UserAchievementIdentity(user.get(), achievement.get()));
		return ua.map(userAchievement -> ua.get()).orElse(uaMock);
	}

	@ResponseBody
	@RequestMapping(value = "/findNewAchievement/{uid}", method = RequestMethod.GET)
	public boolean findNewAchievement(@PathVariable int uid) {
		List<UserAchievement> lua2 = userAchievementService.achievementsByGezien(uid);
		return lua2.size()>0;
	}

	@ResponseBody
	@RequestMapping(value = "/allAchievementsGezien/{uid}", method = RequestMethod.PUT)
	public List<UserAchievement> userAchievementIsGezien(@PathVariable int uid){
		List<UserAchievement> lua = userAchievementService.getAllUserAchievementsFromUser(uid);
		for (UserAchievement ua: lua) {
			UserAchievement newua = new UserAchievement(new UserAchievementIdentity(ua.getUser(), ua.getAchievement()),ua.getDatumBehaald());
			newua.setGezien(true);
			userAchievementService.save(newua);
		}
		return userAchievementService.getAllUserAchievementsFromUser(uid);
	}

}
