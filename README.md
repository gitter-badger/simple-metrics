# Simple metrics

[![Join the chat at https://gitter.im/Pineli/simple-metrics](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Pineli/simple-metrics?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Módulo simples para contar quantas requisições a aplicação esta recebendo ou qualquer outra métrica necessária.
A intesão deste módulo não é cria um 'New relic' e sim algo simples|básico e rápido para teste de performance inicial.

Fase inicial, qualquer sugestão sera bem vinda.

Fazer:

- ok - Estrutura basica do modulo 
- Definir estrutura basica para possibilitar enviar dados por evento aos contadores, alen de consulta dos dados
- ok - Teste de incremento 
- Contar separadamentes os verbos HTTP
- Contar conexoes socket
- Compartilhar em clustes o contador
- Ver possibilidade de injetar uma rota para visualizacao amigavel dos valores
- Criar view com grafico implificado das metricas
- Documentar tudo em portugues e ingles
- Enviar modulo ao NPM

...