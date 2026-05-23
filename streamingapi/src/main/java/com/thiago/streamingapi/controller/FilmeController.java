package com.thiago.streamingapi.controller;

import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.service.FilmeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/filmes/{id}")
    public ResponseEntity<Filme> buscarPorId(@PathVariable Long id)
    {
        Optional<Filme> filme = filmeService.buscarPorId(id);

        if (filme.isPresent()) return ResponseEntity.ok(filme.get());
        else return ResponseEntity.notFound().build();
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

    @PutMapping("/filmes/{id}")
    public Filme updateFilme(@RequestBody Filme filme, @PathVariable Long id)
    {
         return filmeService.updateFilme(filme, id);
    }

}
