package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.Rate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RateService extends CrudRepository<Rate, Integer > {
}
