// TODO: Importe useContext do React.
// TODO: Importe o AuthContext.

/**
 * ======================================================================================
 * Hook Personalizado de Autenticação (Custom Authentication Hook)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este é um hook personalizado que facilita o acesso aos dados de autenticação.
 * Em vez de usar useContext(AuthContext) diretamente em cada componente,
 * usamos este hook que também inclui validação de uso correto.
 *
 * Vantagens:
 * ----------
 * 1. Simplifica o uso: useAuth() em vez de useContext(AuthContext)
 * 2. Inclui validação automática de uso correto
 * 3. Melhor experiência de desenvolvimento com mensagens de erro claras
 * 4. Centraliza a lógica de acesso ao contexto
 */

// TODO: Crie e exporte a função useAuth.
export function useAuth() {
  // 🎯 Objetivo 1: Acessar o contexto
  // TODO: Use useContext(AuthContext) para acessar os dados do contexto.
  // Armazene o resultado em uma variável chamada 'context'.

  // 🎯 Objetivo 2: Validar o uso correto
  // TODO: Verifique se o context existe (!context).
  // Se não existir, lance um erro com a mensagem:
  // 'useAuth deve ser usado dentro de um AuthProvider'

  // 🎯 Objetivo 3: Retornar os dados
  // TODO: Retorne o context para que o componente possa usar os dados de auth.
}