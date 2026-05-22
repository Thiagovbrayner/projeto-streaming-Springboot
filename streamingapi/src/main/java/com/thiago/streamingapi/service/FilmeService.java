package com.thiago.streamingapi.service;

import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.repository.FilmeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
