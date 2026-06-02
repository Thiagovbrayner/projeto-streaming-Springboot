import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import api from '../services/api.js'

function DetalheFilme() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState(null)

    useEffect(() => {

        api.get(`/filmes/${id}`)
            .then(response => {
                setFilme(response.data)
            })

    }, [id])

    if (!filme) {
        return <p>Carregando...</p>
    }

    return (

        <div>

            <Navbar />

            <div className="container">

                <div className="detalhes-topo">

                    <button
                        className="botao-cancelar"
                        onClick={() => navigate('/')}
                    >
                        ← Voltar para Home
                    </button>

                </div>

                <div className="detalhes-info">

                    <h1>{filme.titulo}</h1>

                    <p>
                        <strong>Diretor:</strong> {filme.diretor}
                    </p>

                    <p>
                        <strong>Categoria:</strong> {filme.categoria?.nome}
                    </p>

                    <p>
                        {filme.descricao}
                    </p>

                    <button className="botao-play">
                        ▶ Assistir
                    </button>

                </div>

            </div>

        </div>
    )
}

export default DetalheFilme