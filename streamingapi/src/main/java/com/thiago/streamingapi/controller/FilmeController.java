package com.thiago.streamingapi.controller;

import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.service.FilmeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FilmeController
{
    private final FilmeService filmeService;

    public FilmeController(FilmeService filmeService)
    {
        this.filmeService = filmeService;
    }

    @GetMapping("/filme")
    public Filme filme()
    {
        return filmeService.criarFilme();
    }

}
