# Central de Operações Bursty — Interno (todos os clientes) + Boost

Painel interno da agência: dashboard multi-cliente (Meta Ads, Google Ads,
Instagram Orgânico e Operações/Jira, com seletor para trocar entre todos os
clientes da Bursty) e uma seção **Boost**, que abre o painel de Ciência de
Dados (`boost.html`) em uma página própria.

## Estrutura
```
index.html   -> Central de Operações (todos os clientes)
boost.html   -> Painel Boost (Ciência de Dados)
server.js    -> servidor Node sem dependências, serve os dois arquivos
Dockerfile   -> build determinístico no Railway
```

> IMPORTANTE: todos os arquivos precisam ficar na RAIZ do repositório.

## Publicar no Railway
1. New Project -> Deploy from GitHub repo -> selecione o repositório.
2. O Railway usa o Dockerfile e roda `node server.js`.
3. Settings -> Networking -> Generate Domain.

Depois de publicado, o botão **Boost** no cabeçalho do dashboard abre
automaticamente `/boost.html`.
