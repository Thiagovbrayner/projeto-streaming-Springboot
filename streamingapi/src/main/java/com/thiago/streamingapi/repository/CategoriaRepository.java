package com.thiago.streamingapi.repository;

import com.thiago.streamingapi.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria,Long>
{

}
