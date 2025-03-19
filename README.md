# 📜 AX Logger  

![npm](https://img.shields.io/npm/v/ax-logger?style=flat-square)  
![License](https://img.shields.io/github/license/GuiCezaF/ax-logger?style=flat-square)  
![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue?style=flat-square)

Um **logger minimalista e estilizado** para Node.js, com suporte a diferentes níveis de log e timestamps.

## 🚀 Instalação  

Instale o `ax-logger` via **npm** ou **yarn**:

```sh
  npm install ax-logger
  # or
  yarn add ax-logger
```

## 📌 Como Usar

### Importação

No *TypeScript* ou *ESM*:

```ts
  import { Logger } from "ax-logger";

  const log = new Logger();
  log.success("Tudo certo! 🚀");
```

No *CommonJS*:

```js
  const { Logger } = require("ax-logger");

  const log = new Logger();
  log.success("Tudo certo! 🚀");
```

## 📝 Métodos Disponíveis

O Logger fornece métodos para diferentes níveis de log, todos formatados com cores e ícones:

```ts
  log.success("Operação bem-sucedida!");
  log.info("Aqui está uma informação.");
  log.warning("Cuidado com isso!");
  log.error("Algo deu errado!", new Error("Erro de teste"));
  log.debug("Debugando variável", { foo: "bar" });
```

### 📌 Saída no Console

```bash
  ℹ️ [SUCCESS] [12:34:56]: Operação bem-sucedida!
  ✔️ [INFO] [12:34:56]: Aqui está uma informação.
  ❌ [WARNING] [12:34:56]: Cuidado com isso!
  ⚠️ [ERROR] [12:34:56]: message: Algo deu errado!, Error: Erro de teste
  🔍 [DEBUG] [12:34:56]: Debugando variável { foo: 'bar' }
```

## ⚙ Configuração

O Logger aceita um parâmetro opcional no construtor:

```ts
  const log = new Logger(); //padrão tera o timestamps no log

  const log = new Logger(false); // Desativa timestamps nos logs
```

## 📜 Licença

Este projeto está licenciado sob a MIT License.
