const { Router } = require('express');
// TODO: Importe o UserController.
// TODO: Importe o authMiddleware.

const usersRouter = Router();

// TODO: Crie uma instância do UserController.
const userController = null; // Substitua pela sua implementação

/**
 * ======================================================================================
 * Arquivo de Rotas de Usuários
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este arquivo define todos os "endpoints" (URLs) relacionados à entidade "Usuário".
 * Ele mapeia cada combinação de rota (URL) e método HTTP (GET, POST, PUT, DELETE)
 * para um método específico no UserController.
 *
 * O uso de 'Router' do Express ajuda a organizar o código, evitando que todas as rotas
 * da aplicação fiquem em um único arquivo gigante.
 */

// --------------------------------------------------------------------------------
// Rotas Públicas (não exigem autenticação)
// --------------------------------------------------------------------------------

// Rota para criar um usuário. Note que a autenticação pode ser necessária para
// obter o ID, mas a criação do perfil no nosso banco é uma ação inicial.
// TODO: Crie a rota POST para a raiz ('/'). O segundo argumento deve ser a chamada
// para o método 'create' do seu controller.
// Dica: Métodos de classe passados como callback precisam do '.bind(userController)'
// para manter o 'this' correto.


// --------------------------------------------------------------------------------
// Middleware de Autenticação
// --------------------------------------------------------------------------------

// A linha abaixo age como um "portão". Qualquer rota definida APÓS esta linha
// exigirá que o usuário esteja autenticado. O 'authMiddleware' será executado
// antes de qualquer uma delas.
// TODO: Use 'usersRouter.use()' para aplicar o 'authMiddleware' a todas as rotas
// que vêm a seguir.


// --------------------------------------------------------------------------------
// Rotas Protegidas (exigem autenticação)
// --------------------------------------------------------------------------------

// Rota para listar todos os usuários.
// TODO: Crie a rota GET para a raiz ('/'), mapeando para o método 'findAll'.

// Rota para buscar um usuário específico pelo seu ID.
// TODO: Crie a rota GET para '/:id', mapeando para o método 'findById'.

// Rota para atualizar os dados de um usuário.
// TODO: Crie a rota PUT para '/:id', mapeando para o método 'update'.

// Rota para deletar um usuário.
// TODO: Crie a rota DELETE para '/:id', mapeando para o método 'delete'.


module.exports = { usersRouter };