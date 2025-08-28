// TODO: Importe o hook useState do React.
// TODO: Importe o componente Link do 'react-router-dom'.
// TODO: Importe o hook useAuth para a lógica de autenticação.

/**
 * ======================================================================================
 * Componente Formulário de Login (LoginForm Component)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este componente encapsula o formulário de login, permitindo que usuários
 * se autentiquem na aplicação.
 *
 * Funcionalidades:
 * ---------------
 * 1. Campos de email e senha.
 * 2. Validação e tratamento de erros de autenticação.
 * 3. Lógica de submissão que chama a função de login.
 * 4. Exibição de mensagens de erro.
 *
 * Estados do Componente:
 * ---------------------
 * - formData: Armazena os valores dos campos (email, password).
 * - error: Armazena mensagens de erro para exibição.
 *
 * Props:
 * ------
 * - onSuccess: (Opcional) Uma função a ser chamada após o login bem-sucedido.
 */

// TODO: Crie e exporte como padrão a função LoginForm.
export default function LoginForm({ onSuccess }) {
  // 🎯 Objetivo 1: Configurar hooks e estados
  // TODO: Use o hook useAuth() para obter a função { signIn }.

  // TODO: Crie o estado 'formData' com useState, iniciando com:
  // { email: '', password: '' }

  // TODO: Crie o estado 'error' com useState, iniciando com uma string vazia.

  // 🎯 Objetivo 2: Implementar função de mudança nos campos
  // TODO: Crie uma função handleChange que receba o evento (e) como parâmetro.
  // Use setFormData({ ...formData, [e.target.name]: e.target.value }) para atualizar o estado.

  // 🎯 Objetivo 3: Implementar função de envio do formulário
  // TODO: Crie uma função assíncrona handleSubmit que receba o evento (e).
  // 1. Chame e.preventDefault() para evitar o reload da página.
  // 2. Limpe erros antigos: setError('').
  // 3. Use um bloco try/catch:
  //    - No try:
  //      a. Chame 'await signIn(formData)'.
  //      b. Se existir a prop 'onSuccess', chame 'onSuccess()'.
  //    - No catch(err):
  //      a. Atualize o estado de erro: setError(err.message).

  // 🎯 Objetivo 4: Criar a interface do formulário
  // TODO: Retorne a estrutura JSX do formulário.
  // 1. Um elemento <form> que chame handleSubmit no evento onSubmit.
  // 2. Inputs para 'email' e 'password'.
  //    - Cada input deve ter os atributos 'name', 'type', 'value' e 'onChange' corretamente configurados.
  // 3. Um local para exibir a mensagem de erro (somente se o estado 'error' não estiver vazio).
  // 4. Um botão (<button type="submit">) para enviar o formulário.
  // 5. Um componente <Link> apontando para a página de registro ('/register').

  return null; // Substitua por sua implementação
}