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

* Java 21
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

# Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

* Java 21+
* Maven
* Node.js
* MySQL Server
* Git

---

# Clonando o Projeto

```bash
git clone <URL_DO_REPOSITORIO>
```

---

# Configuração do Banco de Dados

Abra o MySQL e execute:

```sql
CREATE DATABASE streaming;
```

---

# Configuração do Backend


Em src/main/resources, troque o nome do arquivo "application.properties.example" para "application.properties"

Configure suas credenciais do MySQL:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/streaming
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

# Executando o Backend

Rode o script StreamingapiApplication em src/main/java

Ao iniciar pela primeira vez, o Hibernate criará automaticamente todas as tabelas do banco.

---

# Inserindo Dados Iniciais

Após iniciar o backend, execute os scripts no seu mySQL na ordem:

categorias.sql ->
admin.sql ->
filmes.sql

Todos se encontram dentro do diretório src/sql/

# Credenciais de Acesso

Utilize o administrador padrão:

Email:

[admin@byteflix.com](mailto:admin@byteflix.com)

Senha:

1234

---

# Executando o Frontend

Abra um terminal na pasta do frontend:

```bash
npm install
```

Depois:

```bash
npm run dev
```

A aplicação ficará disponível em:

```txt
http://localhost:5173
```

---

Obs: para a aplicação funcionar, é necessário estar rodando tanto o backend quanto o frontend!
