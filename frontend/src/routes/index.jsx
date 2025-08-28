// TODO: Importe Routes, Route e Navigate do 'react-router-dom'.
// TODO: Importe as páginas: Login, Register, Users e Dashboard.
// TODO: Importe o hook useAuth.

/**
 * ======================================================================================
 * Sistema de Rotas da Aplicação (Application Routing System)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este arquivo define todas as rotas (URLs) da aplicação e controla a navegação.
 * Inclui proteção de rotas baseada no estado de autenticação do usuário.
 *
 * Tipos de Rotas:
 * ---------------
 * 1. Rotas Públicas: Acessíveis sem login (ex: /login, /register)
 * 2. Rotas Privadas: Requerem autenticação (ex: /dashboard, /users)
 * 3. Redirecionamentos: Baseados no status de autenticação
 *
 * Componente PrivateRoute:
 * ------------------------
 * É um wrapper que verifica se o usuário está logado antes de renderizar
 * o componente. Se não estiver logado, redireciona para /login.
 */

// 🎯 Objetivo 1: Criar componente de rota privada
// TODO: Crie uma função PrivateRoute que recebe { children } como parâmetro.
// Use o hook useAuth() para obter { user }.
// Se user existir, retorne children, caso contrário retorne <Navigate to="/login" />

// 🎯 Objetivo 2: Criar o componente principal de rotas
// TODO: Crie e exporte como padrão a função AppRoutes.
export default function AppRoutes() {
  // TODO: Use o hook useAuth() para obter { user }.

  // 🎯 Objetivo 3: Definir as rotas
  // TODO: Retorne o componente Routes contendo as seguintes Route:
  
  // Rota de Login:
  // path="/login"
  // element={user ? <Navigate to="/dashboard" /> : <Login />}
  
  // Rota de Registro:
  // path="/register" 
  // element={user ? <Navigate to="/dashboard" /> : <Register />}
  
  // Rota do Dashboard (protegida):
  // path="/dashboard"
  // element={<PrivateRoute><Dashboard /></PrivateRoute>}
  
  // Rota de Usuários (protegida):
  // path="/users"
  // element={<PrivateRoute><Users /></PrivateRoute>}
  
  // Rota raiz (redirecionamento):
  // path="/"
  // element={<Navigate to={user ? "/dashboard" : "/login"} />}
}