package com.thiago.streamingapi.controller;

import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.service.FilmeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FilmeController
{
    private final FilmeService filmeService;

    public FilmeController(FilmeService filmeService)
    {
        this.filmeService = filmeService;
    }

    @GetMapping("/filmes")
    public List<Filme> listarFilmes()
    {
        return filmeService.listarFilmes();
    }

    @PostMapping("/filmes")
    public Filme inserirFilme(@RequestBody Filme filme)
    {
        return filmeService.inserirFilme(filme);
    }

    @DeleteMapping("/filmes/{id}")
    public void deleteFilme(@PathVariable Long id)
    {
        filmeService.deletarFilme(id);
    }

}
