// TODO: Importe useState, useCallback e useEffect do React.
// TODO: Importe as funções de autenticação do Firebase.
// TODO: Importe a instância 'auth' do arquivo de configuração do Firebase.
// TODO: Importe o 'api' para fazer requisições HTTP.
// TODO: Importe o AuthContext.

/**
 * ======================================================================================
 * Provedor de Autenticação (Authentication Provider)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este componente fornece as funcionalidades de autenticação para toda a aplicação.
 * É um "wrapper" que envolve outros componentes e fornece acesso aos dados/funções de auth.
 *
 * Responsabilidades:
 * ------------------
 * 1. Gerenciar o estado do usuário logado
 * 2. Controlar o estado de carregamento
 * 3. Implementar funções de login, registro e logout
 * 4. Escutar mudanças no estado de autenticação do Firebase
 * 5. Sincronizar dados do usuário com o backend
 *
 * Estados Importantes:
 * -------------------
 * - user: Dados do usuário logado (null se não estiver logado)
 * - loading: true enquanto verifica se há usuário logado
 */

// TODO: Crie e exporte a função AuthProvider que recebe { children } como parâmetro.
// Um provider é um componente que "fornece" dados para seus componentes filhos;
// Lembre-se que children são os componentes filhos que este provider irá envolver.
export function AuthProvider({ children }) {
  // 🎯 Objetivo 1: Configurar os estados
  // TODO: Crie um estado 'user' iniciando com null usando useState.
  // TODO: Crie um estado 'loading' iniciando com true usando useState.

  // 🎯 Objetivo 2: Escutar mudanças na autenticação
  // TODO: Use useEffect para configurar o listener do Firebase.
  // Use onAuthStateChanged(auth, (currentUser) => {}) para escutar mudanças.
  // Dentro do callback: atualize o user com currentUser e loading para false.
  // Retorne a função de cleanup: () => unsubscribe()

  // 🎯 Objetivo 3: Implementar função de login
  // TODO: Crie uma função signIn usando useCallback.
  // Parâmetros: { email, password }
  // Use signInWithEmailAndPassword(auth, email, password)
  // Em caso de sucesso, atualize o estado user
  // Em caso de erro, lance uma mensagem de erro amigável

  // 🎯 Objetivo 4: Implementar função de registro
  // TODO: Crie uma função signUp usando useCallback.
  // Parâmetros: { name, email, password }
  // Use createUserWithEmailAndPassword(auth, email, password)
  // Após criar no Firebase, envie os dados para o backend via api.post('/users')
  // Atualize o estado user com os dados do Firebase

  // 🎯 Objetivo 5: Implementar função de logout
  // TODO: Crie uma função signOut usando useCallback.
  // Use firebaseSignOut(auth) para deslogar do Firebase

  // 🎯 Objetivo 6: Retornar o Provider
  // TODO: Retorne o AuthContext.Provider com:
  // - value contendo: { user, loading, signIn, signUp, signOut }
  // - Renderize {children} apenas quando loading for false: {!loading && children}
}