# Justificativa das mudanças editoriais

Este documento explica as decisões de redação aplicadas aos documentos do The Veil Syndicate e do The Warden.

As mudanças são editoriais. Elas não alteram a arquitetura proposta, os valores econômicos ou as decisões ainda marcadas como `TBD`.

## Arquivos envolvidos

- Documento do protocolo: `the-veil-syndicate-incubator-application.md`
- Documento do agente: `the-warden-ai-agent-concept.md`

Os documentos originais continuam intactos.

## Objetivo

A versão anterior estava clara, mas usava vários padrões comuns de texto gerado por IA:

- abertura ampla antes de explicar o mecanismo;
- adjetivos que aumentavam a importância de uma ideia sem provar nada;
- listas longas com a mesma estrutura;
- frases com comprimento muito parecido;
- termos abstratos no lugar de ações observáveis;
- repetição de uma mesma tese em várias seções;
- metáforas de produto e de infraestrutura;
- linguagem de apresentação institucional que poderia descrever qualquer projeto.

A nova versão começa pelo funcionamento do sistema. Depois, apresenta limites, riscos e decisões pendentes. O leitor recebe primeiro os fatos que precisa para avaliar o projeto.

## Mudanças gerais

### 1. Abertura com o mecanismo principal

**Antes**

> A reserve protocol where `$VSYNC` is burned to activate programmable Ciphers backed by individually accounted ZEC reserves.

**Depois**

> `$VSYNC` is spent to change a Cipher's state. ZEC records the value assigned to that Cipher. The Window lets an active owner take an advance from that recorded value.

**Motivo**

A frase nova diz o que cada parte faz. Ela nomeia o token, o estado do Cipher, a reserva e o Window. O leitor não precisa interpretar palavras como “programmable” ou “backed” antes de entender o fluxo.

### 2. Menos linguagem promocional

Termos como “distinctive”, “credible”, “native”, “intelligent”, “advanced” e “financial identity” foram removidos ou usados somente quando descrevem uma função específica.

**Motivo**

Esses termos sugerem valor, mas não mostram como o sistema funciona. A nova redação usa verbos verificáveis, como `burn`, `record`, `show`, `repay`, `pause` e `settle`.

### 3. Mais números e limites

A nova versão coloca cedo os dados que já existem:

- 2.100 Ciphers;
- ativação entre `50,000–250,000 $VSYNC (TBD)`;
- pesos de 1x, 2x, 3x, 5x e 10x;
- limites de Window de 10% a 50%;
- alvo inicial de 20% de utilização da reserva;
- condição de pausa quando o limite global é atingido.

**Motivo**

A skill pede especificidade. Números permitem que o leitor avalie o desenho e identifique o que ainda não foi decidido.

### 4. Separação entre fato e decisão pendente

Os valores que ainda não foram definidos continuam marcados como `TBD`. Os limites de teste aparecem como “starting limits” ou “test values”.

**Motivo**

Isso evita que uma hipótese pareça uma promessa. Também mostra ao avaliador da incubadora qual trabalho ainda precisa ser feito.

### 5. Menos reframing vazio

A skill desaconselha construções como “não é X, é Y” quando o segundo lado é apenas uma abstração.

Na nova versão, a ideia aparece de forma direta:

> The Window does not create yield. It changes when the owner can use ZEC already assigned to a Cipher.

**Motivo**

A frase explica a função econômica. Ela não depende de uma oposição retórica para parecer mais importante.

### 6. Linguagem literal

Foram reduzidas expressões como “under the veil”, “reserve-native financial position” e “operating interface” quando elas não eram necessárias para a explicação.

**Motivo**

O nome do projeto já fornece a camada narrativa. A documentação técnica precisa explicar o comportamento do contrato sem depender de metáforas.

### 7. Ritmo de leitura mais irregular

A nova versão alterna frases curtas com explicações mais longas. Também usa parágrafos para relações de causa e efeito, em vez de transformar cada ideia em uma lista de três itens.

**Motivo**

O texto fica mais próximo de uma explicação escrita por uma pessoa que conhece o sistema. A leitura deixa de parecer um conjunto de blocos gerados com o mesmo molde.

