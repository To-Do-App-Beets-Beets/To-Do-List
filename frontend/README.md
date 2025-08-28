# Frontend - Projeto de Treinamento

Este é o frontend da aplicação, desenvolvido com React para fins de aprendizado.

## 🚀 Tecnologias

- **React** - Biblioteca para interfaces de usuário
- **React Router DOM** - Navegação entre páginas
- **Firebase** - Autenticação de usuários
- **Axios** - Requisições HTTP
- **Vite** - Ferramenta de build e desenvolvimento

## 📁 Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── contexts/       # Contextos React (autenticação)
  ├── hooks/          # Hooks personalizados
  ├── pages/          # Páginas da aplicação
  ├── routes/         # Configuração de rotas
  ├── services/       # Comunicação com APIs
  └── main.jsx        # Ponto de entrada
```

## 🔧 Instalação e Execução

1. **Instalar dependências:**
```bash
npm install
```

2. **Configurar variáveis de ambiente:**
   - Copie `.env.example` para `.env`
   - Configure as credenciais do Firebase

3. **Iniciar em modo desenvolvimento:**
```bash
npm run dev
```

4. **Acessar a aplicação:**
   - URL: http://localhost:5173

## 📖 Funcionalidades Implementadas

- ✅ **Autenticação:** Login e registro de usuários
- ✅ **Dashboard:** Página principal após login
- ✅ **Tema:** CRUD completo (ex. se for todo list, deve ser possivel criar, atualizar, excluir e obter tarefas mostrando na interface)
- ✅ **Roteamento Protegido:** Páginas que requerem autenticação
- ✅ **Integração com Backend:** Comunicação via API REST

## 🎯 Objetivo de Aprendizado

Este projeto foi estruturado para ensinar conceitos fundamentais do React:

- Componentes funcionais e hooks
- Gerenciamento de estado com Context API
- Roteamento e navegação
- Comunicação com APIs
- Autenticação e autorização
- Formulários

## 📚 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento

##### Outros que não serão usados por ora:

- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa verificação de código