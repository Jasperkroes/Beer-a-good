package com.Beeragood.Beeragood.controllers;

import com.Beeragood.Beeragood.model.Rate;
import com.Beeragood.Beeragood.services.RateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class RateController {

    @Autowired  private RateService rateService;

    //curl -H "Content-Type: application/json" -X POST -d '{"id": 0, "task", "description","date": "taskTest"}' http://localhost:8080/rate
    @ResponseBody
    @RequestMapping(value = "/rate", method = RequestMethod.POST)
    public int create(@RequestBody Rate rate) {
        return rateService.save(rate).getId();
    }

    //curl -H "Content-Type: application/json" -X PUT -d '{"id": 1, "task", "description","date": "taskTest"}' http://localhost:8080/rate/1
    @ResponseBody
    @RequestMapping(value = "/rate/{id}", method = RequestMethod.PUT)
    public int updateRate(@PathVariable  int id, @RequestBody Rate rate) {
        return rateService.save(rate).getId();
    }

    //curl -X DELETE http://localhost:8080/rate/1
    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/rate/{id}", method = RequestMethod.DELETE)
    public void updateRate(@PathVariable  int id) {
        rateService.deleteById(id);
    }

    //curl  http://localhost:8080/rate
    @ResponseBody
    @RequestMapping(value = "/rate", method = RequestMethod.GET)
    public List<Rate> findAll() {
        return (List<Rate>)rateService.findAll();
    }

    //curl  http://localhost:8080/rate/1
    @ResponseBody
    @RequestMapping(value = "/rate/{id}", method = RequestMethod.GET)
    public Optional<Rate> rateById(@PathVariable  int id) {
        return rateService.findById(id);
    }

    @RequestMapping(value = "/page3", method = RequestMethod.GET)
    public String page() {
        return "rate";
    }

    @ResponseBody
    @RequestMapping(value = "/historyQry", method = RequestMethod.GET)
    public List<Rate> getAllRatingsByUserId(@RequestParam(value="user") int id) {
        return rateService.findByUseridNativeQuery(id);
    }
}

