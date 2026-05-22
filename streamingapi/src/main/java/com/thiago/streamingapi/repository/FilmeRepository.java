package com.thiago.streamingapi.repository;

import com.thiago.streamingapi.model.Filme;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmeRepository extends JpaRepository<Filme, Long>
{

}
