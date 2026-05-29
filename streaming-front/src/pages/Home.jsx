import { useEffect, useState } from 'react'
import api from '../services/api'
import FilmeCard from '../components/FilmeCard'
import Navbar from '../components/Navbar'

function Home() {

    const [filmes, setFilmes] = useState([])
    const [pesquisa, setPesquisa] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        api.get('/filmes')
            .then(response => {
                setFilmes(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    const filmesFiltrados = filmes.filter(filme =>
        filme.titulo
            .toLowerCase()
            .includes(pesquisa.toLowerCase())
    )
    return (

        <div>

            <Navbar
                pesquisa={pesquisa}
                setPesquisa={setPesquisa}
            />

            <div className="container">

                <h1 className="titulo-catalogo">
                    Catálogo de Filmes
                </h1>

                {loading ? (

                    <p>Carregando filmes...</p>

                ) : filmes.length === 0 ? (

                    <p>Nenhum filme encontrado.</p>

                ) : (

                    <div className="filmes-grid">

                        {filmesFiltrados.map(filme => (
                            <FilmeCard
                                key={filme.id}
                                filme={filme}
                            />

                        ))}

                    </div>

                )}

            </div>

        </div>
    )
}

export default Home