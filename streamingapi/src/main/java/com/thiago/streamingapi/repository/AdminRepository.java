package com.thiago.streamingapi.repository;
import com.thiago.streamingapi.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long>
{
    Optional<Admin> findByEmail(String email);
}
