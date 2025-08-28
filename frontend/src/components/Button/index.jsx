// TODO: Importe o React (opcional nas versões mais recentes, mas boa prática).

/**
 * ======================================================================================
 * Componente de Botão (Button Component)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Criar um componente de botão reutilizável e estilizável para toda a aplicação.
 *
 * Funcionalidades:
 * ---------------
 * 1. Exibir um texto ou ícone customizável.
 * 2. Executar uma função quando clicado.
 * 3. Ser opcionalmente desabilitado.
 * 4. Ter cores de texto e fundo customizáveis.
 *
 * Props do Componente:
 * ---------------------
 * - children: O conteúdo a ser exibido dentro do botão (geralmente texto).
 * - onClick: A função a ser executada no evento de clique.
 * - disabled: (Opcional) Um booleano que desabilita o botão se for 'true'.
 * - color: (Opcional) A cor do texto do botão.
 * - bgColor: (Opcional) A cor de fundo do botão.
 */

// TODO: Crie e exporte como padrão a função Button.
// Lembre-se de desestruturar as props recebidas: { children, onClick, disabled, color, bgColor }
export default function Button({ children, onClick, disabled, color, bgColor }) {

  // 🎯 Objetivo 1: Criar o estilo dinâmico do botão
  // TODO: Crie um objeto de estilo chamado 'buttonStyle'.
  // 1. Defina propriedades CSS básicas (ex: padding, border, cursor).
  // 2. Use as props 'color' e 'bgColor' para definir as cores do botão.
  //    Ex: color: color || 'white', backgroundColor: bgColor || 'blue'
  //    O '||' define um valor padrão caso a prop não seja passada.
  // 3. (Bônus) Adicione um estilo para quando o botão estiver desabilitado.
  //    Ex: opacity: disabled ? 0.5 : 1

  // 🎯 Objetivo 2: Construir o elemento <button>
  // TODO: Retorne um elemento <button> do JSX.
  // 1. Passe a função 'onClick' para o evento onClick do botão.
  // 2. Passe a prop 'disabled' para o atributo disabled do botão.
  // 3. Aplique o objeto 'buttonStyle' ao atributo style do botão.
  // 4. Renderize a prop 'children' dentro do botão para que o texto apareça.

  return null; // Substitua por sua implementação
}