package com.Beeragood.Beeragood.controllers;

import com.Beeragood.Beeragood.model.Bier;
import com.Beeragood.Beeragood.services.BierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class BierController {

    @Autowired  private BierService bierService;

    //curl -H "Content-Type: application/json" -X POST -d '{"id": 0, "task", "description","date": "taskTest"}' http://localhost:8080/bier
    @ResponseBody
    @RequestMapping(value = "/bier", method = RequestMethod.POST)
    public int create(@RequestBody Bier bier) {
        return bierService.save(bier).getId();
    }

    //curl -H "Content-Type: application/json" -X PUT -d '{"id": 1, "task", "description","date": "taskTest"}' http://localhost:8080/bier/1
    @ResponseBody
    @RequestMapping(value = "/bier/{id}", method = RequestMethod.PUT)
    public int updateBier(@PathVariable  int id, @RequestBody Bier bier) {
        return bierService.save(bier).getId();
    }

    //curl -X DELETE http://localhost:8080/bier/1
    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/bier/{id}", method = RequestMethod.DELETE)
    public void updateBier(@PathVariable  int id) {
        bierService.deleteById(id);
    }

    //curl  http://localhost:8080/bier
    @ResponseBody
    @RequestMapping(value = "/bier", method = RequestMethod.GET)
    public List<Bier> findAll() {
        return (List<Bier>)bierService.findAll();
    }

    //curl  http://localhost:8080/bier/1
    @ResponseBody
    @RequestMapping(value = "/bier/{id}", method = RequestMethod.GET)
    public Optional<Bier> bierById(@PathVariable  int id) {
        return bierService.findById(id);
    }

    @RequestMapping(value = "/page", method = RequestMethod.GET)
    public String page() {
        return "bier";
    }
}

