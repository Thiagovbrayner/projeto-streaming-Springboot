import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAutenticacao } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
import api from '../services/api'

function FilmeForm() {

    const navigate = useNavigate()

    const { id } = useParams()

    const { token } = useAutenticacao()

    const editando = !!id

    const [titulo, setTitulo] = useState('')
    const [diretor, setDiretor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [categoriaId, setCategoriaId] = useState('')
    const [imagemUrl, setImagemUrl] = useState('')

    const [categorias, setCategorias] = useState([])

    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState('')

    useEffect(() => {

        carregarCategorias()

        if (editando) {
            carregarFilme()
        }

    }, [])

    function carregarCategorias() {
        api.get('/categorias')
            .then(response => {
                setCategorias(response.data)
            })
            .catch(() => {
                setErro('Erro ao carregar categorias.')
            })
    }

    function carregarFilme() {
        api.get(`/filmes/${id}`)
            .then(response => {
                const filme = response.data

                setTitulo(filme.titulo)
                setDiretor(filme.diretor)
                setDescricao(filme.descricao || '')
                setCategoriaId(filme.categoria?.id || '')
                setImagemUrl(filme.imagemUrl || '') // Voltou ao original puro
            })
            .catch(() => {
                setErro('Erro ao carregar dados do filme.')
            })
    }

    async function salvarFilme(e) {
        e.preventDefault()

        setErro('')
        setCarregando(true)

        const dados = {
            titulo: titulo,
            diretor: diretor,
            descricao: descricao,
            categoriaId: Number(categoriaId),
            imagemUrl: imagemUrl || null // Voltou ao original puro, sem encode
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            if (editando) {
                await api.put(`/filmes/${id}`, dados, config)
            } else {
                await api.post('/filmes', dados, config)
            }

            navigate('/admin')
        } catch {
            setErro(editando
                ? 'Erro ao atualizar filme.'
                : 'Erro ao cadastrar filme.'
            )
        } finally {
            setCarregando(false)
        }
    }

    return (
        <div>
            <Navbar />

            <div className="container">
                <h1 className="titulo-catalogo">
                    {editando ? 'Editar Filme' : 'Novo Filme'}
                </h1>

                {erro && (
                    <p className="admin-erro">
                        {erro}
                    </p>
                )}

                <form className="filme-form" onSubmit={salvarFilme}>
                    <div className="campo-grupo">
                        <label className="campo-label">Título</label>
                        <input
                            type="text"
                            className="campo-input"
                            placeholder="Digite o título do filme"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="campo-grupo">
                        <label className="campo-label">Diretor</label>
                        <input
                            type="text"
                            className="campo-input"
                            placeholder="Digite o nome do diretor"
                            value={diretor}
                            onChange={(e) => setDiretor(e.target.value)}
                            required
                        />
                    </div>

                    <div className="campo-grupo">
                        <label className="campo-label">Categoria</label>
                        <select
                            className="campo-input"
                            value={categoriaId}
                            onChange={(e) => setCategoriaId(e.target.value)}
                            required
                        >
                            <option value="">Selecione uma categoria</option>
                            {categorias.map(categoria => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="campo-grupo">
                        <label className="campo-label">Descrição</label>
                        <textarea
                            className="campo-input campo-textarea"
                            placeholder="Digite a descrição do filme"
                            rows="4"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div className="campo-grupo">
                        <label className="campo-label">URL da Imagem</label>
                        <input
                            type="url"
                            className="campo-input"
                            placeholder="Cole a URL da imagem do filme"
                            value={imagemUrl}
                            onChange={(e) => setImagemUrl(e.target.value)}
                        />

                        {imagemUrl && (
                            <div className="preview-imagem">
                                <p className="campo-label">Preview:</p>
                                <img
                                    src={imagemUrl}
                                    alt="Preview"
                                    className="preview-img"
                                />
                            </div>
                        )}
                    </div>

                    <div className="form-botoes">
                        <button
                            type="button"
                            className="botao-cancelar"
                            onClick={() => navigate('/admin')}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="botao-salvar"
                            disabled={carregando}
                        >
                            {carregando
                                ? 'Salvando...'
                                : editando
                                    ? 'Atualizar Filme'
                                    : 'Cadastrar Filme'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FilmeForm