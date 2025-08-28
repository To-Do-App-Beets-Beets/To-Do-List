// TODO: Importe as instâncias 'db' e 'auth' do seu arquivo de configuração do Firebase.

/**
 * ======================================================================================
 * Camada de Repositório (Repository)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * O Repository é a camada responsável EXCLUSIVAMENTE pela comunicação com o banco de
 * dados. Ele abstrai toda a lógica de como os dados são salvos, buscados, atualizados
 * ou deletados.
 *
 * Pense nele como um "tradutor": o resto da sua aplicação fala em termos de "usuários",
 * e o repositório traduz isso para a linguagem do Firestore ("documents", "collections",
 * "get", "set", "update").
 *
 * Vantagens:
 * -----------
 * - Separação de Responsabilidades: A lógica de negócio não precisa saber se você usa
 * Firestore, SQL ou qualquer outro banco.
 * - Facilidade de Manutenção: Se um dia você mudar de banco, só precisará reescrever
 * os repositórios, sem tocar nas outras camadas!
 */
class UserRepository {
  constructor() {
    // A coleção de 'users' no Firestore é onde guardaremos os perfis dos usuários.
    // TODO: Inicialize 'this.collection' para apontar para a coleção 'users' do Firestore.
    // Dica: use a instância 'db' que você importou, que possui um método próprio para isso.
    this.collection = null; // Substitua null pela sua implementação
  }

  /**
   * Cria o documento de perfil de um usuário no Firestore.
   * @param {object} data - Contém os dados do usuário (id, name, email, role).
   * O 'id' AQUI deve ser o mesmo 'uid' do Firebase Authentication.
   */
  async create(data) {
    try {
      // 🎯 Objetivo: Salvar os dados de perfil de um novo usuário.
      // O usuário já foi criado no Firebase Auth (geralmente pelo front-end).
      // Nossa tarefa aqui é criar um documento no Firestore com informações
      // adicionais (como nome, cargo, data de criação, etc.), usando o ID
      // do Auth como chave do documento para manter a consistência.

      // TODO: Crie um objeto 'userData' com os campos a serem salvos.
      // Inclua: name, email, role (com 'user' como padrão), createdAt e updatedAt.

      // TODO: Use 'this.collection.doc(data.id).set(userData)' para salvar os dados.
      // Usar .set() garante que o documento seja criado com o ID que especificamos.

      // TODO: Retorne o objeto completo do usuário recém-criado.
      return null;
    } catch (error) {
      // TODO: Em caso de erro, lance uma nova exceção para ser capturada pela camada de Serviço.
      throw new Error(error.message);
    }
  }

  /**
   * Busca todos os usuários da coleção.
   */
  async findAll() {
    try {
      // 🎯 Objetivo: Listar todos os perfis de usuário do Firestore.
      // TODO: Use 'this.collection.get()' para obter um "snapshot" (uma foto) de todos
      // os documentos na coleção de usuários. Lembre-se do 'await'.

      // TODO: O resultado ('snapshot') contém uma propriedade 'docs'. Mapeie esse array
      // para transformar cada 'doc' em um objeto de usuário mais limpo, contendo o
      // 'id' do documento e seus dados (...doc.data()).
      return [];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Busca um único usuário pelo seu ID.
   * @param {string} id - O ID do usuário (deve ser o mesmo do Firebase Auth).
   */
  async findById(id) {
    try {
      // 🎯 Objetivo: Encontrar um perfil de usuário específico.
      // TODO: Obtenha a referência do documento usando 'this.collection.doc(id)'
      // e então chame '.get()' para buscar os dados.

      // TODO: Verifique se o documento existe ('doc.exists'). Se não existir, retorne null.

      // TODO: Se existir, retorne um objeto com o id e os dados do documento.
      return null;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Atualiza os dados de um usuário.
   * @param {string} id - O ID do usuário a ser atualizado.
   * @param {object} data - Um objeto com os campos a serem modificados.
   */
  async update(id, data) {
    try {
      // 🎯 Objetivo: Modificar os campos de um perfil de usuário existente.
      // TODO: Crie um objeto 'updateData' contendo os novos dados ('...data') e
      // atualize o campo 'updatedAt' para a data/hora atual.

      // TODO: Use 'this.collection.doc(id).update(updateData)' para aplicar as
      // modificações no Firestore. O '.update()' modifica apenas os campos
      // que você enviar, sem apagar os outros.
      
      // TODO: Retorne o objeto do usuário com os dados atualizados.
      return null;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Deleta um usuário do Firebase Auth e do Firestore.
   * @param {string} id - O ID do usuário a ser deletado.
   */
  async delete(id) {
    try {
      // 🎯 Objetivo: Remover completamente um usuário do sistema.
      // Esta é uma operação crítica que deve ser feita em dois lugares:
      // 1. Firebase Authentication: Remove o login, senha e a capacidade do usuário de se autenticar.
      // 2. Firestore: Remove o documento de perfil com dados adicionais.
      
      // Usamos Promise.all para executar as duas exclusões em paralelo, o que é mais eficiente.
      // TODO: Dentro de um 'Promise.all', chame 'auth.deleteUser(id)' e
      // 'this.collection.doc(id).delete()'.

    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = { UserRepository };