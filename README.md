<h1>API Lumine</h1>
    
<p>Uma API JavaScript construída com Knex.js para interações com bancos de dados SQL.</p>
    
<h2>Visão Geral</h2>
    
<p>A API Lumine é um serviço de backend que fornece operações de banco de dados usando Knex.js como construtor de consultas SQL. Este repositório contém a configuração necessária para migrações e conexões de banco de dados.</p>
    
<h2>Recursos</h2>
    
<ul>
  <li>Integração com banco de dados SQL usando Knex.js</li>
  <li>Suporte para migração de banco de dados</li>
  <li>Funcionalidade de exclusão em cascata</li>
</ul>
    
<h2>Tecnologias Utilizadas</h2>
    
<ul>
    <li>Node.JS + Express</li>
    <li>Knex.js para construção de consultas SQL e migrações</li>
</ul>
    
<h2>Instalação</h2>
    
<ol>
    <li>
        <p>Clone o repositório:</p>
        <pre><code>git clone https://github.com/Possomato/api-lumine.git
cd api-lumine</code></pre>
    </li>
    <li>
        <p>Instale as dependências:</p>
        <pre><code>npm install</code></pre>
    </li>
    <li>
        <p>Configure a conexão do seu banco de dados em <code>knexfile.js</code></p>
    </li>
    <li>
        <p>Execute as migrações:</p>
        <pre><code>npx knex migrate:latest</code></pre>
    </li>
</ol>
    
<h2>Estrutura do Projeto</h2>
    
<ul>
    <li><code>src/</code> - Diretório do código-fonte</li>
    <li><code>knexfile.js</code> - Arquivo de configuração do Knex com definições de dependências SQL para exclusão em cascata</li>
    <li><code>package.json</code> - Dependências e scripts do projeto</li>
</ul>
    
<h2>Uso</h2>
    
<p>Configure a conexão do seu banco de dados no <code>knexfile.js</code> e use os endpoints da API para interagir com o banco de dados.</p>
    
    
<h2>Licença</h2>
    
<p>Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.</p>
    
<h2>Contato</h2>
    
<p>Link do projeto: <a href="https://github.com/Possomato/api-lumine">https://github.com/Possomato/api-lumine</a></p>
