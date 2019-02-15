package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.Rate;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface RateService extends CrudRepository<Rate, Integer > {

@Query(value = "select * from rate where user_id = :id", nativeQuery=true)
List<Rate> findByUseridNativeQuery(int id);
}
