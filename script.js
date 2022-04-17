document.querySelector('.botao-pause').style.display = 'none';


/* Vamos criar uma variável que vai ser a nossa música, a música que está tocando no momento*/

var musica = document.querySelector('audio');


// Eventos


    /*Vamos selecioar a class botao-play e adicionamos um evento do tipo click e queremos que o O javaScript atráves de uma função dê Play na Música*/
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

    /*Vamos criar um evento para verificar se a música está tocando e esse evento se chama 'timeupdate', equanto a música estiver tocando o que queremos que aconteça é que a barra acompanhe o tempo da música,vamos criar uma função para isso */
musica.addEventListener('timeupdate', atuzaliarBarra)


// Funções
function tocarMusica(){
    /*Vamos pegar a variável que criamos no início e colocarmos a tag "play, todas vez que o evento for acionado, ele tocará a música"*/ 
    musica.play();

    /*Após iniciarmos a música queremos que o botão pause que estava escondido fica vísivel e pra isso utilizamos selecionamos o elemento html e usamos o .styl para alterar */
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atuzaliarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    console.log(barra);

    let tempoDecorrido = document.querySelector('.tempo_inicio');
    tempoDecorrido.innerHTML = Math.floor((musica.currentTime));
    /*  

Resumo;

   > 1º Vamos criar uma função responsável por atualizar a Barra de acordo com o andar da música.
   > 2º Vamos criar uma variável especifica que vai receber/alterar o valor da tag html 'progress'.
   > 3º Vamos selecionar essa variável e alterar o seu estilo referente a sua largura dinamicamente, ou seja, de acordo com o andar da música.
   > 4º Atráves da seguinte lógica matemática -> music.currentTime / musica.duration vamos obter em decimal o quanto a música já carregou e pela lógica matemática, podemos transformar qualquer decimal em porcentagem multiplicando por 100.
   > 5º Mas é necessário adicionarmos o sinal de "%" para alterar o width do css(pois está em porcentagem), usamos então + '%' para fazer uma concatenação e o sinal em aspas.
   
   Extra > Vamos usar o Math.floor() para arredondar para baixo o valor em porcentagem para não ficar muito quebrado.
*/

/*
lógica referente ao tempo da música e a largura da barra;

    Início da Música = 0%;  widht = 0%;  
    Meio da Música = 50%;   widht = 50%;
    Fim da Música = 100%    widht = 100%;

Propriedades JavaScript;

    musica.duration a propriedade duration retorna a duração da música em segundos.
    musica.currentTime ele vai nos retornar o estado atual da música em segundos.

Exemplo;
    Math.floor() é usado para arrendondar um elemento para baixo.
    musica.duration = 343 segundos - tempo total
    musica.currentTime = 82segundos - tempo atual da música

Lógica resultante de cada ação das propriedades em JavaScript;

    musica.duration - musica.currenTime = vamos obter em segundos a quantidade que falta para terminar a música.
    music.currentTime / musica.duration = vamos obter em decimal a quantidade da música já carregada.
*/

}















