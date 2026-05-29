import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function fazerLogin(e) {

        e.preventDefault()

        try {

            const response = await api.post('/login', {

                email: email,
                senha: senha

            })
            console.log(response.data)

            localStorage.setItem(
                'token',
                response.data
            )

            alert('Login realizado com sucesso!')

            navigate('/')

        } catch (error) {

            alert('Email ou senha inválidos')

            console.log(error)
        }
    }

    return (

        <div className="login-container">

            <form
                className="login-form"
                onSubmit={fazerLogin}
            >

                <h1>Login Admin</h1>

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