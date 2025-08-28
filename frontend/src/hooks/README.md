# Hooks Personalizados

Esta pasta contém hooks React customizados que encapsulam lógica reutilizável.

## 📁 Arquivos

### `useAuth.js`
Hook que facilita o acesso aos dados de autenticação.

**O que retorna:**
```javascript
const { user, loading, signIn, signUp, signOut } = useAuth();
```

**Funcionalidades:**
- Acessa o contexto de autenticação
- Valida se está sendo usado corretamente
- Fornece interface simples para componentes

## 🎯 Por Que Usar Hooks Personalizados?

### Antes (sem hook personalizado):
```jsx
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function MeuComponente() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('Deve estar dentro de AuthProvider');
  }
  
  const { user, signOut } = context;
  // ... resto do código
}
```

### Depois (com useAuth):
```jsx
import { useAuth } from '../hooks/useAuth';

function MeuComponente() {
  const { user, signOut } = useAuth();
  // ... resto do código
}
```

## 🔧 Como Funciona o useAuth

1. **Acessa o contexto** - Usa `useContext(AuthContext)`
2. **Valida o uso** - Verifica se está dentro do AuthProvider
3. **Retorna os dados** - Fornece acesso às funções e estados de auth

## 💡 Vantagens dos Hooks Personalizados

- **Simplicidade** - Interface mais limpa para usar
- **Validação** - Verifica uso correto automaticamente
- **Reutilização** - Pode ser usado em qualquer componente
- **Manutenção** - Centraliza a lógica de acesso ao contexto

## 📝 Exemplo Prático

```jsx
import { useAuth } from '../hooks/useAuth';

function LoginPage() {
  const { signIn, loading } = useAuth();
  
  const handleLogin = async (email, password) => {
    try {
      await signIn({ email, password });
      // Redirecionar para dashboard
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Campos do formulário */}
      <button disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}
```