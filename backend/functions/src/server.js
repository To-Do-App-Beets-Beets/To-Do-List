// TODO: Importe o 'express' e outras dependências como 'cors'.
// TODO: Importe o 'router' principal do seu arquivo de rotas.

/**
 * ======================================================================================
 * Ponto de Entrada do Servidor (Server Entry Point)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este é o arquivo que inicia toda a aplicação. Suas responsabilidades são:
 * 1. Criar a instância principal do aplicativo Express.
 * 2. Configurar "middlewares" globais, que são funções executadas em TODAS as
 * requisições (ex: 'cors' para permissões, 'express.json' para ler JSON).
 * 3. Registrar o roteador principal da aplicação.
 * 4. Definir a porta em que o servidor irá "ouvir" por requisições.
 * 5. Iniciar o servidor.
 */

// 🎯 Objetivo 1: Criar e configurar o aplicativo Express.
// TODO: Crie a instância do app Express. Ex: const app = express();

// TODO: Configure o middleware 'cors' para permitir requisições de outras origens
// (essencial para que seu front-end possa se comunicar com esta API).
// Use 'app.use(cors())'.

// TODO: Configure o middleware 'express.json()' para que o Express consiga
// interpretar o corpo (body) de requisições que vêm em formato JSON.
// Use 'app.use(express.json())'.


// 🎯 Objetivo 2: Rota de "Health Check".
// É uma boa prática ter uma rota simples na raiz que apenas confirma que o
// servidor está no ar e respondendo.
app.get('/', (req, res) => {
  res.json({ message: 'API rodando com sucesso!' });
});


// 🎯 Objetivo 3: Registrar as rotas da aplicação.
// Todas as nossas rotas de negócio (usuários, etc.) estão agrupadas no router principal.
// TODO: Use 'app.use('/api', router)' para que todas as rotas fiquem prefixadas com '/api'.
// Ex: '/users' se tornará '/api/users'.


// 🎯 Objetivo 4: Configurar a porta e iniciar o servidor.
// O servidor precisa saber em qual porta "escutar". É uma boa prática permitir que
// a porta seja configurada por uma variável de ambiente (process.env.PORT), com um
// valor padrão (como 3000) caso ela não seja definida.
// TODO: Defina uma constante 'PORT' com base em 'process.env.PORT' ou use 3000.

// TODO: Inicie o servidor usando 'app.listen()'. Dentro do callback, exiba uma
// mensagem no console informando que o servidor está online e em qual porta.
// Ex: console.log(`🚀 Servidor rodando na porta ${PORT}`);