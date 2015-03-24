# Simple metrics

Modulo simples para contar quantas requisicoes a aplicaçao esta recebendo ou qualquer outra metrica necessaria.
A intesao deste modulo nao ´e cria um 'New relic' e sim algo simples e rapido para teste de performance inicial.

Fase inicial, qualquer sugestao sera bem vinda.

* esta tudo sem acentuacao porposital por enquanto.

Fazer:

ok - Estrutura basica do modulo 
Definir estrutura basica para possibilitar enviar dados por evento aos contadores, alen de consulta dos dados
ok - Teste de incremento 
Contar separadamentes os verbos HTTP
Contar conexoes socket
Compartilhar em clustes o contador
Ver possibilidade de injetar uma rota para visualizacao amigavel dos valores
Criar view com grafico implificado das metricas
Documentar tudo em portugues e ingles

Enviar modulo ao NPM
...