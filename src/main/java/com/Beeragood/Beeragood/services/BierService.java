package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.Bier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BierService extends CrudRepository<Bier, Integer > {
	Iterable<Bier> findByNaam(String naam);
}
