import { useNavigate } from 'react-router-dom'

function Navbar({ pesquisa, setPesquisa }) {

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    return (

        <nav className="navbar">

            <h1 className="logo">
                ByteFlix
            </h1>

            <input
                type="text"
                placeholder="Pesquisar filmes..."
                className="search-input"

                value={pesquisa}

                onChange={(e) =>
                    setPesquisa(e.target.value)
                }
            />

            {token ? (

                <p className="usuario-logado">
                    Admin Logado
                </p>

            ) : (

                <button
                    className="login-button"

                    onClick={() => navigate('/login')}
                >
                    Login Admin
                </button>

            )}

        </nav>
    )
}

export default Navbar