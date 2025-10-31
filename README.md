# Painel de Gestão de Usuários

<img width="1913" height="512" alt="image" src="https://github.com/user-attachments/assets/0ee27e50-51f1-4380-9500-6d0dc3406646" />

Aplicação desenvolvida em **React + TypeScript** com **Vite**, seguindo os requisitos do desafio técnico.  
O sistema permite **listar, filtrar, criar, editar e excluir usuários**, com validações, feedback visual, tema dark/light.

## ✨ Tecnologias Utilizadas

| Categoria               | Ferramentas                                     |
| ----------------------- | ----------------------------------------------- |
| Framework               | React + Vite + TypeScript                       |
| UI/Design System        | Material UI (MUI) + Tema Dark/Light persistente |
| Formulários & Validação | react-hook-form + zod                           |
| Estado & Dados          | Redux Toolkit + React Query                     |
| HTTP Client             | axios (baseURL configurável via `.env`)         |
| Roteamento              | React Router Dom                                |
| Testes                  | Jest + Testing Library (mocks tipados)          |
| Qualidade               | ESLint (Flat Config) + Prettier                 |
| Mock de API             | json-server                                     |

## 🧾 Sobre o Sistema

- CRUD completo de usuários
- Listagem com ordenação, paginação e filtro
- Formulário com validação e modo edição
- Tema Dark/Light persistido
- UI acessível (a11y)
- Sincronização automática de dados via React Query + Redux
- ErrorBoundary customizado
- GitHub Actions configurado para rodar os testes, validar eslint e gerar build
- Storybook configurado e com alguns components
- Possui o uso da memoização em lugares que julguei necessário
- Extra: sistema com 3 idiomas (Português, Inglês e Italiano)

## 📦 Pré-requisitos

- Node.js **18+**
- `pnpm` (recomendado) ou `npm`/`yarn`
- Porta **3001** livre para o mock da API

## 🔧 Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto, caso necessário tem um env.example:

```
VITE_REACT_APP_API=http://localhost:3001

```

## ▶️ Como Rodar o Projeto

### 1) Instalar dependências

```
pnpm install

```

### 2) Rodar aplicação + mock da API

```
pnpm dev

```

Frontend: http://localhost:5173  
API mock: http://localhost:3001/users

## 🧪 Testes

```
pnpm test

```

## 🧹 Lint e Formatação

```
pnpm lint
pnpm lint:fix

```

## 📘 Storybook

```
pnpm storybook
pnpm build-storybook

```

## 🏗 Build para Produção

```
pnpm build
pnpm preview

```

## 📜 Scripts do Projeto

```
"dev": "concurrently \"pnpm vite\" \"pnpm mock\"",
"build": "tsc -b && vite build",
"lint": "eslint src --ext .ts,.tsx,.js,.jsx",
"lint:fix": "eslint src --ext .ts,.tsx,.js,.jsx --fix",
"preview": "vite preview",
"test": "jest",
"coverage": "jest --coverage --collectCoverageFrom='src/**/*.{ts,tsx}'",
"mock": "json-server --watch db.json --port 3001",
"storybook": "storybook dev -p 6006",
"build-storybook": "storybook build"

```

## 💡 Deploy

O deploy foi feito na Vercel e pode ser conferido [aqui](https://user-management-zucchetti.vercel.app)! O único porém é que a versão públicada não está integrada a nenhum backend, entao essa versão é mais para efeito de visualização, a versão funcional é a que roda em ambiente local.

## 😔 O que faltou?

Faltou avançar nos testes em geral.

## ✅ Observações finais

Qualquer dúvida estou a disposição.
