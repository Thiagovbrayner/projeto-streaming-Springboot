import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAutenticacao } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
import api from '../services/api'

function Admin() {

    const navigate = useNavigate()

    const { emailAdmin, token } = useAutenticacao()

    const [filmes, setFilmes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')
    const [excluindo, setExcluindo] = useState(null)

    useEffect(() => {

        carregarFilmes()

    }, [])

    function carregarFilmes() {

        setCarregando(true)
        setErro('')

        api.get('/filmes')
            .then(response => {
                setFilmes(response.data)
            })
            .catch(() => {
                setErro('Erro ao carregar filmes.')
            })
            .finally(() => {
                setCarregando(false)
            })
    }

    function confirmarExclusao(id) {

        setExcluindo(id)
    }

    function cancelarExclusao() {

        setExcluindo(null)
    }

    function excluirFilme(id) {

        setErro('')

        api.delete(`/filmes/${id}`, {

            headers: {
                Authorization: `Bearer ${token}`
            }

        })
            .then(() => {
                setExcluindo(null)
                carregarFilmes()
            })
            .catch(() => {
                setExcluindo(null)
                setErro('Erro ao excluir filme.')
            })
    }

    return (

        <div>

            <Navbar />

            <div className="container">

                <div className="admin-cabecalho">

                    <div>

                        <h1 className="titulo-catalogo">
                            Painel Administrativo
                        </h1>

                        <p className="admin-bemvindo">
                            Logado como <strong>{emailAdmin}</strong>
                        </p>

                    </div>

                    <button
                        className="botao-novo-filme"
                        onClick={() => navigate('/admin/novo-filme')}
                    >
                        + Novo Filme
                    </button>

                </div>

                {erro && (

                    <p className="admin-erro">
                        {erro}
                    </p>

                )}

                {carregando ? (

                    <p className="admin-carregando">
                        Carregando filmes...
                    </p>

                ) : filmes.length === 0 ? (

                    <p className="admin-carregando">
                        Nenhum filme cadastrado.
                    </p>

                ) : (

                    <div className="tabela-container">

                        <table className="tabela-filmes">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th>Diretor</th>
                                    <th>Categoria</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody>

                                {filmes.map(filme => (

                                    <tr key={filme.id}>

                                        <td>{filme.id}</td>

                                        <td>{filme.titulo}</td>

                                        <td>{filme.diretor}</td>

                                        <td>{filme.categoria?.nome}</td>

                                        <td>

                                            {excluindo === filme.id ? (

                                                <div className="confirmacao-excluir">

                                                    <span className="confirmacao-texto">
                                                        Excluir?
                                                    </span>

                                                    <button
                                                        className="botao-confirmar-sim"
                                                        onClick={() =>
                                                            excluirFilme(filme.id)
                                                        }
                                                    >
                                                        Sim
                                                    </button>

                                                    <button
                                                        className="botao-confirmar-nao"
                                                        onClick={cancelarExclusao}
                                                    >
                                                        Não
                                                    </button>

                                                </div>

                                            ) : (

                                                <div className="acoes-botoes">

                                                    <button
                                                        className="botao-editar"
                                                        onClick={() =>
                                                            navigate(`/admin/editar-filme/${filme.id}`)
                                                        }
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="botao-excluir"
                                                        onClick={() =>
                                                            confirmarExclusao(filme.id)
                                                        }
                                                    >
                                                        Excluir
                                                    </button>

                                                </div>

                                            )}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>
    )
}

export default Admin
