package com.thiago.streamingapi.service;

import com.thiago.streamingapi.dto.FilmeRequestDTO;
import com.thiago.streamingapi.model.Categoria;
import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.repository.CategoriaRepository;
import com.thiago.streamingapi.repository.FilmeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilmeService
{
    private final FilmeRepository filmeRepository;
    private final CategoriaRepository categoriaRepository;

    public FilmeService(FilmeRepository filmeRepository, CategoriaRepository categoriaRepository)
    {
        this.filmeRepository = filmeRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public Filme inserirFilme(FilmeRequestDTO filmeRequestDTO)
    {
        Filme filme = new Filme();
        filme.setTitulo(filmeRequestDTO.getTitulo());
        filme.setDescricao(filmeRequestDTO.getDescricao());
        filme.setDiretor(filmeRequestDTO.getDiretor());
        Categoria categoria = categoriaRepository.findById(filmeRequestDTO.getCategoriaId()).orElseThrow();
        filme.setCategoria(categoria);
        return filmeRepository.save(filme);
    }

    public List<Filme> listarFilmes()
    {
        return filmeRepository.findAll();
    }

    public Optional<Filme> buscarPorId(Long id)
    {
        return filmeRepository.findById(id);
    }

    public void deletarFilme(Long id)
    {
        filmeRepository.deleteById(id);
    }

    public Filme updateFilme(FilmeRequestDTO filmeRequestDTO, Long id)
    {
        Filme filmeExistente = filmeRepository.findById(id).orElseThrow();

        if (filmeRequestDTO.getTitulo() != null) filmeExistente.setTitulo(filmeRequestDTO.getTitulo());
        if (filmeRequestDTO.getDiretor() != null) filmeExistente.setDiretor(filmeRequestDTO.getDiretor());
        if (filmeRequestDTO.getCategoriaId() != null)
        {
            Categoria categoria =  categoriaRepository.findById(filmeRequestDTO.getCategoriaId()).orElseThrow();
            filmeExistente.setCategoria(categoria);
        }
        if (filmeRequestDTO.getDescricao() != null) filmeExistente.setDescricao(filmeRequestDTO.getDescricao());

        return filmeRepository.save(filmeExistente);
    }

}
