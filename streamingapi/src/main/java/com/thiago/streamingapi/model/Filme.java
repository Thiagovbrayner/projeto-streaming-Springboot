package com.thiago.streamingapi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Filme
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String titulo;

    @NotBlank
    private String diretor;

    @ManyToOne
    private Categoria categoria;

    private String descricao;

    @Column(name = "url_imagem", length = 1000) 
    private String imagemUrl;

    public Filme(Long id, String titulo, String diretor, Categoria categoria, String descricao, String imagemUrl)
    {
        this.id = id;
        this.titulo = titulo;
        this.diretor = diretor;
        this.categoria = categoria;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
    }

    public Filme()
    {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }
}


