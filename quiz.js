// Corrigido e formatado com base no seu código original

const perguntas = [
    {
      pergunta: "Em que ano a Sociedade Esportiva Palmeiras foi fundada?",
      respostas: [
        { opcao: "1915", correto: false },
        { opcao: "1980", correto: false },
        { opcao: "1914", correto: true },
        { opcao: "1913", correto: false }
      ]
    },
    {
      pergunta: "Qual era o nome original do Palmeiras antes de 1942?",
      respostas: [
        { opcao: "Palestra Itália", correto: true },
        { opcao: "Palmeiras Futebol Clube", correto: false },
        { opcao: "Associação Paulista", correto: false },
        { opcao: "Clube Esportivo Paulista", correto: false }
      ]
    },
    // ...
    {
        pergunta: "Quantas vezes o Palmeiras venceu a Copa Libertadores até 2018?",
        respostas: [
          { opcao: "1", correto: true },
          { opcao: "2", correto: false },
          { opcao: "5", correto: false },
          { opcao: "3", correto: false }
        ]
      },
      {
        pergunta: "Qual é o estádio onde o Palmeiras manda seus jogos atualmente?",
        respostas: [
          { opcao: "Morumbi", correto: false },
          { opcao: "Pacaembu", correto: false },
          { opcao: "Allianz Parque", correto: true },
          { opcao: "Arena Corinthians", correto: false }
        ]
      },
      {
        pergunta: "Qual jogador é o maior artilheiro da história do Palmeiras?",
        respostas: [
          { opcao: "Evair", correto: false },
          { opcao: "César Maluco", correto: true },
          { opcao: "Dudu", correto: false },
          { opcao: "Marcos", correto: false }
        ]
      },
      {
        pergunta: "Quantos títulos do Campeonato Brasileiro o Palmeiras conquistou até 2023?",
        respostas: [
          { opcao: "12", correto: true },
          { opcao: "8", correto: false },
          { opcao: "9", correto: false },
          { opcao: "7", correto: false }
        ]
      },
      {
        pergunta: "Quem era o técnico do Palmeiras na conquista da Libertadores de 2020?",
        respostas: [
          { opcao: "Felipão", correto: false },
          { opcao: "Abel Ferreira", correto: true },
          { opcao: "Luxemburgo", correto: false },
          { opcao: "Cuca", correto: false }
        ]
      },
      {
        pergunta: "Contra qual time o Palmeiras conquistou a Libertadores de 1999?",
        respostas: [
          { opcao: "Boca Juniors", correto: false },
          { opcao: "Deportivo Cali", correto: true },
          { opcao: "River Plate", correto: false },
          { opcao: "Barcelona de Guayaquil", correto: false }
        ]
      },
      {
        pergunta: "Qual ídolo ficou conhecido como 'São Marcos' pela torcida?",
        respostas: [
          { opcao: "Djalma Santos", correto: false },
          { opcao: "César Sampaio", correto: false },
          { opcao: "Prass", correto: false },
          { opcao: "Marcos", correto: true }
        ]
      },
      {
        pergunta: "Qual título o Palmeiras venceu no centenário do clube, em 2014?",
        respostas: [
          { opcao: "Copa do Brasil", correto: false },
          { opcao: "Paulistão", correto: false },
          { opcao: "Nenhum", correto: true },
          { opcao: "Libertadores", correto: false }
        ]
      },
      {
        pergunta: "Quem marcou o gol do título da Copa do Brasil 2015?",
        respostas: [
          { opcao: "Dudu", correto: true },
          { opcao: "Gabriel Jesus", correto: false },
          { opcao: "Zé Roberto", correto: false },
          { opcao: "Arouca", correto: false }
        ]
      },
      {
        pergunta: "Quem é o técnico estrangeiro mais vitorioso da história do clube?",
        respostas: [
          { opcao: "Filippo Di Santo", correto: false },
          { opcao: "Carlos Bianchi", correto: false },
          { opcao: "Eduardo Baptista", correto: false },
          { opcao: "Abel Ferreira", correto: true }
        ]
      },
      {
        pergunta: "Qual o mascote do Palmeiras?",
        respostas: [
          { opcao: "Porco", correto: true },
          { opcao: "Gavião", correto: false },
          { opcao: "Tigre", correto: false },
          { opcao: "Jacaré", correto: false }
        ]
      },
      {
        pergunta: "Quem era o camisa 10 do time campeão da Libertadores 2021?",
        respostas: [
          { opcao: "Scarpa", correto: false },
          { opcao: "Raphael Veiga", correto: true },
          { opcao: "Dudu", correto: false },
          { opcao: "Rony", correto: false }
        ]
      },
      {
        pergunta: "Qual jogador do Palmeiras ficou famoso pela 'defesa impossível' em 2000?",
        respostas: [
          { opcao: "Prass", correto: false },
          { opcao: "Fernando Prass", correto: false },
          { opcao: "Marcos", correto: true },
          { opcao: "Vinícius Silvestre", correto: false }
        ]
      },
      {
        pergunta: "Qual foi o adversário na final do Paulistão 2020, vencido pelo Palmeiras?",
        respostas: [
          { opcao: "Corinthians", correto: true },
          { opcao: "São Paulo", correto: false },
          { opcao: "Santos", correto: false },
          { opcao: "Bragantino", correto: false }
        ]
      },
      {
        pergunta: "Quem foi o artilheiro do Palmeiras na temporada de 2022?",
        respostas: [
          { opcao: "Rony", correto: true },
          { opcao: "Scarpa", correto: false },
          { opcao: "Dudu", correto: false },
          { opcao: "Veiga", correto: false }
        ]
      },
      {
        pergunta: "Qual time o Palmeiras derrotou na final da Libertadores de 2021?",
        respostas: [
          { opcao: "River Plate", correto: false },
          { opcao: "Athletico-PR", correto: false },
          { opcao: "Santos", correto: false },
          { opcao: "Flamengo", correto: true }
        ]
      },
      {
        pergunta: "Quantas vezes o Palmeiras venceu a Libertadores até 2024?",
        respostas: [
          { opcao: "2", correto: false },
          { opcao: "4", correto: false },
          { opcao: "3", correto: true },
          { opcao: "5", correto: false }
        ]
      },
      {
        pergunta: "Qual jogador marcou um golaço de cobertura contra o Atlético-MG em 2023?",
        respostas: [
          { opcao: "Endrick", correto: true },
          { opcao: "Veiga", correto: false },
          { opcao: "Zé Rafael", correto: false },
          { opcao: "Artur", correto: false }
        ]
      },
      {
        pergunta: "Quantos títulos da Copa do Brasil o Palmeiras possui até 2024?",
        respostas: [
          { opcao: "3", correto: false },
          { opcao: "4", correto: true },
          { opcao: "5", correto: false },
          { opcao: "2", correto: false }
        ]
      },
      {
        pergunta: "Qual desses jogadores **não** jogou no Palmeiras?",
        respostas: [
          { opcao: "Alex", correto: false },
          { opcao: "Romário", correto: true },
          { opcao: "Valdivia", correto: false },
          { opcao: "Marcos Assunção", correto: false }
        ]
      },
      {
        pergunta: "Qual clube foi o maior rival na era Parmalat?",
        respostas: [
          { opcao: "Corinthians", correto: true },
          { opcao: "São Paulo", correto: false },
          { opcao: "Santos", correto: false },
          { opcao: "Flamengo", correto: false }
        ]
      },
      {
        pergunta: "Qual destes títulos o Palmeiras conquistou em 2020?",
        respostas: [
          { opcao: "Brasileiro e Copa do Brasil", correto: false },
          { opcao: "Libertadores e Copa do Brasil", correto: true },
          { opcao: "Libertadores e Brasileiro", correto: false },
          { opcao: "Libertadores e Mundial", correto: false }
        ]
      },
      {
        pergunta: "Em que ano o Palmeiras inaugurou o Allianz Parque?",
        respostas: [
          { opcao: "2014", correto: true },
          { opcao: "2013", correto: false },
          { opcao: "2015", correto: false },
          { opcao: "2012", correto: false }
        ]
      },
      {
        pergunta: "Quem é o técnico com mais títulos pelo Palmeiras?",
        respostas: [
          { opcao: "Felipão", correto: false },
          { opcao: "Abel Ferreira", correto: true },
          { opcao: "Oswaldo Brandão", correto: false },
          { opcao: "Luxemburgo", correto: false }
        ]
      },
      {
        pergunta: "Qual jogador foi revelado pelo Palmeiras e vendido ao Real Madrid em 2023?",
        respostas: [
          { opcao: "Endrick", correto: true },
          { opcao: "Gabriel Jesus", correto: false },
          { opcao: "Patrick de Paula", correto: false },
          { opcao: "Danilo", correto: false }
        ]
      },
      {
        pergunta: "Qual desses jogadores ficou conhecido como 'Mago' no Verdão?",
        respostas: [
          { opcao: "Valdivia", correto: true },
          { opcao: "Alex", correto: false },
          { opcao: "Djalminha", correto: false },
          { opcao: "Veiga", correto: false }
        ]
      },
      {
        pergunta: "Quem marcou o gol da vitória sobre o Santos na final da Libertadores 2020?",
        respostas: [
          { opcao: "Luiz Adriano", correto: false },
          { opcao: "Rony", correto: false },
          { opcao: "Gabriel Menino", correto: false },
          { opcao: "Breno Lopes", correto: true }
        ]
      },
      {
        pergunta: "Qual desses títulos o Palmeiras ainda não conquistou?",
        respostas: [
          { opcao: "Libertadores", correto: false },
          { opcao: "Mundial FIFA", correto: true },
          { opcao: "Copa do Brasil", correto: false },
          { opcao: "Paulistão", correto: false }
        ]
      },
      {
        pergunta: "Qual jogador vestia a camisa 7 em 2023?",
        respostas: [
          { opcao: "Veiga", correto: false },
          { opcao: "Scarpa", correto: false },
          { opcao: "Dudu", correto: true },
          { opcao: "Rony", correto: false }
        ]
      },
      {
        pergunta: "Em que ano o Palmeiras conquistou seu primeiro Campeonato Brasileiro?",
        respostas: [
          { opcao: "1960", correto: false },
          { opcao: "1972", correto: false },
          { opcao: "1967", correto: true },
          { opcao: "1959", correto: false }
        ]
      },
      {
        pergunta: "Qual jogador ficou famoso por defender dois pênaltis na final da Copa do Brasil de 2015?",
        respostas: [
          { opcao: "Fernando Prass", correto: true },
          { opcao: "Weverton", correto: false },
          { opcao: "Bruno", correto: false },
          { opcao: "Deola", correto: false }
        ]
      },
      {
        pergunta: "Qual foi o primeiro título internacional oficial do Palmeiras?",
        respostas: [
          { opcao: "Copa Rio Internacional", correto: true },
          { opcao: "Libertadores", correto: false },
          { opcao: "Mercosul", correto: false },
          { opcao: "Supercopa Libertadores", correto: false }
        ]
      },
      {
        pergunta: "Quem era o camisa 9 do Palmeiras na final da Libertadores 1999?",
        respostas: [
          { opcao: "Evair", correto: false },
          { opcao: "Luizão", correto: false },
          { opcao: "Zinho", correto: false },
          { opcao: "Oséas", correto: true }
        ]
      },
      {
        pergunta: "Qual desses jogadores foi capitão do título brasileiro de 2016?",
        respostas: [
          { opcao: "Moises", correto: false },
          { opcao: "Dudu", correto: false },
          { opcao: "Zé Roberto", correto: true },
          { opcao: "Tchê Tchê", correto: false }
        ]
      },
      {
        pergunta: "Com qual time o Palmeiras foi rebaixado em 2012?",
        respostas: [
          { opcao: "Portuguesa", correto: true },
          { opcao: "Grêmio", correto: false },
          { opcao: "Cruzeiro", correto: false },
          { opcao: "Coritiba", correto: false }
        ]
      },
      {
        pergunta: "Qual foi o placar da final da Libertadores 2021 contra o Flamengo?",
        respostas: [ 
          { opcao: "1x0", correto: false },
          { opcao: "2x1", correto: true },
          { opcao: "3x1", correto: false },
          { opcao: "2x0", correto: false }
        ]
      },
      {
        pergunta: "Quem foi o presidente do Palmeiras na conquista da tríplice coroa de 2020?",
        respostas: [
          { opcao: "Maurício Galiotte", correto: true },
          { opcao: "Leila Pereira", correto: false },
          { opcao: "Mustafá Contursi", correto: false },
          { opcao: "Paulo Nobre", correto: false }
        ]
      },
      {
        pergunta: "Qual adversário foi eliminado pelo Palmeiras nas semifinais da Libertadores de 2020?",
        respostas: [
          { opcao: "Boca Juniors", correto: false },
          { opcao: "Santos", correto: false },
          { opcao: "Atlético-MG", correto: false },
          { opcao: "River Plate", correto: true }
        ]
      },
      {
        pergunta: "Quem marcou o gol do título brasileiro de 2018 contra o Vasco?",
        respostas: [
          { opcao: "Borja", correto: false },
          { opcao: "Deyverson", correto: true },
          { opcao: "Gustavo Gómez", correto: false },
          { opcao: "Bruno Henrique", correto: false }
        ]
      },
      {
        pergunta: "Quantos Paulistões o Palmeiras venceu até 2023?",
        respostas: [
          { opcao: "25", correto: false },
          { opcao: "24", correto: true },
          { opcao: "26", correto: false },
          { opcao: "23", correto: false }
        ]
      },
      {
        pergunta: "Qual jogador ficou famoso pelo bordão 'Aqui é Palmeiras' após título?",
        respostas: [
          { opcao: "Felipão", correto: false },
          { opcao: "Deyverson", correto: true },
          { opcao: "Weverton", correto: false },
          { opcao: "Danilo", correto: false }
        ]
      },
      {
        pergunta: "Qual título o Palmeiras venceu em cima do São Paulo em 2022?",
        respostas: [
          { opcao: "Paulistão", correto: true },
          { opcao: "Libertadores", correto: false },
          { opcao: "Brasileiro", correto: false },
          { opcao: "Supercopa", correto: false }
        ]
      },
      {
        pergunta: "Quem é o zagueiro paraguaio titular desde 2018?",
        respostas: [         
          { opcao: "Luan", correto: false },
          { opcao: "Murilo", correto: false },
          { opcao: "Henrique", correto: false },
          { opcao: "Gustavo Gómez", correto: true }
        ]
      },
      {
        pergunta: "Qual desses foi o patrocinador master do Palmeiras na decadá de 90?",
        respostas: [
          { opcao: "Parmalat", correto: true },
          { opcao: "Coca-Cola", correto: false },
          { opcao: "Fiat", correto: false },
          { opcao: "Samsung", correto: false }
        ]
      },
      {
        pergunta: "Qual era o apelido da lendária equipe do Palmeiras na década de 60?",
        respostas: [
          { opcao: "Academia de Futebol", correto: true },
          { opcao: "Furacão Verde", correto: false },
          { opcao: "Esquadrão Palestrino", correto: false },
          { opcao: "Verde Imortal", correto: false }
        ]
      },
      {
        pergunta: "Quem foi o técnico da Primeira Academia do Palmeiras nos anos 60?",
        respostas: [
          { opcao: "Vanderlei Luxemburgo", correto: false },
          { opcao: "Osvaldo Brandão", correto: true },
          { opcao: "Filpo Núñez", correto: false },
          { opcao: "Telê Santana", correto: false }
        ]
      },
      {
        pergunta: "Contra qual clube o Palmeiras venceu a Taça Brasil de 1967?",
        respostas: [
          { opcao: "Cruzeiro", correto: false },
          { opcao: "Grêmio", correto: false },
          { opcao: "Náutico", correto: true },
          { opcao: "Internacional", correto: false }
        ]
      },
      {
        pergunta: "Qual jogador foi símbolo da zaga palmeirense na década de 70?",
        respostas: [
          { opcao: "Luís Pereira", correto: true },
          { opcao: "Antônio Carlos", correto: false },
          { opcao: "Tonhão", correto: false },
          { opcao: "Djalma Santos", correto: false }
        ]
      },
      {
        pergunta: "Quantos títulos nacionais o Palmeiras conquistou entre 1960 e 1979?",
        respostas: [
          { opcao: "3", correto: false },
          { opcao: "4", correto: false },
          { opcao: "6", correto: true },
          { opcao: "5", correto: false }
        ]
      },
      {
        pergunta: "Qual meia armador foi destaque da Segunda Academia nos anos 70?",
        respostas: [
          { opcao: "Ademir da Guia", correto: true },
          { opcao: "Zinho", correto: false },
          { opcao: "Jorge Mendonça", correto: false },
          { opcao: "Dudu", correto: false }
        ]
      },
      {
        pergunta: "Em que ano o Palmeiras conquistou o Paulistão de forma invicta nos anos 70?",
        respostas: [
          { opcao: "1972", correto: false },
          { opcao: "1974", correto: false },
          { opcao: "1973", correto: true },
          { opcao: "1976", correto: false }
        ]
      },
      {
        pergunta: "Qual destes jogadores brilhou no Palmeiras na década de 80?",
        respostas: [
          { opcao: "Éder", correto: false },
          { opcao: "Mirandinha", correto: true },
          { opcao: "Evair", correto: false },
          { opcao: "Viola", correto: false }
        ]
      },
      {
        pergunta: "Qual treinador comandou o Palmeiras na reta final da década de 70 e início de 80?",
        respostas: [
          { opcao: "Telê Santana", correto: false },
          { opcao: "Rubens Minelli", correto: true },
          { opcao: "Luxemburgo", correto: false },
          { opcao: "Carlos Alberto Silva", correto: false }
        ]
      },
      {
        pergunta: "Qual foi o jejum de títulos vivido pelo Palmeiras entre 1976 e 1993?",
        respostas: [
          { opcao: "16 anos", correto: false },
          { opcao: "17 anos", correto: true },
          { opcao: "15 anos", correto: false },
          { opcao: "20 anos", correto: false }
        ]
      },
      {
        pergunta: "Qual era o nome original do Palmeiras quando foi fundado?",
        respostas: [
          { opcao: "Sociedade Esportiva Palmeiras", correto: false },
          { opcao: "Associação Atlética Palmeiras", correto: false },
          { opcao: "Palestra Italia", correto: true },
          { opcao: "Clube Atlético Palestrino", correto: false }
        ]
      },
      {
        pergunta: "Qual foi o principal motivo para o clube mudar de nome em 1942?",
        respostas: [
          { opcao: "Fusão com outro clube", correto: false },
          { opcao: "Pressão política durante a Segunda Guerra Mundial", correto: true },
          { opcao: "Nova administração", correto: false },
          { opcao: "Mudança de sede", correto: false }
        ]
      },
      {
        pergunta: "Em qual cidade o Palmeiras foi fundado?",
        respostas: [
          { opcao: "Campinas", correto: false },
          { opcao: "São Paulo", correto: true },
          { opcao: "Santos", correto: false },
          { opcao: "Turim", correto: false }
        ]
      },
      {
        pergunta: "Qual foi o único clube a vencer a Seleção Brasileira em uma partida oficial vestindo a camisa de um time?",
        respostas: [
          { opcao: "Corinthians", correto: false },
          { opcao: "Flamengo", correto: false },
          { opcao: "Palmeiras", correto: true },
          { opcao: "Santos", correto: false }
        ]
      },
      
    // ...
  ];
  
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  let indiceAtual = 0;
  let acertos = 0;
  
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
    const perguntaAtual = perguntas[indiceAtual];
    perguntaElemento.innerHTML = perguntaAtual.pergunta;
    respostasElemento.innerHTML = "";
  
    perguntaAtual.respostas.forEach(resposta => {
      const botao = document.createElement("button");
      botao.classList.add("botao-resposta");
      botao.innerText = resposta.opcao;
  
      botao.onclick = () => {
        if (resposta.correto) acertos++;
        indiceAtual++;
  
        if (indiceAtual < perguntas.length) {
          carregarPergunta();
        } else {
          finalizarJogo();
        }
      };
  
      respostasElemento.appendChild(botao);
    });
  }
  
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";
  }
  
  function reiniciarQuiz() {
    indiceAtual = 0;
    acertos = 0;
    conteudo.style.display = "flex";
    conteudoFinal.style.display = "none";
    carregarPergunta();
  }
  
  carregarPergunta();
  