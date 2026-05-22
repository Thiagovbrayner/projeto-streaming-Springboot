package com.thiago.streamingapi.service;

import com.thiago.streamingapi.model.Filme;
import org.springframework.stereotype.Service;

@Service
public class FilmeService
{
    public Filme criarFilme()
    {
        Filme filme = new Filme
                (1L, "Goodfellas", "Martin Scorsese", "Crime",
                "Ascensão e queda na máfia na visão de Henry Hill"
                );
        return filme;
    }
}
