# Projeto de Teste de Segurança

Este projeto foi criado especificamente para testar bots de segurança de dados. Ele contém intencionalmente dependências com vulnerabilidades conhecidas e versões desatualizadas.

## ⚠️ AVISO IMPORTANTE

**Este projeto NÃO deve ser usado em produção!** Ele foi criado apenas para fins de teste de ferramentas de segurança.

## Dependências com Vulnerabilidades Conhecidas

Este projeto inclui as seguintes dependências que podem gerar alertas de segurança:

- **axios**: 0.19.2 - Versão antiga com vulnerabilidades conhecidas
- **lodash**: 4.17.15 - Versão com vulnerabilidades conhecidas
- **express**: 4.16.4 - Versão antiga
- **jsonwebtoken**: 8.5.0 - Versão antiga
- **moment**: 2.24.0 - Biblioteca deprecated
- **serialize-javascript**: 2.1.2 - Vulnerabilidades conhecidas
- **minimist**: 0.0.8 - Vulnerabilidades críticas (prototype pollution)
- **ws**: 3.3.3 - Versão antiga com vulnerabilidades
- **react**: 16.8.0 - Versão antiga
- **webpack**: 4.41.5 - Versão antiga

## Como Instalar

```bash
npm install
```

## Como Executar

```bash
npm start
```

O projeto será aberto em [http://localhost:3000](http://localhost:3000)

## Testando o Bot de Segurança

Execute o seu bot de segurança de dados neste projeto. Ele deve detectar:

1. Dependências desatualizadas
2. Vulnerabilidades conhecidas (CVE)
3. Dependências com problemas de segurança
4. Versões antigas de bibliotecas críticas

## Estrutura do Projeto

```
vambro/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

