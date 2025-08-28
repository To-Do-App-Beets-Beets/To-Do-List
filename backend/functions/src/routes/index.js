const { Router } = require('express');
// TODO: Importe o 'usersRouter' do arquivo de rotas de usuários.
// TODO: Importe o 'authMiddleware'.

const router = Router();

/**
 * ======================================================================================
 * Roteador Principal (Main Router)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este é o roteador principal da aplicação. Sua função é "montar" todos os outros
 * roteadores específicos (como o de usuários, produtos, etc.) em um único lugar.
 *
 * No arquivo principal do servidor (server.js), nós usaremos apenas este 'router',
 * mantendo o código de inicialização limpo e organizado.
 */

// 🎯 Objetivo: Registrar todas as rotas de usuários sob o prefixo '/users'.
// Isso significa que as rotas definidas em 'users.js' (como GET '/' e GET '/:id')
// se tornarão acessíveis como GET '/users' e GET '/users/:id'.
// TODO: Use 'router.use()' para associar o caminho '/users' ao 'usersRouter'.


// --------------------------------------------------------------------------------
// Exemplo de Rota Protegida Adicional
// --------------------------------------------------------------------------------

// Esta rota é um ótimo exemplo do poder do middleware de autenticação.
// A rota '/me' permite que o usuário logado obtenha seus próprios dados.
// Como o 'authMiddleware' é executado primeiro, quando o código dentro da rota
// é executado, nós já temos acesso a 'req.user' com os dados do token.
// TODO: Crie uma rota GET para '/me'. Aplique o 'authMiddleware' e, na função
// de callback, retorne os dados do 'req.user' em formato JSON.
// Lembre-se de verificar se 'req.user' existe antes de usá-lo.

module.exports = { router };