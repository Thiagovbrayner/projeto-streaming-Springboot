package com.thiago.streamingapi.service;

import com.thiago.streamingapi.model.Categoria;
import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.repository.CategoriaRepository;
import com.thiago.streamingapi.repository.FilmeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService
{
    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository)
    {
        this.categoriaRepository = categoriaRepository;
    }

    public Categoria inserirCategoria(Categoria categoria)
    {
        return categoriaRepository.save(categoria);
    }

    public List<Categoria> listarCategorias()
    {
        return categoriaRepository.findAll();
    }

    public Optional<Categoria> buscarPorId(Long id)
    {
        return categoriaRepository.findById(id);
    }

    public void deletarCategoria(Long id)
    {
        categoriaRepository.deleteById(id);
    }

    public Categoria updateCategoria(Categoria categoria, Long id)
    {
        Categoria categoriaExistente = categoriaRepository.findById(id).orElseThrow();

        if (categoria.getNome() != null) categoriaExistente.setNome(categoria.getNome());

        return categoriaRepository.save(categoriaExistente);
    }
}
