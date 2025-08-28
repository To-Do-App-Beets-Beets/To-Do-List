// TODO: Importe o hook useState do React.
// TODO: Importe o componente Link do 'react-router-dom'.

/**
 * ======================================================================================
 * Componente Formulário de Registro (RegisterForm Component)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este componente encapsula o formulário para que novos usuários possam
 * criar uma conta.
 *
 * Funcionalidades:
 * ---------------
 * 1. Campos de nome de usuário, email e senha.
 * 2. Gerenciamento do estado dos dados do formulário.
 * 3. Lógica de submissão para registrar o usuário.
 *
 * Estados do Componente:
 * ---------------------
 * - formData: Armazena os valores dos campos (username, email, password).
 *
 * Props:
 * ------
 * - onRegister: Uma função que será chamada ao submeter o formulário,
 * passando os dados (formData) como argumento.
 */

// TODO: Crie e exporte como padrão a função RegisterForm.
export default function RegisterForm({ onRegister }) {
  // 🎯 Objetivo 1: Configurar estado do formulário
  // TODO: Crie o estado 'formData' com useState, iniciando com:
  // { username: '', email: '', password: '' }

  // 🎯 Objetivo 2: Implementar função de mudança nos campos
  // TODO: Crie uma função handleChange que receba o evento (e).
  // Use setFormData({ ...formData, [e.target.name]: e.target.value }) para atualizar o estado.

  // 🎯 Objetivo 3: Implementar função de envio do formulário
  // TODO: Crie uma função handleSubmit que receba o evento (e).
  // 1. Chame e.preventDefault() para evitar o reload da página.
  // 2. Verifique se a prop 'onRegister' existe e, se sim, chame-a,
  //    passando o estado 'formData' como argumento. Ex: onRegister(formData).

  // 🎯 Objetivo 4: Criar a interface do formulário
  // TODO: Retorne a estrutura JSX do formulário.
  // 1. Um elemento <form> que chame handleSubmit no evento onSubmit.
  // 2. Inputs para 'username', 'email' e 'password'.
  //    - Não se esqueça de configurar 'name', 'type', 'value' e 'onChange' para cada um.
  // 3. Um botão (<button type="submit">) para registrar.
  // 4. Um componente <Link> para a página de login ('/login').

  return null; // Substitua por sua implementação
}