import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAutenticacao } from '../contexts/AuthContext'

function Login() {

    const navigate = useNavigate()

    const { entrar, estaAutenticado } = useAutenticacao()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    if (estaAutenticado) {

        navigate('/')
        return null
    }

    async function fazerLogin(e) {

        e.preventDefault()

        setErro('')

        try {

            const response = await api.post('/login', {

                email: email,
                senha: senha

            })

            entrar(response.data)

            navigate('/')

        } catch {

            setErro('Email ou senha inválidos')
        }
    }

    return (

        <div className="login-container">

            <form
                className="login-form"
                onSubmit={fazerLogin}
            >

                <h1>Login Admin</h1>

                {erro && (

                    <p className="login-erro">
                        {erro}
                    </p>

                )}

                <input
                    type="email"
                    placeholder="Digite seu email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Digite sua senha"

                    value={senha}

                    onChange={(e) =>
                        setSenha(e.target.value)
                    }
                />

                <button type="submit">
                    Entrar
                </button>

            </form>

        </div>
    )
}

export default Login