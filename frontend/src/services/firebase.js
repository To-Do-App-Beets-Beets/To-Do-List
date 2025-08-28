// TODO: Importe initializeApp do 'firebase/app'.
// TODO: Importe getAuth do 'firebase/auth'.

/**
 * ======================================================================================
 * Configuração do Firebase (Firebase Configuration)
 * ======================================================================================
 *
 * Propósito:
 * ----------
 * Este arquivo configura a conexão com os serviços do Firebase.
 * O Firebase é a plataforma do Google que fornece autenticação, banco de dados,
 * hosting e outros serviços para aplicações web e mobile.
 *
 * Variáveis de Ambiente:
 * ----------------------
 * As chaves de configuração são obtidas através de variáveis de ambiente (import.meta.env)
 * por questões de segurança. Essas variáveis devem ser definidas no arquivo .env
 * na raiz do projeto frontend.
 *
 * Serviços Utilizados:
 * -------------------
 * - Authentication: Para login/logout de usuários
 */

// 🎯 Objetivo 1: Configurar as credenciais do Firebase
// TODO: Crie um objeto firebaseConfig com as seguintes propriedades:
// - apiKey: import.meta.env.VITE_FIREBASE_API_KEY
// - authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN  
// - projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
// - storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
// - messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
// - appId: import.meta.env.VITE_FIREBASE_APP_ID

// 🎯 Objetivo 2: Inicializar o Firebase
// TODO: Use initializeApp(firebaseConfig) para inicializar o Firebase.
// Armazene o resultado em uma constante chamada 'app'.

// 🎯 Objetivo 3: Configurar a autenticação
// TODO: Use getAuth(app) para obter a instância de autenticação.
// Exporte essa instância como 'auth' para ser usada em outros arquivos.