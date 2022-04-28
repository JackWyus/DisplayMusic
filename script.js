document.querySelector('.botao-pause').style.display = 'none';

// Variáveis

 //a Array vai armazenar objetos, um objeto serve para vc armazenar diversos tipos de dados dentro de uma unica estrutura, tipo, criar um objeto que armazene o nome de um usuário,idade,sexo..
 //cada música vai ser um objeto diferente
var musicas = [
    {titulo:'Lana (Prod.MarcusMaia)',artista:'K a m a i t a c h i', src:'musicas/Kamaitachi - Lana.mp3', img:'imagens/Lana.png'},    //as chaves representa um objeto, ele possui a propriedade titulo e o valor dessa propriedade é uma string com nome 'slowed'
    {titulo:'Ninth Gate (Slowed + Reverb)',artista:'VIRQUISITE', src:'musicas/ninthgate.mp3', img:'imagens/evangelion.png'},
    {titulo:'Pegando Leve (O Terno cover)',artista:'porfírio', src:'musicas/porfírio - Pegando Leve (O Terno cover).mp3', img:'imagens/Pegando Leve.png'}
];

var musica = document.querySelector('audio');
var duracaoMusica = document.querySelector('.tempo_fim');

/*Vamos criar um conjunto de variáveis que vai receber a imagem,nome da música,nome do artista e vamos colocar em uma lista(array)*/
var imagem = document.querySelector('img');
var nomeMusica = document.querySelector('.descricao h2');
var nomeArtista = document.querySelector('.descricao i');
var indexMusica = 0;

// Eventos

renderizarMusica(indexMusica);// Vamos chamar a função de renderizarMusica logo no início, ele vai carregar todas as informações pertinentes ao primeiro objeto que está na posição

document.querySelector('.botao-play').addEventListener('click', tocarMusica);/*Vamos selecioar a class botao-play e adicionamos um evento do tipo click e queremos que o O javaScript atráves de uma função dê Play na Música*/
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atuzaliarBarra); /*Vamos criar um evento para verificar se a música está tocando e esse evento se chama 'timeupdate', equanto a música estiver tocando o que queremos que aconteça é que a barra acompanhe o tempo da música,vamos criar uma função para isso */
window.onload = duration;



document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;

    };
    let barra = document.querySelector('progress');
    barra.style.width = 0;
    renderizarMusica(indexMusica);
})

document.querySelector('.proxima').addEventListener('click', () =>{
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;
    };
    let barra = document.querySelector('progress');
    barra.style.width = 0;
    renderizarMusica(indexMusica);
})

// a função renderiza música vai fazer, ela vai trocar a imagem,o titulo da música e a música...

//() =>{} isso se chama função anonima 

// Funções

function tocarMusica(){
    musica.play(); /*Vamos pegar a variável que criamos no início e colocarmos a tag "play, todas vez que o evento for acionado, ele tocará a música"*/ 

    /*Após iniciarmos a música queremos que o botão pause que estava escondido fica vísivel e pra isso utilizamos selecionamos o elemento html e usamos o .styl para alterar */
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function duration(){
    duracaoMusica.textContent = segundosParaminutos(Math.floor(musica.duration));
}

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)// estamos substituindo o atributo src original da música da tag audiom pelo atributo src que está dentro do array músicas
    //A primeira coisa que essa função vai fazer quando ela for chamada, é trocar a música que está sendo tocada.
    //como essas músicas demoram um pouco para carregar, vamos add um evento para dizer que, quando a música terminar de carregar no html,execute esses códigos.
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaminutos(Math.floor(musica.duration));
    });
}

function atuzaliarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let tempoDecorrido = document.querySelector('.tempo_inicio');
    tempoDecorrido.textContent = segundosParaminutos(Math.floor(musica.currentTime));

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

function segundosParaminutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
/*


Vamos fazer um contador para o Campo de Minutos.

Vamos pensar assim:

Vamos supor que o tempo em segundos é igual a 40s

40s ainda não deu 1m,pois 1m é igual a 60s

Se a gente dividir o 40s/60s
vamos obter 0.666s

vamos apróximar ele para baixo para ele ser logo zero

math.floor(40/60);
0

A nossa idéia é criar um código que altere o elemento html no campo referente a minutos, ou seja, toda vez que os segundos for menor q 60, ele deve ser igual a zera, pois ainda não atingiu o valor mínimo para ser considerado minutos.
a lógica é a mesma para qualquer número abaixo de 60s


Campos do segundos

vamos usar o operador de resto da divisão inteira %

quando for 1%60
1

quando for 20%60
20

quando for 60%60
0

sempre que o valor em segundos for multiplo de 60 essa contagem volta pro zero, isso vai represar o campo de segundos quando ele for zerado

por exemplo quando for 2m
120%60
0s


a função vai retornar o tempo formatado no finaç 
*/
}