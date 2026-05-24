package com.thiago.streamingapi.controller;

import com.thiago.streamingapi.model.Categoria;
import com.thiago.streamingapi.model.Filme;
import com.thiago.streamingapi.service.CategoriaService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CategoriaController
{
    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService)
    {
        this.categoriaService = categoriaService;
    }

    @GetMapping("/categorias")
    public List<Categoria> listarCategorias()
    {
        return categoriaService.listarCategorias();
    }

    @GetMapping("/categorias/{id}")
    public ResponseEntity<Categoria> buscarPorId(@PathVariable Long id)
    {
        Optional<Categoria> categoria = categoriaService.buscarPorId(id);

        if (categoria.isPresent()) return ResponseEntity.ok(categoria.get());
        else return ResponseEntity.notFound().build();
    }

    @PostMapping("/categorias")
    public Categoria inserirCategoria(@Valid @RequestBody Categoria categoria)
    {
        return categoriaService.inserirCategoria(categoria);
    }

    @DeleteMapping("/categorias/{id}")
    public void deletarCategoria(@PathVariable Long id)
    {
        categoriaService.deletarCategoria(id);
    }

    @PutMapping("/categorias/{id}")
    public Categoria updateCategoria(@Valid @RequestBody Categoria categoria, @PathVariable Long id)
    {
        return categoriaService.updateCategoria(categoria, id);
    }
}
