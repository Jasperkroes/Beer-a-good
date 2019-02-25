package com.Beeragood.Beeragood.controllers;

import com.Beeragood.Beeragood.model.Locatie;
import com.Beeragood.Beeragood.services.LocatieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class LocatieController {

    @Autowired  private LocatieService locatieService;

    //curl -H "Content-Type: application/json" -X POST -d '{"id": 0, "task", "description","date": "taskTest"}' http://localhost:8080/locatie
//    @ResponseBody
//    @RequestMapping(value = "/locatie", method = RequestMethod.POST)
//    public int create(@RequestBody Locatie locatie) {
//        return locatieService.save(locatie).getId();
//    }

    //curl -H "Content-Type: application/json" -X PUT -d '{"id": 1, "task", "description","date": "taskTest"}' http://localhost:8080/locatie/1
    @ResponseBody
    @RequestMapping(value = "/locatie/{id}", method = RequestMethod.PUT)
    public int updateLocatie(@PathVariable  int id, @RequestBody Locatie locatie) {
        return locatieService.save(locatie).getId();
    }

    //curl -X DELETE http://localhost:8080/locatie/1
    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/locatie/{id}", method = RequestMethod.DELETE)
    public void updateLocatie(@PathVariable  int id) {
        locatieService.deleteById(id);
    }

    //curl  http://localhost:8080/locatie
    @ResponseBody
    @RequestMapping(value = "/locatie", method = RequestMethod.GET)
    public List<Locatie> findAll() {
        return (List<Locatie>)locatieService.findAll();
    }

    //curl  http://localhost:8080/locatie/1
    @ResponseBody
    @RequestMapping(value = "/locatie/{id}", method = RequestMethod.GET)
    public Optional<Locatie> locatieById(@PathVariable  int id) {
        return locatieService.findById(id);
    }

    @RequestMapping(value = "/page5", method = RequestMethod.GET)
    public String page() {
        return "locatie";
    }

    @ResponseBody
    @RequestMapping(value = "/locatie", method = RequestMethod.POST)
    public int create(@RequestBody ArrayList<Locatie> locaties) {

            for (Locatie locatie: locaties) {
                locatieService.save(locatie);
            }
            return locaties.size();
        }


    }


