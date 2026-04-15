# 📊 Dashboard de Gestão - Angular + Quarkus

## 🚀 Sobre o Projeto

Este projeto é uma aplicação fullstack para visualização e gerenciamento de dados, construída com **Angular** no frontend e **Java + Quarkus** no backend.

O foco atual da aplicação é o gerenciamento de **categorias**, com operações completas de CRUD (Create, Read, Update, Delete), além da exibição de métricas no dashboard.

---

## 🧱 Arquitetura

A aplicação segue uma arquitetura simples e eficiente:

### 🔹 Backend (Quarkus)

* API REST utilizando **Quarkus**
* Implementação baseada no padrão **Active Record Pattern**, utilizando **Panache**
* Estrutura:

  * Resource (camada de entrada HTTP)
  * Entity (contendo regras e persistência)

### 🔹 Frontend (Angular)

* SPA (Single Page Application)
* Comunicação com backend via HTTP
* Componentização e uso de RxJS

---

## 🛠️ Tecnologias Utilizadas

### 🔙 Backend

* Java 17+
* Quarkus
* RESTEasy (JAX-RS)
* Hibernate ORM com Panache
* Active Record Pattern
* Banco de dados MySQL (provisionado automaticamente em ambiente de desenvolvimento pelo Quarkus Dev Services)

### 🔜 Frontend

* Angular
* TypeScript
* Tailwind CSS
* Chart.js
* RxJS

---

## ⚡ Active Record Pattern

O projeto utiliza o padrão **Active Record**, onde a própria entidade é responsável pelas operações de persistência.

### Exemplo:

```java
@Entity
public class Category extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String name;

    public String description;
    public Boolean active;

}
```

Esse padrão reduz a complexidade ao eliminar a necessidade de uma camada de repository explícita.

---

## 🗄️ Banco de Dados

Durante o desenvolvimento, o Quarkus utiliza **Dev Services**, que automaticamente sobe um container com banco de dados (MySQL) sem necessidade de configuração manual.

Isso permite:

* 🚀 Setup rápido
* 🐳 Integração automática com Docker
* ⚡ Ambiente pronto para desenvolvimento

---

## 📊 Funcionalidades

* 📌 CRUD completo de categorias
* 📌 Listagem de categorias
* 📌 Atualização de dados
* 📌 Exclusão de registros
* 📌 Dashboard com métricas (frontend)
* 📌 Integração com API REST

---

## 🔌 Integração Frontend ↔ Backend

A comunicação é feita via HTTP.

### Exemplo (Angular):

```ts
this.http.get('http://localhost:8080/categories');
```

### Exemplo (Quarkus):

```java
@Path("/categories")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CategoryController {

    @POST
    @Transactional
    public Response createCategory(final CategoryEntity category){
        return Response.ok(this.service.create(category)).build();
    }

    @GET
    @Path("/{id}")
    public Response getById(@PathParam("id") UUID categoryId){
        return Response.ok(this.service.findById(categoryId)).build();
    }

}
```

---

## ⚙️ Como Rodar o Projeto

### 🔙 Backend (Quarkus) - App quarkus

```bash
git clone <repo-backend>

./mvnw quarkus:dev
```

O Quarkus irá automaticamente:

* Subir a aplicação
* Inicializar o banco de dados (via Dev Services)

---

### 🔜 Frontend (Angular)

```bash
git clone <repo-frontend>

npm install
ng serve
```

Acesse:

```
http://localhost:4200
```

---

## 🔐 CORS

Caso necessário:

```properties
quarkus.http.cors=true
quarkus.http.cors.origins=*
```

---

## 📁 Estrutura do Projeto

### Backend

```
src/main/java
 ├── controller
 ├── entity
```

### Frontend

```
src/app/
 ├── components
 ├── services
 ├── pages
```

---

## 📈 Melhorias Futuras

* 🔄 Paginação no backend
* 🔍 Filtros por categoria
* 🔐 Autenticação com JWT / Keycloak
* 📊 Expansão do dashboard
* 🧪 Testes automatizados

---

## 👨‍💻 Autor

Desenvolvido por **Carlos Alexandre**

---

## 📄 Licença

Este projeto está sob a licença MIT.
