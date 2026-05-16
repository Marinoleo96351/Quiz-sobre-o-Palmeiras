# Refatoração e Novas Funcionalidades: Quiz Palmeiras

Atue como um Desenvolvedor Front-end Sênior. Abaixo estão os códigos do meu projeto "Quiz Palmeiras" (HTML, CSS e JavaScript puro). Preciso que você aplique boas práticas de Engenharia de Software no código existente e implemente novas funcionalidades com foco em uma boa experiência de UI/UX.

## Objetivos Principais

### 1. Sistema de Níveis (Ranks)
Implemente um sistema que classifique o jogador na tela final com base na quantidade de acertos (o quiz possui 60 perguntas). Exiba uma mensagem criativa e o "título" conquistado. Sugestão de divisão:
* **0 a 15 acertos:** Turista (Foi só passear no Allianz Parque)
* **16 a 35 acertos:** Torcedor de Sofá
* **36 a 50 acertos:** Sócio Avanti
* **51 a 59 acertos:** Ídolo Palestrino
* **60 acertos:** Terceira Academia (Gabaritou!)

### 2. Gabarito Detalhado no Final
Na tela final (`.fim`), além de mostrar a pontuação final e o nível alcançado, crie um sistema de gabarito.
* O jogador deve poder rolar a tela (ou clicar em um botão "Ver Gabarito") para revisar as 60 questões.
* Para cada questão, mostre: o texto da pergunta, qual foi a resposta selecionada pelo usuário (com indicador visual de acerto em verde ou erro em vermelho) e, caso ele tenha errado, qual era a alternativa correta.
* Lembre-se de criar variáveis no JavaScript para armazenar o histórico de respostas do usuário durante o jogo.

### 3. Melhorias de Código e Estrutura
* **HTML:** Remova a tag do jQuery, pois o script utiliza exclusivamente Vanilla JS. Melhore a semântica se necessário.
* **CSS:** Crie os estilos necessários para acomodar o gabarito de forma responsiva, moderna e alinhada à paleta de cores do clube.
* **JavaScript:** Refatore a lógica. Atualmente as variáveis de estado (`indiceAtual`, `acertos`) estão soltas. Tente encapsular a lógica do jogo para evitar poluição do escopo global.

---
**Meus códigos atuais:**

[COLE SEU HTML AQUI]
[COLE SEU CSS AQUI]
[COLE SEU JS AQUI]