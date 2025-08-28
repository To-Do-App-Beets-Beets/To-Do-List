// Importações necessárias do Firebase Admin SDK e para carregar variáveis de ambiente.
const admin = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');
require('dotenv').config();

/**
 * ======================================================================================
 * Arquivo de Configuração e Inicialização do Firebase
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este arquivo tem uma única e crucial responsabilidade: inicializar a conexão com o
 * Firebase Admin SDK. Ele age como um "singleton", garantindo que a inicialização
 * ocorra apenas uma vez em toda a aplicação.
 *
 * Por que isso é importante?
 * --------------------------
 * Conectar-se a serviços externos (como o Firebase) é uma operação que consome recursos.
 * Não queremos repetir essa conexão toda vez que precisarmos falar com o banco de dados
 * ou com o serviço de autenticação. Centralizar a inicialização aqui garante eficiência
 * e um ponto único de configuração.
 */

// 🎯 Objetivo 1: Garantir que as credenciais de acesso estão configuradas.
// O Firebase Admin SDK precisa de um "arquivo-chave" (JSON) para se autenticar com
// segurança em nome do seu servidor. A variável de ambiente
// 'GOOGLE_APPLICATION_CREDENTIALS' informa ao SDK onde encontrar esse arquivo.
// TODO: Verifique se a variável de ambiente 'process.env.GOOGLE_APPLICATION_CREDENTIALS'
// existe. Se não existir, dispare um erro para parar a aplicação, pois ela não
// funcionará corretamente sem isso.


// 🎯 Objetivo 2: Inicializar o SDK, mas apenas se ele ainda não foi inicializado.
// Em ambientes de teste ou com recarregamento de módulos (hot-reloading), este arquivo
// pode ser executado múltiplas vezes. Tentar inicializar o app do Firebase mais de uma
// vez causa um erro. Por isso, verificamos 'admin.apps.length' para garantir que a
// inicialização só aconteça na primeira vez.
if (!admin.apps.length) {
  try {
    // TODO: Chame a função 'admin.initializeApp()' para conectar ao Firebase.
    // Ela usará automaticamente as credenciais da variável de ambiente.
    
    console.log('🔥 Firebase inicializado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao inicializar Firebase:', error);
    throw error; // Se a inicialização falhar, a aplicação não deve continuar.
  }
}

// 🎯 Objetivo 3: Exportar as instâncias dos serviços que vamos usar no resto do app.
// Uma vez inicializado, podemos obter acesso a diferentes serviços do Firebase.
// TODO: Crie uma constante 'db' para a instância do Firestore, usando getFirestore().
// TODO: Crie uma constante 'auth' para a instância do Authentication, usando admin.auth().
const db = null;   // Substitua null pela sua implementação
const auth = null; // Substitua null pela sua implementação


// TODO: Exporte os objetos 'db' e 'auth' para serem usados em outras partes do app.