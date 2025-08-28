// TODO: Importe useState do React.
// TODO: Importe useNavigate e Link do 'react-router-dom'.
// TODO: Importe o hook useAuth.

/**
 * ======================================================================================
 * Página de Login (Login Page)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Esta página permite que usuários façam login na aplicação.
 * Coleta email e senha, valida os dados e autentica via Firebase.
 *
 * Funcionalidades:
 * ---------------
 * 1. Formulário com campos de email e senha
 * 2. Validação básica dos campos
 * 3. Exibição de mensagens de erro
 * 4. Redirecionamento após login bem-sucedido
 * 5. Link para página de registro
 *
 * Estados do Componente:
 * ---------------------
 * - formData: Armazena os valores dos campos do formulário
 * - error: Armazena mensagens de erro para exibição
 */

// TODO: Crie e exporte como padrão a função Login.
export default function Login() {
  // 🎯 Objetivo 1: Configurar hooks e estados
  // TODO: Use useNavigate() para obter a função de navegação.
  // TODO: Use useAuth() para obter { signIn }.
  
  // TODO: Crie o estado formData com useState, iniciando com:
  // { email: '', password: '' }
  
  // TODO: Crie o estado error com useState, iniciando com string vazia.

  // 🎯 Objetivo 2: Implementar função de envio do formulário
  // TODO: Crie uma função handleSubmit que seja async e receba (e) como parâmetro.
  // 1. Chame e.preventDefault() para evitar reload da página
  // 2. Limpe o erro: setError('')
  // 3. Use try/catch:
  //    - No try: chame await signIn(formData) e navigate('/dashboard')
  //    - No catch: chame setError(err.message)

  // 🎯 Objetivo 3: Implementar função de mudança nos campos
  // TODO: Crie uma função handleChange que receba (e) como parâmetro.
  // Use setFormData({ ...formData, [e.target.name]: e.target.value })

  // 🎯 Objetivo 4: Criar a interface da página
  // TODO: Crie uma página de login atrativa com:
  // 1. Título da aplicação
  // 2. Formulário centralizado com campos de email e senha
  // 3. Botão de envio
  // 4. Link para página de registro
  // 5. Exibição de erros quando necessário
  // 6. Estilização com CSS inline para criar uma interface moderna. Se desejar, use um arquivo de estilos separado, mas na mesma pasta.

  // TODO: Retorne a estrutura JSX da página
  return null; // Substitua por sua implementação
}