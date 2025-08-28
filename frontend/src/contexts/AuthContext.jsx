// TODO: Importe o createContext do React.

/**
 * ======================================================================================
 * Contexto de Autenticação (Authentication Context)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * O Context é uma forma de compartilhar dados entre componentes sem precisar
 * passar props manualmente por toda a árvore de componentes.
 * 
 * Este contexto específico irá compartilhar:
 * - Informações do usuário logado
 * - Estado de carregamento da autenticação
 * - Funções para login, logout e registro
 *
 * Como funciona:
 * --------------
 * 1. Criamos o contexto com createContext()
 * 2. Fornecemos valores através de um Provider
 * 3. Consumimos os valores em qualquer componente filho
 */

// 🎯 Objetivo: Criar o contexto de autenticação
// TODO: Use createContext() para criar e exportar o AuthContext.
// Passe um objeto vazio {} como valor inicial.
// Ex: export const AuthContext = createContext({});