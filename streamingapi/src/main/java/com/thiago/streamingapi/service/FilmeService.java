package com.thiago.streamingapi.service;

import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.repository.FilmeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilmeService
{
    private final FilmeRepository filmeRepository;

    public FilmeService(FilmeRepository filmeRepository)
    {
        this.filmeRepository = filmeRepository;
    }

    public Filme inserirFilme(Filme filme)
    {
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

    public Filme updateFilme(Filme filme, Long id)
    {
        Filme filmeExistente = filmeRepository.findById(id).orElseThrow();

        if (filme.getTitulo() != null) filmeExistente.setTitulo(filme.getTitulo());
        if (filme.getDiretor() != null) filmeExistente.setDiretor(filme.getDiretor());
        if (filme.getGenero() != null) filmeExistente.setGenero(filme.getGenero());
        if (filme.getDescricao() != null) filmeExistente.setDescricao(filme.getDescricao());

        return filmeRepository.save(filmeExistente);
    }

}
