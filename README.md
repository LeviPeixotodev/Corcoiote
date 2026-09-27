# Corcoiote API 🚀

API backend desenvolvida em **TypeScript, Node.js, **, estruturada com uma arquitetura limpa e modular (Controllers, Services, Routes e Mocks). O projeto já conta com configuração para Docker, variáveis de ambiente e está otimizado para o ambiente de desenvolvimento no **GitHub Codespaces**.

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** TypeScript
- **Ambiente:** Node.js, Express
- **ORM:** Prisma ORM
- **Containerização:** Docker, image, Docker Compose
- **Banco de Dados:** PostgreSQL

---

## 📁 Arquitetura do Projeto

A estrutura de diretórios foi desenhada para separar responsabilidades de forma clara:

```text
src/
├── @types/       # Definições de tipos globais do TypeScript
├── controllers/  # Camada de controle (recebe requisições e retorna respostas)
├── services/     # Camada de regras de negócio
├── routes/       # Definição das rotas da API
└── mocks/        # Dados simulados para testes iniciais
```

---

## ⚙️ Variáveis de Ambiente (`.env`)

Crie um arquivo `.env` na raiz do projeto baseando-se no exemplo abaixo (`.env.example`):
---

## 🐳 Rodando com Docker Compose

Para subir o banco de dados e os serviços necessários de forma isolada:

```bash
# Sobe os containers em segundo plano
docker compose up -d

# Para derrubar os containers
docker compose down
```

---

## ☁️ Rodando o projeto

Este repositório possui suporte nativo ao **Codespaces**. Ao abrir o projeto no Codespaces:

1. As dependências serão instaladas automaticamente (ou execute `npm install`).
2. Crie e configure o seu arquivo `.env` usando o `.env.example` como base.
3. Execute as migrações do Prisma para estruturar o banco de dados:
```bash
npx prisma migrate dev
```


4. Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```



---

## 🔮 Melhorias Futuras

* [ ] Implementação do Frontend (Consumo da API).
* [ ] Conexão definitiva e migrações do Banco de Dados (substituindo mocks remanescentes).
* [ ] Testes unitários e de integração (Jest / Supertest).
* [ ] Autenticação e Autorização (JWT / OAuth).
* [ ] Documentação de rotas com Swagger / OpenAPI.