import { createContext, useContext, useState, useEffect } from 'react'

const AutenticacaoContext = createContext(null)

// TODO(seguranca): Tokens JWT deveriam ser armazenados em cookies HttpOnly
// configurados pelo backend, e nao no localStorage, para mitigar roubo por XSS.
// Isso requer mudancas no backend para enviar cookies na resposta de login.

function decodificarToken(token) {

    try {

        const payloadBase64 = token.split('.')[1]

        const payloadJson = atob(payloadBase64)

        return JSON.parse(payloadJson)

    } catch {

        return null
    }
}

function tokenExpirado(payload) {

    if (!payload || !payload.exp) return true

    const agora = Date.now() / 1000

    return payload.exp < agora
}

export function ProvedorAutenticacao({ children }) {

    const [token, setToken] = useState(null)
    const [emailAdmin, setEmailAdmin] = useState(null)

    useEffect(() => {

        const tokenSalvo = localStorage.getItem('token')

        if (tokenSalvo) {

            const dados = decodificarToken(tokenSalvo)

            if (dados && !tokenExpirado(dados)) {

                setToken(tokenSalvo)
                setEmailAdmin(dados.sub)

            } else {

                localStorage.removeItem('token')
            }
        }

    }, [])

    function entrar(novoToken) {

        localStorage.setItem('token', novoToken)

        const dados = decodificarToken(novoToken)

        setToken(novoToken)
        setEmailAdmin(dados?.sub || null)
    }

    function sair() {

        localStorage.removeItem('token')

        setToken(null)
        setEmailAdmin(null)
    }

    const estaAutenticado = !!token

    return (

        <AutenticacaoContext.Provider value={{
            token,
            emailAdmin,
            estaAutenticado,
            entrar,
            sair
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}

export function useAutenticacao() {

    const contexto = useContext(AutenticacaoContext)

    if (!contexto) {
        throw new Error('useAutenticacao deve ser usado dentro de um ProvedorAutenticacao')
    }

    return contexto
}
