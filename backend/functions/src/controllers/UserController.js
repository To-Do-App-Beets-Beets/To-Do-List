// TODO: Importe o UserService.

/**
 * ======================================================================================
 * Camada de Controle (Controller)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * O Controller é a porta de entrada da sua aplicação. Ele lida diretamente com as
 * requisições HTTP (vindas da web ou de um app).
 *
 * Suas responsabilidades são:
 * 1. Receber a requisição (`req`).
 * 2. Extrair informações relevantes (do `req.body`, `req.params`, `req.query`, `req.user`).
 * 3. Chamar o método apropriado na camada de Serviço (Service) para executar a ação.
 * 4. Capturar o resultado (ou erro) do Serviço.
 * 5. Enviar uma resposta HTTP (`res`) apropriada de volta para o cliente, com o status
 * correto (200, 201, 400, 404, etc.) e os dados em formato JSON.
 *
 * O Controller NUNCA deve conter lógica de negócio. Ele é apenas um "maestro" do
 * fluxo HTTP.
 */
class UserController {
  constructor() {
    // TODO: Crie uma instância da classe UserService.
    this.userService = null; // Substitua null pela sua implementação
  }

  async create(req, res) {
    try {
      // 🎯 Objetivo: Coletar dados da requisição e passar para o serviço criar um usuário.
      // O ID e o e-mail vêm do token que já foi validado pelo 'authMiddleware'.
      // O nome, que é uma informação de perfil, vem no corpo da requisição.
      
      // TODO: Extraia o 'uid' e 'email' do 'req.user' (adicionado pelo middleware).
      // TODO: Extraia o 'name' do 'req.body'.

      // TODO: Construa um objeto 'userData' com id, email e name para enviar ao serviço.
      
      // TODO: Chame 'this.userService.create(userData)'.
      // TODO: Se for bem-sucedido, retorne o status 201 (Created) e o usuário em JSON.
      return res.status(501).json({ message: 'Não implementado' });
    } catch (error) {
      // Se o serviço lançar um erro (ex: usuário já existe), capture-o aqui.
      // TODO: Retorne um status 400 (Bad Request) e a mensagem de erro em JSON.
      return res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      // TODO: Chame 'this.userService.findAll()'.
      // TODO: Retorne o status 200 (OK) e a lista de usuários em JSON.
      return res.status(501).json({ message: 'Não implementado' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async findById(req, res) {
    try {
      // O ID vem como um parâmetro na URL (ex: /users/12345).
      // TODO: Extraia o 'id' de 'req.params'.
      // TODO: Chame 'this.userService.findById(id)'.
      // TODO: Retorne o status 200 (OK) e o usuário encontrado.
      return res.status(501).json({ message: 'Não implementado' });
    } catch (error) {
      // Se o serviço lançar "Usuário não encontrado", o status correto é 404.
      // TODO: Retorne o status 404 (Not Found) e a mensagem de erro.
      return res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      // TODO: Extraia o 'id' de 'req.params' e os dados de atualização do 'req.body'.
      // TODO: Chame 'this.userService.update(id, data)'.
      // TODO: Retorne o status 200 (OK) e o usuário atualizado.
      return res.status(501).json({ message: 'Não implementado' });
    } catch (error) {
      // Pode ser um erro 404 (se o usuário não existe) ou 400 (se os dados são ruins).
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      // TODO: Extraia o 'id' de 'req.params'.
      // TODO: Chame 'this.userService.delete(id)'.
      // TODO: Para exclusão bem-sucedida, o padrão é retornar o status 204 (No Content),
      // sem nenhum corpo na resposta. Use 'res.status(204).send()'.
      return res.status(501).json({ message: 'Não implementado' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = { UserController };