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
