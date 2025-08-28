# Contextos

Esta pasta contém os contextos React que gerenciam estado global da aplicação.

## 📁 Arquivos

### `AuthContext.jsx`
Cria o contexto de autenticação usando `createContext()`.

### `AuthProvider.jsx`  
Provê a lógica de autenticação para toda a aplicação.

**Estados gerenciados:**
- `user` - Dados do usuário logado (null se não estiver logado)
- `loading` - Indica se está verificando autenticação

**Funções disponibilizadas:**
- `signIn({ email, password })` - Fazer login
- `signUp({ name, email, password })` - Criar conta
- `signOut()` - Fazer logout

## 🎯 Como Funciona

1. **AuthContext** cria o contexto vazio
2. **AuthProvider** envolve a aplicação e fornece os dados
3. Componentes filhos acessam os dados através do hook `useAuth`

## 🔧 Uso na Aplicação

### No App.jsx:
```jsx
import { AuthProvider } from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      {/* Resto da aplicação */}
    </AuthProvider>
  );
}
```

### Em qualquer componente:
```jsx
import { useAuth } from '../hooks/useAuth';

function MeuComponente() {
  const { user, signOut, loading } = useAuth();

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <p>Bem-vindo, {user?.name}!</p>
      <button onClick={signOut}>Sair</button>
    </div>
  );
}
```

## 💡 Conceitos Importantes

**Context API:** Permite compartilhar dados entre componentes sem passar props manualmente por toda a árvore.

**Provider Pattern:** O AuthProvider "envolve" outros componentes e fornece dados para eles.

**Estado Global:** Dados que precisam ser acessados por vários componentes da aplicação (como informações do usuário logado).

## 🔒 Integração com Firebase

O AuthProvider integra com o Firebase Authentication:
- Escuta mudanças de estado de autenticação
- Sincroniza dados do usuário
- Gerencia tokens automaticamente