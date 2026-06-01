import { createContext, useContext, useState, useEffect } from 'react'

const AutenticacaoContext = createContext(null)


function decodificarToken(token) {

    try {

        const payloadBase64 = token.split('.')[1]

        const payloadJson = atob(payloadBase64)

        return JSON.parse(payloadJson)

    } catch {

        return null
    }
}

function tokenValido(token) {

    const dados = decodificarToken(token)

    return dados !== null
}

export function ProvedorAutenticacao({ children }) {

    const [token, setToken] = useState(null)
    const [emailAdmin, setEmailAdmin] = useState(null)

    useEffect(() => {

        const tokenSalvo = localStorage.getItem('token')

        if (tokenSalvo && tokenValido(tokenSalvo)) {

            const dados = decodificarToken(tokenSalvo)

            setToken(tokenSalvo)
            setEmailAdmin(dados.sub)

        } else if (tokenSalvo) {

            localStorage.removeItem('token')
        }

    }, [])

    function entrar(novoToken) {
        const dados = decodificarToken(novoToken)

        if (!dados) {
            console.error("Token inválido recebido do servidor");
            sair();
            return;
        }

        localStorage.setItem('token', novoToken)
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
