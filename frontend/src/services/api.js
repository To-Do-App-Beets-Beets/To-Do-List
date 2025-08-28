// TODO: Importe o axios.
// TODO: Importe signOut do 'firebase/auth'.
// TODO: Importe a instância 'auth' do arquivo firebase.js.

/**
 * ======================================================================================
 * Configuração da API HTTP (HTTP API Configuration)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este arquivo configura o cliente HTTP para comunicação com o backend.
 * Inclui configurações automáticas de autenticação e tratamento de erros.
 *
 * Funcionalidades:
 * ---------------
 * 1. Configuração base da URL do backend
 * 2. Interceptor de requisição: adiciona token de autenticação automaticamente
 * 3. Interceptor de resposta: trata erros de autenticação automaticamente
 *
 * Interceptors:
 * ------------
 * São funções que executam automaticamente antes de enviar requisições
 * ou após receber respostas, permitindo modificar ou tratar os dados.
 */

// 🎯 Objetivo 1: Criar instância do Axios
// TODO: Use axios.create() para criar uma instância personalizada da API.
// Configure as seguintes opções:
// - baseURL: import.meta.env.VITE_API_URL ou 'http://localhost:3001/api' como padrão
// - headers: { 'Content-Type': 'application/json' }

// 🎯 Objetivo 2: Configurar interceptor de requisição
// TODO: Use api.interceptors.request.use() para adicionar token automaticamente.
// A função deve:
// 1. Obter o usuário atual: auth.currentUser
// 2. Se houver usuário, obter o token: await user.getIdToken(true)
// 3. Adicionar o token no header: config.headers.authorization = `Bearer ${token}`
// 4. Retornar config
// 5. Tratar erros retornando Promise.reject(error)

// 🎯 Objetivo 3: Configurar interceptor de resposta
// TODO: Use api.interceptors.response.use() para tratar erros de autenticação.
// A função deve:
// 1. Em caso de sucesso, retornar a response
// 2. Em caso de erro 401 ou 403, chamar signOut(auth) para deslogar
// 3. Retornar Promise.reject(error)

// 🎯 Objetivo 4: Exportar a instância
// TODO: Exporte a instância configurada como padrão.