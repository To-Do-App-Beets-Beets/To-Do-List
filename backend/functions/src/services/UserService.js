// TODO: Importe o UserRepository.

/**
 * ======================================================================================
 * Camada de Serviço (Service)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * O Service é o "cérebro" da sua aplicação. Ele contém a LÓGICA DE NEGÓCIO.
 * Enquanto o Controller lida com HTTP e o Repository com o banco de dados, o Service
 * orquestra as operações e aplica as regras.
 *
 * Exemplos de regras de negócio:
 * - "Um usuário não pode ser criado se o e-mail já existir."
 * - "Para atualizar um perfil, o usuário precisa ter permissão."
 * - "Ao deletar um produto, também devemos remover suas avaliações associadas."
 *
 * O Service chama um ou mais métodos do Repository para executar as tarefas.
 */
class UserService {
  constructor() {
    // TODO: Crie uma instância da classe UserRepository.
    this.userRepository = null; // Substitua null pela sua implementação
  }

  async create(data) {
    // 🎯 Objetivo: Aplicar as regras de negócio para criar um novo usuário.
    // TODO: Valide os dados recebidos. Verifique se 'data.id', 'data.name' e
    // 'data.email' são obrigatórios. Se algum faltar, lance um erro.

    // TODO: Chame o repositório para verificar se um usuário com este ID já existe.
    // Use 'this.userRepository.findById(data.id)'. Se já existir, lance um erro
    // para impedir a criação de duplicados.

    // Se todas as validações passarem, peça ao repositório para criar o usuário.
    // TODO: Chame 'this.userRepository.create(data)' e retorne o resultado.
    return null;
  }

  async findAll() {
    // Para esta operação, não há regras de negócio complexas, então apenas
    // repassamos a chamada para o repositório.
    // TODO: Chame o método 'findAll' do seu repositório e retorne o resultado.
    return [];
  }

  async findById(id) {
    // 🎯 Objetivo: Encontrar um usuário e garantir que ele existe.
    // TODO: Chame 'this.userRepository.findById(id)'.
    // TODO: Verifique se o resultado é nulo (usuário não encontrado). Se for,
    // lance um erro com a mensagem "Usuário não encontrado".
    // Caso contrário, retorne o usuário encontrado.
    return null;
  }

  async update(id, data) {
    // 🎯 Objetivo: Aplicar regras de negócio para atualizar um usuário.
    // TODO: Verifique se o objeto 'data' não está vazio. Se estiver, não há nada
    // para atualizar, então lance um erro.

    // TODO: Antes de atualizar, verifique se o usuário realmente existe.
    // Reutilize o método 'this.userRepository.findById(id)'. Se não existir,
    // o repositório lançará um erro ou retornará nulo (sua lógica decidirá).
    
    // Se o usuário existe e há dados para atualizar, chame o repositório.
    // TODO: Chame 'this.userRepository.update(id, data)' e retorne o resultado.
    return null;
  }

  async delete(id) {
    // 🎯 Objetivo: Orquestrar a exclusão de um usuário.
    // TODO: Verifique se o usuário existe antes de tentar deletá-lo.
    // Você pode usar 'this.userRepository.findById(id)'.
    
    // Se o usuário existir, peça ao repositório para deletá-lo.
    // TODO: Chame 'this.userRepository.delete(id)'. Este método não retorna nada.
  }
}

module.exports = { UserService };