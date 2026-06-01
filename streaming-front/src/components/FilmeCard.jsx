function FilmeCard({ filme }) {

    return (

        <div className="filme-card">

            {filme.imagemUrl && (

                <img
                    className="filme-card-imagem"
                    src={filme.imagemUrl} // <-- Voltou ao texto puro original
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