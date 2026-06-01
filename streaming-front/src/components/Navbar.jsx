import { useNavigate } from 'react-router-dom'
import { useAutenticacao } from '../contexts/AuthContext'

function Navbar({ pesquisa, setPesquisa }) {

    const navigate = useNavigate()

    const { estaAutenticado, emailAdmin, sair } = useAutenticacao()

    function fazerLogout() {

        sair()

        // TODO(seguranca): Limpar todos os caches do lado do cliente no logout.
        // Redirecionamento completo garante estado limpo.
        window.location.href = '/'
    }

    return (

        <nav className="navbar">

            <h1
                className="logo"
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
            >
                ByteFlix
            </h1>

            {pesquisa !== undefined && setPesquisa && (

                <input
                    type="text"
                    placeholder="Pesquisar filmes..."
                    className="search-input"

                    value={pesquisa}

                    onChange={(e) =>
                        setPesquisa(e.target.value)
                    }
                />

            )}

            <div className="navbar-auth">

                {estaAutenticado ? (

                    <>
                        <span className="usuario-logado">
                            {emailAdmin}
                        </span>

                        <button
                            className="login-button"
                            onClick={() => navigate('/admin')}
                        >
                            Painel Admin
                        </button>

                        <button
                            className="logout-button"
                            onClick={fazerLogout}
                        >
                            Sair
                        </button>
                    </>

                ) : (

                    <button
                        className="login-button"

                        onClick={() => navigate('/login')}
                    >
                        Login Admin
                    </button>

                )}

            </div>

        </nav>
    )
}

export default Navbar