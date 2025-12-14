// ⚠️ CÓDIGO INTENCIONALMENTE INSECURO PARA TESTES
// Este arquivo contém exemplos de uso inseguro de dependências

import jwt from 'jsonwebtoken';
import serialize from 'serialize-javascript';
import minimist from 'minimist';

// Uso inseguro de jsonwebtoken sem verificação adequada
export const createToken = (payload) => {
  // ⚠️ Sem algoritmo especificado - vulnerável a ataques
  return jwt.sign(payload, 'secret-key-hardcoded');
};

// Uso inseguro de serialize-javascript
export const serializeData = (data) => {
  // ⚠️ Pode ser vulnerável a XSS se não sanitizado
  return serialize(data);
};

// Uso de minimist (versão vulnerável a prototype pollution)
export const parseArgs = (args) => {
  // ⚠️ Versão 0.0.8 tem vulnerabilidades críticas
  return minimist(args);
};

// Exemplo de uso de eval (extremamente inseguro)
export const unsafeEval = (code) => {
  // ⚠️ NUNCA use eval em produção!
  // eslint-disable-next-line no-eval
  return eval(code);
};

