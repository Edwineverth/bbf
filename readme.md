# BBF - Backend
### Clean Architecture for BBF
```angular2html
src/
├── core/
│   ├── domain/
│   │   └── client.entity.ts
│   │   └── portfolio.entity.ts
│   ├── use-cases/
│   │   └── get-client-portfolios.usecase.ts
├── adapters/
│   ├── graphql/
│   │   └── api.resolver.ts
│   │   └── api.module.ts
├── ports/
│   ├── client.repository.ts
│   ├── portfolio.repository.ts
├── infrastructure/
│   ├── config/
│   │   └── app.module.ts
│   └── http/
│       └── http-client.module.ts
│       └── http-client.service.ts

```
## Descripción

La API de `Backend-For-Frontend BFF` expone un api GRAPHQL para las operaciones de las APIs externas Client y Portfolio.

## Requisitos

- Docker
- Docker Compose

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Edwineverth/bbf

2. Asegurarse que las variables de entorno esten en un archivo .env

```bash
CLIENT_API_URL=http://api-client:8080
PORTFOLIO_API_URL=http://api-client-portfolio:8081
```
## Uso

Antes de construir crear una red compartida para los contenedores:
```shell
docker network create backend
```

Construir y ejecutar la aplicación con Docker Compose
Construye y ejecuta los contenedores:

```bash
Copiar código
docker-compose up --build
```
La aplicación estará disponible en http://localhost:3000/graphql.

## Nota:
Al correr la aplicación correrá un pequeño script para llenar con información inicial la DB.
En baso de querer insertar más información modificar el archivo.
```makefile
init-portfolio.js
```

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.
