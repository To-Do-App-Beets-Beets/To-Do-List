// TODO: Etapa 0 - Importar o 'auth' do Firebase Admin SDK
// Pense: de qual arquivo de configuração do nosso projeto ele vem?
// Ex: const { auth } = require('../config/firebase');

/**
 * ======================================================================================
 * Middleware de Autenticação
 * ======================================================================================
 *
 * O que é um Middleware?
 * ---------------------
 * Pense em um middleware como um "porteiro" ou um "segurança" no meio de uma requisição
 * da web. Antes que uma requisição (ex: buscar dados do usuário) chegue ao seu destino
 * final (a função que busca os dados no banco), ela passa por ele.
 *
 * Este middleware específico, o 'authMiddleware', tem uma única missão: verificar se o
 * usuário que fez a requisição está autenticado e tem permissão para continuar.
 *
 * Como ele funciona?
 * ------------------
 * Ele espera que o cliente (o app mobile ou web) envie um "crachá" especial junto com
 * a requisição. Esse crachá é um ID Token gerado pelo Firebase. Nossa função é pegar
 * esse crachá, verificar com o Firebase se ele é autêntico e, se for, liberar o acesso.
 *
 * Parâmetros da Função:
 * ---------------------
 * @param {object} req - O objeto 'Request' (Requisição). Contém todas as informações
 * que o cliente enviou: cabeçalhos (headers), corpo (body),
 * parâmetros da URL, etc. É aqui que vamos procurar o token.
 *
 * @param {object} res - O objeto 'Response' (Resposta). É o que usamos para enviar
 * uma resposta de volta ao cliente. Com ele, podemos definir o
 * status da resposta (ex: 200 para OK, 403 para Proibido) e
 * enviar dados (geralmente em formato JSON).
 *
 * @param {function} next - Uma função especial. Ao chamá-la (`next()`), dizemos ao
 * Express: "Ok, este middleware terminou seu trabalho. Pode
 * passar a requisição para o próximo da fila (outro
 * middleware ou a rota final)". Se não a chamarmos, a
 * requisição ficará "presa" aqui para sempre.
 */
async function authMiddleware(req, res, next) {
  // O fluxo de validação de um token acontece dentro de um bloco try...catch.
  // Isso é importante porque a verificação do token pode falhar por várias razões
  // (token mal formatado, expirado, assinatura inválida), e queremos capturar
  // esses erros de forma controlada.
  try {
    // 🎯 Objetivo 1: Obter o token do cabeçalho da requisição.
    // Por convenção, tokens de autenticação são enviados no cabeçalho 'Authorization'.
    // O formato padrão é: "Bearer [TOKEN_GIGANTE_AQUI]".
    // TODO: Extraia o cabeçalho 'authorization' do objeto 'req.headers'.
    const authHeader = null; // Substitua null pela sua implementação

    // 🎯 Objetivo 2: Validar se o cabeçalho está no formato esperado.
    // Se não houver cabeçalho ou se ele não começar com "Bearer ", o cliente
    // não enviou o token corretamente. Nesse caso, devemos negar o acesso.
    // TODO: Verifique se 'authHeader' existe e se começa com 'Bearer '.
    // Se não for válido, retorne uma resposta de status 401 (Unauthorized)
    // com uma mensagem de erro em JSON. Lembre-se de usar 'return' para
    // parar a execução da função aqui.
    // Ex de resposta: res.status(401).json({ error: 'Formato de token inválido.' });


    // 🎯 Objetivo 3: Extrair o token limpo.
    // Agora que sabemos que o cabeçalho existe e tem o formato correto,
    // precisamos pegar apenas a parte do token, descartando o "Bearer ".
    // TODO: Use uma função de string para separar o 'Bearer ' do resto.
    const token = null; // Substitua null pela sua implementação

    // 🎯 Objetivo 4: Verificar a validade do token com o Firebase.
    // Esta é a parte principal. Usamos o SDK do Firebase Admin para pedir que ele
    // verifique se o token é legítimo. Se for, ele nos devolverá os dados
    // do usuário contidos no token (como uid, email, etc.).
    // TODO: Use a função 'auth.verifyIdToken()' passando o token extraído.
    // Lembre-se que esta função é assíncrona, então use 'await'.
    const decodedToken = null; // Substitua null pela sua implementação

    // 🎯 Objetivo 5: Anexar os dados do usuário à requisição.
    // Este é o passo que torna o middleware realmente útil! Ao adicionar os dados
    // decodificados ao objeto 'req', qualquer rota que execute *depois* deste
    // middleware poderá acessar `req.user` para saber quem é o usuário autenticado.
    // TODO: Crie uma nova propriedade em 'req', chamada 'user', e atribua a ela o
    // valor de 'decodedToken'.


    // 🚀 Missão Cumprida! Acesso liberado.
    // Se chegamos até aqui, o token é válido e o usuário está autenticado.
    // TODO: Retorne a função 'next()' para passar a requisição para a próxima etapa.


  } catch (error) {
    // ❌ Algo deu errado na verificação do token.
    // Isso pode acontecer se o token for expirado, inválido ou adulterado.
    // Por segurança, devemos negar o acesso.

    // TODO: Logue o erro no console para fins de depuração. É importante para nós,
    // desenvolvedores, sabermos por que a autenticação falhou.
    // Ex: console.error('Falha na autenticação:', error.message);

    // TODO: Retorne uma resposta de status *** (O código de Forbidden, pesquise!) para o cliente,
    // informando que o acesso foi negado.
    return res.status().json({ error: 'Acesso negado. Token inválido ou expirado.' });
  }
}

module.exports = { authMiddleware };