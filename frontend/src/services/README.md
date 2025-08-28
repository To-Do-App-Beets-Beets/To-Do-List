# Serviços

Esta pasta contém configurações para comunicação com serviços externos.

## 📁 Arquivos

### `firebase.js`
Configuração do Firebase para autenticação.

**Configurações:**
- Credenciais do projeto Firebase
- Inicialização da aplicação
- Exportação da instância de auth

### `api.js`  
Cliente HTTP configurado com Axios para comunicação com o backend.

Conceitos importantes de saber:
> **API** (Application Programming Interface -Interface de Programação de Aplicações) é um conjunto de regras e definições que permite que diferentes sistemas de software se comuniquem entre si. No contexto web, uma API geralmente expõe endpoints para que aplicações possam enviar e receber dados de forma estruturada. Bingo! Vocês utilizarão a API fornecida pelo back-end para realizar consultas e operações no banco de dados. 

> **HTTP** é a sigla para *HyperText Transfer Protocol* (Protocolo de Transferência de Hipertexto). Um cliente HTTP é um componente de software que faz requisições para servidores web usando esse protocolo. No caso deste projeto que estão desenvolvendo, as requisições serão feitas para o backend que estará rodando localmente. 
Este  protocolo mencionado permite que aplicações busquem ou enviem dados para APIs, como buscar informações de um banco de dados remoto ou enviar formulários. No contexto do `api.js`, o cliente HTTP (usando Axios) facilita a comunicação entre o frontend e o backend, automatizando tarefas como adicionar cabeçalhos, lidar com autenticação e tratar respostas de erro.

**Funcionalidades:**
- URL base da API configurada
- Headers padrão (Content-Type)
- Interceptor de requisição (adiciona token automaticamente)
- Interceptor de resposta (trata erros de autenticação)

## 🔧 Como Usar a API

### Importar o cliente:
```javascript
import api from '../services/api';
```

### Fazer requisições:

#### Conceitos importantes

> O corpo de requisição (request body) é a parte de uma requisição HTTP onde você envia dados adicionais para o servidor, geralmente em métodos como POST ou PUT. Esses dados podem ser enviados em formatos como JSON, XML ou formulário, e são usados para criar ou atualizar recursos no servidor. Basicamente isso endossa a manipulação de dados por na comunicação entre as frentes (front-end e back-end).

#### Exemplos
```javascript
// GET - Buscar dados
// geralmente requisições do tipo "GET" não enviam nada no corpo da requisição
const response = await api.get('/users');
const usuarios = response.data;

// POST - Criar novo
// envia um objeto JavaScript para ser "postado" no banco
const novoUsuario = { name: 'João', email: 'joao@email.com' }; 
await api.post('/users', novoUsuario);

// PUT - Atualizar existente
// envia um objeto parcial ou completo! o "1" é o id, para que o back-end saiba exatamente qual usuário (no caso deste exemplo, mas poderia ser qual tarefa, qual produto ou qual post de blog) atualizar
const dadosAtualizados = { name: 'João Silva' };
await api.put('/users/1', dadosAtualizados);

// DELETE - Remover
await api.delete('/users/1');
```

## 🔒 Autenticação Automática

O interceptor de requisição adiciona automaticamente o token de autenticação:

1. **Antes de cada requisição:**
   - Verifica se há usuário logado no Firebase
   - Obtém o token mais recente
   - Adiciona no header: `Authorization: Bearer <token>`; isso permite o servidor validar o token para a sessão do usuário.

2. **Após cada resposta:**
   - Se receber erro 401 ou 403 (não autorizado), az logout automático do Firebase
   - Usuário é redirecionado para login (configurar isso nas rotas)

## 🌐 Endpoints da API

A API está configurada para se comunicar com:
- **Base URL:** `http://localhost:3001/api` (desenvolvimento)
- **Endpoints disponíveis:**
  - `GET /users` - Listar usuários
  - `POST /users` - Criar usuário
  - `PUT /users/:id` - Atualizar usuário
  - `DELETE /users/:id` - Excluir usuário

> Obs.: Outros endpoints estarão disponíveis ao longo do desenvolvimento da API, e vocês aqui no front-end apenas os utilizarão.

## ⚙️ Configuração do Firebase

As credenciais são obtidas através de variáveis de ambiente:

```
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```