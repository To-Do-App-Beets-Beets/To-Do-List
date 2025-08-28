# Backend - Projeto de Treinamento

Este é o backend da aplicação, desenvolvido com Node.js e Express para fins de aprendizado.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript no servidor
- **Express.js** - Framework web minimalista amplamente utilizado no mercado
- **Firebase Admin SDK** - Autenticação e banco de dados
- **CORS** - Habilitação de requisições cross-origin (para comunidação com o `frontend`)
- **Nodemon** - Reinicialização automática durante desenvolvimento (praticidade!) 

## 📁 Estrutura do Projeto

```
src/
  ├── config/         # Configurações (Firebase, banco de dados)
  ├── controllers/    # Lógica de negócio e tratamento de requisições
  ├── middlewares/    # Funções intermediárias nas rotas (autenticação, erros)
  ├── repositories/   # Acesso direto aos dados (Firebase/banco)
  ├── routes/         # Definição de endpoints da API
  ├── services/       # Regras de negócio e validações
  └── server.js       # Ponto de entrada da aplicação
```

## 🏗️ Arquitetura MVC

Apesar de ser um conceito mais ou menos novo, não é nada de outro mundo para quem já compreende sobre API REST. O projeto segue a arquitetura **Model-View-Controller (MVC)** adaptada para APIs REST:

### 📋 **Controller (Controlador)**
- **Localização:** `src/controllers/`
- **Responsabilidade:** Recebe requisições HTTP, coordena o processamento e retorna respostas
- **Exemplo:** `UserController.js` gerencia todas as operações relacionadas a usuários

### 🗄️ **Model/Repository (Modelo)**
- **Localização:** `src/repositories/`
- **Responsabilidade:** Acesso direto aos dados do Firebase/banco de dados
- **Exemplo:** `UserRepository.js` executa consultas e operações no banco

### 🔧 **Service (Serviço)**
- **Localização:** `src/services/`
- **Responsabilidade:** Regras de negócio, validações e lógica mais complexa
- **Exemplo:** `UserService.js` valida dados antes de salvar no banco

### 🛣️ **Routes (Rotas)**
- **Localização:** `src/routes/`
- **Responsabilidade:** Define os endpoints da API e conecta às funções dos controllers
- **Exemplo:** `users.js` define rotas como `GET /users`, `POST /users`, etc.

## 🔧 Instalação e Execução

1. **Instalar dependências:**
```bash
npm install
```

2. **Configurar variáveis de ambiente:**
   - Crie um arquivo `.env` na pasta `backend/functions`
   - Configure o caminho para as credenciais do Firebase:
```env
GOOGLE_APPLICATION_CREDENTIALS=./src/config/credentials/serviceAccountKey.json
```

3. **Adicionar credenciais do Firebase:**
   - Baixe o arquivo `serviceAccountKey.json` do console do Firebase
   - Coloque-o em `src/config/credentials/`

4. **Iniciar em modo desenvolvimento:**
```bash
npm run dev
```

5. **Acessar a API:**
   - URL base: http://localhost:3001
   - Exemplo: http://localhost:3001/api/users

## 📖 Funcionalidades Implementadas

- ✅ **Autenticação:** Middleware de verificação de tokens Firebase
- ✅ **CRUD de Usuários:** Criar, ler, atualizar e deletar usuários
- ✅ **Tema:** CRUD completo (ex. se for todo list, deve ser possível criar, atualizar, excluir e obter tarefas via API)
- ✅ **Tratamento de Erros:** Middleware centralizado para captura de erros
- ✅ **CORS:** Configurado para comunicação com o frontend
- ✅ **Validações:** Verificação de dados antes de persistir

## 🎯 Objetivo de Aprendizado

Este projeto foi estruturado para ensinar conceitos fundamentais do backend:

- Arquitetura MVC e separação de responsabilidades
- Criação de APIs REST com Express.js
- Integração com Firebase (autenticação e banco)
- Middlewares e interceptação de requisições
- Tratamento adequado de erros
- Validação de dados
- Organização de código em camadas

## 🔗 Comunicação com o Frontend

O backend expõe uma API REST que o frontend consome. Exemplo de fluxo:

1. **Frontend** faz requisição: `GET http://localhost:3001/api/users`
2. **Rota** (`users.js`) recebe a requisição
3. **Controller** (`UserController.js`) processa a lógica
4. **Service** (`UserService.js`) aplica regras de negócio
5. **Repository** (`UserRepository.js`) busca dados no Firebase
6. **Resposta** volta pelo mesmo caminho até o frontend

## 📚 Scripts Disponíveis

- `npm run dev` - Inicia servidor com reinicialização automática (nosso amigo nodemon!)

##### Outros que não serão usados por ora:

- `npm test` - Executa testes automatizados
- `npm run lint` - Verifica qualidade do código
- `npm start` - Inicia servidor em modo produção

## 🔐 Middleware de Autenticação

O projeto inclui middleware de autenticação que:

- Verifica tokens Firebase em rotas protegidas
- Extrai informações do usuário autenticado
- Bloqueia acesso não autorizado
- Centraliza a lógica de segurança

## ⚠️ Pontos de Atenção

1. **Credenciais do Firebase:** Nunca commite o arquivo `serviceAccountKey.json`. Por isso ele deve ser mantido no arquivo `.gitignore`, que concentra diretivas que dizem ao git "ei, tira o olho desses arquivos e pastas aqui!"
2. **Variáveis de Ambiente:** Sempre configure o arquivo `.env`
3. **Estrutura de Pastas:** Mantenha a organização por responsabilidade
4.  **Comunicação Ativa com o Frontend**
    Seja proativo! Nas *dailies* (ou assim que finalizar), informe à sua equipe sobre as novas rotas da API. Quando um colega do front for consumir uma rota que você criou, é sua responsabilidade garantir que ele saiba exatamente como usá-la.

    **O que o dev front precisa saber:**
    * **Qual o método HTTP?** (`GET`, `POST`, `PUT`, etc.).
    * **Qual o formato do `body`?** Se for um `POST`, o corpo da requisição deve conter os campos que sua função espera.
    * **Quais parâmetros são necessários?** Não adianta tentar atualizar uma tarefa (`PUT /tasks/:id`) se o frontend não informar em sua requisição qual é o `id` da tarefa a ser atualizada. Apesar de óbvio nesse caso, em outros pode não ser.

    > Lembre-se: essa clareza na comunicação é o que evita bloqueios e retrabalho.

## 🚀 Próximos Passos

Após implementar o tema da sua equipe, você terá:

- Uma API REST completa e funcional
- Integração total com o frontend
- Base MUITO sólida para expandir o projeto, caso queira
- Compreensão prática da arquitetura backend

---

**Lembre-se:** O backend é o coração da aplicação. Ele gerencia dados, aplica regras de negócio e garante a segurança. Cada linha de código aqui impacta diretamente a experiência do usuário no frontend!
