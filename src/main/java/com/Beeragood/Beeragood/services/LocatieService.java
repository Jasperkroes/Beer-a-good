package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.Locatie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocatieService extends CrudRepository<Locatie, Integer > {
}
