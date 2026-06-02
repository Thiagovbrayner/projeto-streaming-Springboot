import { useNavigate } from 'react-router-dom'

function FilmeCard({ filme }) {

    const navigate = useNavigate()

    return (

        <div
            className="filme-card"
            onClick={() => navigate(`/filmes/${filme.id}`)}
            style={{ cursor: 'pointer' }}
        >

            {filme.imagemUrl && (

                <img
                    className="filme-card-imagem"
                    src={filme.imagemUrl}
                    alt={filme.titulo}
                />

            )}

            <div className="filme-card-conteudo">

                <h2>{filme.titulo}</h2>

                <p>
                    <strong>Diretor:</strong> {filme.diretor}
                </p>

                <p>
                    <strong>Categoria:</strong> {filme.categoria?.nome}
                </p>

                <p className="descricao">
                    {filme.descricao}
                </p>

            </div>

        </div>

    )
}

export default FilmeCard