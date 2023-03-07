package com.farmersmart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.farmersmart.pojo.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findByEmailIdAndPasswordAndRole(String emailId, String password, String role);
	List<User> findByRole(String role);

}
