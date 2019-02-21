package com.Beeragood.Beeragood.controllers;

import com.Beeragood.Beeragood.model.Achievement;
import com.Beeragood.Beeragood.model.User;
import com.Beeragood.Beeragood.model.UserAchievement;
import com.Beeragood.Beeragood.services.AchievementService;
import com.Beeragood.Beeragood.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class UserController {

    @Autowired  private UserService userService;

    //curl -H "Content-Type: application/json" -X POST -d '{"id": 0, "task", "description","date": "taskTest"}' http://localhost:8080/user
    @ResponseBody
    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public int create(@RequestBody User user) {
        return userService.save(user).getId();
    }

    @ResponseBody
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public User authenticate(@RequestBody User user) {
        Iterable<User> it = userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if( it.iterator().hasNext() ) {
            return it.iterator().next();
        }
        return user;
    }

    @ResponseBody
    @RequestMapping(value = "/verify", method = RequestMethod.POST)
    public User verify(@RequestBody User user) {
        Iterable<User> it = userService.findByUsername(user.getUsername());
        if( it.iterator().hasNext() ) {
            return it.iterator().next();
        }
        return user;
    }

    //curl -H "Content-Type: application/json" -X PUT -d '{"id": 1, "task", "description","date": "taskTest"}' http://localhost:8080/user/1
    @ResponseBody
    @RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
    public int updateUser(@PathVariable  int id, @RequestBody User user) {
        return userService.save(user).getId();
    }

    //curl -X DELETE http://localhost:8080/user/1
    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public void updateUser(@PathVariable  int id) {
        userService.deleteById(id);
    }

    //curl  http://localhost:8080/user
    @ResponseBody
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public List<User> findAll() {
        return (List<User>)userService.findAll();
    }

    //curl  http://localhost:8080/user/1
    @ResponseBody
    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public Optional<User> userById(@PathVariable  int id) {
        return userService.findById(id);
    }

    @RequestMapping(value = "/page2", method = RequestMethod.GET)
    public String page() {
        return "user";
    }


}
