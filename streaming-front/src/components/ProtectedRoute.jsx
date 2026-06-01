import { Navigate } from 'react-router-dom'
import { useAutenticacao } from '../contexts/AuthContext'

function RotaProtegida({ children }) {

    const { estaAutenticado } = useAutenticacao()

    if (!estaAutenticado) {

        return <Navigate to="/login" replace />
    }

    return children
}

export default RotaProtegida