### 8. Menos repetição

As versões anteriores explicavam várias vezes que `$VSYNC` é queimado, que ZEC é a reserva e que o Window não usa preço de mercado. A nova versão apresenta cada ponto no local em que ele é necessário e usa uma seção curta para consolidá-lo.

**Motivo**

Repetição aumenta o tamanho sem aumentar a compreensão. O leitor pode encontrar a regra uma vez e seguir para a consequência.

## Mudanças no documento do protocolo

### Ordem da explicação

A versão nova segue esta ordem:

1. fatos do projeto;
2. funcionamento do protocolo;
3. ranks e pesos;
4. Window;
5. transferências e redemption;
6. uso de `$VSYNC`;
7. reserva e riscos;
8. trabalho necessário antes do lançamento.

**Motivo**

Essa ordem responde às perguntas básicas na sequência em que surgem: o que é, como funciona, quanto pode fazer, o que pode dar errado e o que falta validar.

### Window como fluxo concreto

A explicação agora mostra o que o usuário vê: valor bruto da cage, saldo aberto, valor líquido, limite do rank, utilização global e burn exigido.

**Motivo**

O Window deixa de parecer uma categoria de produto. O leitor consegue seguir a decisão antes da assinatura.

### Riscos ligados a ações

Os riscos agora aparecem com uma causa e uma resposta:

- advances abertos reduzem o ZEC disponível para redemption;
- erro de settlement pode exibir um saldo incorreto;
- custody e bridge criam premissas de confiança;
- poucos wallets podem concentrar peso e capacidade;
- token burns e advances podem criar obrigações legais.

**Motivo**

O texto deixa de dizer apenas que há “risco”. Ele mostra onde o risco nasce e qual controle deve existir.

## Mudanças no documento do Warden

### Mandate como ponto de entrada

A nova versão começa com um mandato completo:

> Keep at least 70% of my net cage. Open a Window only when the burn is below 8,000 `$VSYNC` and global utilization is below 15%.

**Motivo**

Esse exemplo mostra a utilidade do agente em uma situação concreta. Ele também mostra que a autoridade vem dos limites assinados pelo proprietário.

### Separação entre modelo e contrato

A versão nova repete a fronteira de autoridade apenas onde ela é necessária:

- o modelo interpreta o objetivo;
- o compilador cria limites;
- o proprietário assina;
- o executor envia uma função permitida;
- o contrato valida a transação.

**Motivo**

Essa sequência responde à principal dúvida sobre um agente de IA financeiro: o que o modelo pode decidir e o que o contrato deve impedir.

### Autoridade em três níveis

Observer, Copilot e Autopilot continuam no documento, mas cada nível agora é definido por ações permitidas e proibidas.

**Motivo**

“Autonomia” sem uma lista de funções é uma palavra vaga. Os três níveis mostram uma progressão técnica que pode ser testada.

### Reputação sem autoridade implícita

A nova versão mantém a ideia de reputação, mas deixa explícito que uma pontuação alta não aumenta os limites de um mandato.

**Motivo**

Isso evita uma promessa implícita de confiança. O agente pode ter um histórico melhor, mas ainda precisa seguir os limites assinados por cada Cipher.

## O que permaneceu igual

As prévias mantêm:

- o token `$VSYNC` como acesso consumível;
- ZEC como ativo de reserva;
- 2.100 Ciphers;
- os cinco ranks e seus pesos atuais;
- o intervalo de ativação entre 50k e 250k `$VSYNC` como `TBD`;
- o Window sem liquidação baseada em preço;
- repayment por distribuições futuras;
- os limites de segurança e revogação do Warden;
- o plano de começar com Observer antes de Autopilot;
- as decisões econômicas e técnicas ainda abertas.

## Resultado esperado

O leitor deve conseguir responder quatro perguntas sem reler o documento:

1. O que `$VSYNC` faz?
2. De onde vem o ZEC usado pelo Window?
3. Qual limite impede uma ação excessiva?
4. O que ainda precisa ser validado antes do lançamento?

Se uma frase não ajuda a responder uma dessas perguntas, ela deve ser encurtada, movida ou removida.
