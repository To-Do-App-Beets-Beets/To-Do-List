// TODO: Importe useState do React.
// TODO: Importe useNavigate e Link do 'react-router-dom'.
// TODO: Importe o hook useAuth já criado

/**
 * ======================================================================================
 * Página de Registro (Register Page)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Esta página permite que novos usuários se cadastrem na aplicação.
 * Coleta nome, email e senha, cria conta no Firebase e registra no backend.
 *
 * Funcionalidades:
 * ---------------
 * 1. Formulário com campos de nome, email e senha
 * 2. Validação básica dos campos
 * 3. Criação de conta via Firebase
 * 4. Registro de dados adicionais no backend
 * 5. Redirecionamento após registro bem-sucedido
 * 6. Link para página de login
 */

// TODO: Crie e exporte como padrão a função Register.
export default function Register() {
  // 🎯 Objetivo 1: Configurar hooks e estados
  // TODO: Use useNavigate() para obter a função de navegação.
  // TODO: Use useAuth() para obter { signUp }.
  
  // TODO: Crie o estado formData com useState, iniciando com:
  // { name: '', email: '', password: '' }
  
  // TODO: Crie o estado error com useState, iniciando com string vazia.

  // 🎯 Objetivo 2: Implementar função de envio do formulário
  // TODO: Crie uma função handleSubmit que seja async e receba (e) como parâmetro.
  // 1. Chame e.preventDefault()
  // 2. Limpe o erro: setError('')
  // 3. Use try/catch:
  //    - No try: chame await signUp(formData) e navigate('/dashboard')
  //    - No catch: chame setError(err.message)

  // 🎯 Objetivo 3: Implementar função de mudança nos campos
  // TODO: Crie uma função handleChange que receba (e) como parâmetro.
  // Use setFormData({ ...formData, [e.target.name]: e.target.value })

  // 🎯 Objetivo 4: Criar a interface da página
  // TODO: Crie uma página de registro atrativa com:
  // 1. Título "Cadastro" ou similar
  // 2. Formulário com campos: nome, email, senha
  // 3. Validação de senha (mínimo 6 caracteres)
  // 4. Botão de envio
  // 5. Link para página de login
  // 6. Exibição de erros quando necessário
  // 7. Estilização com CSS inline. Se desejar, use um arquivo de estilos separado, mas na mesma pasta.

  // TODO: Retorne a estrutura JSX da página
  return null; // Substitua por sua implementação
}