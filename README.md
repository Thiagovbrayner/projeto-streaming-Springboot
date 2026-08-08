# ByteFlix 🎬

Sistema de catálogo e gerenciamento de filmes desenvolvido com **Spring Boot**, **React**, **MySQL** e **JWT**.

## Funcionalidades

### Área Pública

* Visualização do catálogo de filmes
* Pesquisa de filmes por título
* Visualização dos detalhes de cada filme

### Área Administrativa

* Login com autenticação JWT
* Cadastro de filmes
* Edição de filmes
* Exclusão de filmes
* Associação de filmes a categorias
* Upload via URL de imagem para capa dos filmes

---

# Tecnologias Utilizadas

## Backend

* Java 17
* Spring Boot
* Spring Security
* JWT
* JPA / Hibernate
* MySQL

## Frontend

* React
* React Router
* Axios
* CSS

---

# Como Executar o Projeto

Você pode rodar o projeto de duas formas: **com Docker** (recomendado, mais simples) ou **manualmente**.

---

## 🐳 Opção 1: Executando com Docker (Recomendado)

### Pré-requisitos

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e em execução

### Passo a passo

**1. Clone o repositório:**
```bash
git clone <URL_DO_REPOSITORIO>
cd streamingapi
```

**2. Configure as variáveis de ambiente:**

Crie uma cópia do arquivo de exemplo com o nome `.env`:
```bash
cp .env.example .env
```
> Ou, se preferir, duplique o arquivo `.env.example` manualmente pelo explorador de arquivos e renomeie a cópia para `.env`.

Abra o `.env` e defina sua senha:
```env
MYSQL_ROOT_PASSWORD=sua_senha_aqui
MYSQL_DATABASE=streamingdb
```

**3. Suba todos os serviços:**
```bash
docker compose up --build
```

O Docker irá automaticamente:
- Subir o banco de dados MySQL com as credenciais do `.env`
- Compilar e iniciar o Backend (Spring Boot) na porta `8080`
- Popular o banco com categorias, filmes e o usuário admin
- Compilar e servir o Frontend (React + Nginx) na porta `80`

**4. Acesse a aplicação:**
```
http://localhost
```

> Não é necessário configurar nenhum arquivo Java ou de banco de dados manualmente — o Docker cuida de tudo!

### Comandos úteis do Docker

| Ação | Comando |
|---|---|
| Subir os containers | `docker compose up` |
| Subir e recompilar após mudanças no código | `docker compose up --build` |
| Parar e remover os containers | `docker compose down` |
| Ver logs em tempo real | `docker compose logs -f` |

> ⚠️ **Atenção:** O comando `docker compose down -v` apaga também os dados do banco de dados.

---

## ⚙️ Opção 2: Executando Manualmente

### Pré-requisitos

* Java 17+
* Maven
* Node.js
* MySQL Server
* Git

### Configuração do Banco de Dados

Abra o MySQL e execute:
```sql
CREATE DATABASE streamingdb;
```

### Configuração do Backend

Em `streamingapi/src/main/resources`, renomeie o arquivo `application.properties.example` para `application.properties` e configure suas credenciais:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/streamingdb
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Executando o Backend

Rode a classe `StreamingapiApplication` em `src/main/java`.

Ao iniciar pela primeira vez, o Hibernate criará automaticamente todas as tabelas do banco.

### Inserindo Dados Iniciais

Após iniciar o backend, execute os scripts no MySQL na seguinte ordem:

```
categorias.sql → admin.sql → filmes.sql
```

Todos se encontram dentro do diretório `streamingapi/src/sql/`.

### Executando o Frontend

Abra um terminal na pasta `streaming-front`:

```bash
npm install
npm run dev
```

A aplicação ficará disponível em:
```
http://localhost:5173
```

> **Obs:** Para a aplicação funcionar manualmente, é necessário estar rodando tanto o backend quanto o frontend ao mesmo tempo.

---

# Credenciais de Acesso

Utilize o administrador padrão:

| Campo | Valor |
|---|---|
| Email | admin@byteflix.com |
| Senha | 1234 |
