package com.thiago.streamingapi.service;

import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.repository.FilmeRepository;
import org.springframework.stereotype.Service;

@Service
public class FilmeService
{
    private final FilmeRepository filmeRepository;

    public FilmeService(FilmeRepository filmeRepository)
    {
        this.filmeRepository = filmeRepository;
    }

    public Filme criarFilme()
    {
        Filme filme = new Filme();
        filme.setTitulo("Casino");
        filme.setDiretor("Martin Scorsese");
        filme.setGenero("Crime");
        return filmeRepository.save(filme);
    }
}
