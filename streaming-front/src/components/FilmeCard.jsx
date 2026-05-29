function FilmeCard({ filme }) {

    return (

        <div className="filme-card">

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
    )
}

export default FilmeCard