package com.Beeragood.Beeragood.services;

import com.Beeragood.Beeragood.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserService extends CrudRepository<User, Integer > {
Iterable<User> findByUsernameAndPassword(String username, String password);
}
