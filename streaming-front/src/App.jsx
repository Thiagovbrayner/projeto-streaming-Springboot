import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProvedorAutenticacao } from './contexts/AuthContext'

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import FilmeForm from './pages/FilmeForm'
import RotaProtegida from './components/ProtectedRoute'

function App() {

    return (

        <BrowserRouter>

            <ProvedorAutenticacao>

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/admin" element={
                        <RotaProtegida>
                            <Admin />
                        </RotaProtegida>
                    } />

                    <Route path="/admin/novo-filme" element={
                        <RotaProtegida>
                            <FilmeForm />
                        </RotaProtegida>
                    } />

                    <Route path="/admin/editar-filme/:id" element={
                        <RotaProtegida>
                            <FilmeForm />
                        </RotaProtegida>
                    } />

                </Routes>

            </ProvedorAutenticacao>

        </BrowserRouter>
    )
}

export default App