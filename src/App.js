import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulando uma requisição com axios (versão vulnerável)
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  // Usando lodash (versão com vulnerabilidades conhecidas)
  const processData = (input) => {
    return _.merge({}, input, { processed: true, timestamp: moment().format() });
  };

  const handleClick = () => {
    if (data) {
      const processed = processData(data);
      console.log('Dados processados:', processed);
      alert('Dados processados com sucesso!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Projeto de Teste de Segurança</h1>
        <p>Este projeto contém dependências com vulnerabilidades conhecidas</p>
        
        {error && (
          <div className="error">
            <p>Erro: {error}</p>
          </div>
        )}

        {data && (
          <div className="data-container">
            <h2>Dados Carregados:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={handleClick}>Processar Dados</button>
          </div>
        )}

        <div className="warning">
          <h3>⚠️ Aviso de Segurança</h3>
          <p>Este projeto foi criado para testar bots de segurança de dados.</p>
          <p>As seguintes dependências podem ter vulnerabilidades conhecidas:</p>
          <ul>
            <li>axios: 0.19.2 (vulnerabilidades conhecidas)</li>
            <li>lodash: 4.17.15 (vulnerabilidades conhecidas)</li>
            <li>express: 4.16.4 (versão antiga)</li>
            <li>jsonwebtoken: 8.5.0 (versão antiga)</li>
            <li>moment: 2.24.0 (biblioteca deprecated)</li>
            <li>serialize-javascript: 2.1.2 (vulnerabilidades conhecidas)</li>
            <li>minimist: 0.0.8 (vulnerabilidades críticas)</li>
            <li>ws: 3.3.3 (versão antiga com vulnerabilidades)</li>
            <li>react: 16.8.0 (versão antiga)</li>
            <li>webpack: 4.41.5 (versão antiga)</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;

