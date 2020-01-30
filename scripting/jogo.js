/////////////////////////////////////
//                                //
//  Jogo da Palavra Misteriosa   //
//                              //
/////////////////////////////////

// aleatoriza na grade a palavra, verifica 

var cont=0;

var respostas = [];
var letra, resposta;
var intervalo;
var segundos = 1;
var minutos = 0;
var ranking = [];

 palavra = "";
 let palavraMisturada

function todoArray(indiceArray){
    respostas = ["programar","paragrafo","gargalhar","tecnologo","confiança","plenitude"];
    letra, resposta=respostas[indiceArray];

    palavra = "";  

    palavraMisturada = resposta.split( "" );

    aleatorizar( palavraMisturada );
    pararTempo();
    cronometro(); 
    cont += 1 
}

function ArrayDificeis(indiceArray){
    respostas = ["blasfemia","concepçao","mesquinho","juramento","justiçada","excelente"];
    letra, resposta=respostas[indiceArray];

    palavra = "";  

    palavraMisturada = resposta.split( "" );

    aleatorizar( palavraMisturada );
    pararTempo();
    cronometro(); 
    cont += 1 
}

function aleatorizar( palavra ){
    palavra.sort( randOrder );
}

// A funcao abaixo coloca as letras da resposta embaralhada na grade
function randOrder(){
    return .5 - Math.random();
}

let contarArray=0;

novo.onclick =function verifica(){
    todoArray(contarArray);
    document.getElementById("letra1").value=palavraMisturada[0];
    document.getElementById("letra2").value=palavraMisturada[1];
    document.getElementById("letra3").value=palavraMisturada[2];
    document.getElementById("letra4").value=palavraMisturada[3];
    document.getElementById("letra5").value=palavraMisturada[4];
    document.getElementById("letra6").value=palavraMisturada[5];
    document.getElementById("letra7").value=palavraMisturada[6];
    document.getElementById("letra8").value=palavraMisturada[7];
    document.getElementById("letra9").value=palavraMisturada[8];
    
    contarArray+=1;
}

//PALAVRAS DIFÍCEIS




let contaArray=0;
dificil.onclick=function verifica(){
    
    ArrayDificeis(contaArray);
    document.getElementById("letra1").value=palavraMisturada[0];
    document.getElementById("letra2").value=palavraMisturada[1];
    document.getElementById("letra3").value=palavraMisturada[2];
    document.getElementById("letra4").value=palavraMisturada[3];
    document.getElementById("letra5").value=palavraMisturada[4];
    document.getElementById("letra6").value=palavraMisturada[5];
    document.getElementById("letra7").value=palavraMisturada[6];
    document.getElementById("letra8").value=palavraMisturada[7];
    document.getElementById("letra9").value=palavraMisturada[8];
    
    contaArray+=1;
    contarArray+=1;
}
// Dispara uma mensagem de vitoria quando a palavra confere com a resposta
let contResposta=0;
function verificarPalavra(contresposta){
    if( document.querySelector( '#RESULTADO p' ).innerText == resposta ){
        insereRanking(minutos, segundos);
        alert( "Você é demais! A palavra era " + resposta + ".");
        pararTempo();
        campo=document.querySelector(" #RESULTADO p");
        palavra="";
        escreverTexto(campo, palavra);
        
        if(contaArray==5){
            alert("Fim de Jogo");
        }else if(contarArray==5){
            alert("Fim de Jogo")
        }
    }else if(contresposta==9){
        alert("Você não acertou a palavra. Por favor, click em repetir caso queira tentar novamente!" )
        if(contaArray==5){
            alert("Fim de Jogo");
        }else if(contarArray==5){
            alert("Fim de Jogo")
        }
    }
}

//Função do cronometro e de Parar o cronometro

function cronometro() {
	
	segundos = 1;
	minutos = 0;
	intervalo = window.setInterval(function(){

		if(segundos == 60){ 
            minutos++;
            segundos = 0; 
		}
		if(minutos == 60){ 
            parar();
            alert("O tempo limite foi atingido!!!!");
		}

		if(segundos < 10){
            document.getElementById("segundo").innerHTML = "0" + segundos + "s"; 
        }
		else{ 
            document.getElementById("segundo").innerHTML = segundos + "s";
        }
		if(minutos < 10){ document.getElementById("minuto").innerHTML = "0" + minutos + "m";
        }   
        else{
            document.getElementById("minuto").innerHTML = minutos + "m";	
        }
		segundos++;

	},1000);
}
function pararTempo(){
    window.clearInterval(intervalo);
}


//mostrar palavra.
mostrar.onclick= function mostrarPalavra(){
    if(cont != 0){
        pararTempo(); 
        var campo = document.querySelector( "#RESULTADO p" );
        palavra= "";
        escreverTexto(campo, resposta);
    }
}


// Funcao para deixar a resposta em branco
repetir.onclick=function ApagarResposta(){
    if(cont != 0){
        var campo = document.querySelector( "#RESULTADO p" );
        palavra= "";
        escreverTexto( campo, palavra );
        contResposta=0;
    }
}

// Eu fiz essa funcao em ingles, mas ela serve para basicamente montar a resposta ao longo dos cliques na grade
function Assembly( elemento ){
    var letra = pegarValue( elemento );

    console.log( letra );
    palavra = juntarLetra( palavra, letra );

    var resposta = document.querySelector( '#RESULTADO p' );

    escreverTexto( resposta, palavra );
    contResposta+=1
    verificarPalavra(contResposta);
    
}


// Pega a propriedade ou atributo "value" de um botao que ela recebe como parametro
function pegarValue( elemento ){
    return elemento.value;
}


// Retorna uma palavra acrescida da letra

function juntarLetra( palavra, letra ){
    palavra += letra;
    return palavra;
}

// Escreve o texto em um elemento
function escreverTexto( elemento, texto ){
    elemento.innerText = texto;
}



//script do botão de ajuda

btnajuda.onclick = function ajuda(){
    var help= confirm("Esse jogo tem o obejetivo de possibilitar o jogador realizar a junção das letras exibidas na tabela para a formação de diversas palavras.");
    if(help==true){
        var help2= confirm("Ao clicar no botão novo será exibido as letras que deverão ser escolhidas para formar as palavras.");
        if(help2==true){
            help3= confirm("Ao clicar no botão repetir você poderá repetir a palavra.");
            if(help3==true){
                help4= confirm("Ao clicar no botão mostrar será exibido a palavra secreta que estava na tabela.")
                if(help4==true){
                    var help5= confirm("Ao marcar a opção difícil as palavras a serem formadas serão de uma complexidade maior.")
                    if(help5==true) alert("Além disso o jogo conta com o cronómetro marcando o tempo de cada jogada e um sistema de ranking que mostra o melhor tempo dos melhores jogadores.");
                }
            }
        }
    }
}

/* Quando o jogo é rodado no celular, o jogador pode decidir ser meio doido e clicar repetidamente na tela e dar zoom direto. 
Isso dai ia acabar com a experiencia do jogo, entao quis impedir o zoom com essa funcao*/

function impedirZoom(){
    var viewport = document.querySelector( 'meta[name="viewport"]' );
    viewport.content = 'user-scalable=NO, width=device-width, initial-scale=1.0';
}

// Insere o tempo em minutos e segundos no array
function insereRanking(min, seg){
    var tempo = 60 * min + seg;

    ranking.push(tempo);
    ordenaRanking();
}

// método para ordenar ranking
function ordenaRanking(){
    for (let i = 1; i < ranking.length; i++) {
      let j = i - 1
      let tmp = ranking[i]
      while (j >= 0 && ranking[j] > tmp) {
        ranking[j + 1] = ranking[j]
        j--
      }
      ranking[j+1] = tmp
    }

  }

// Exibe o ranking das três melhores pontuações

function exibeRanking(){
    var pri = document.getElementById('first');
    var seg = document.getElementById('second');
    var ter = document.getElementById('third');

    var min, seg; 

    if(ranking[0] != undefined){
        pri.innerText = ranking[0] + ' s';
    }    
    if(ranking[1] != undefined){
        seg.innerText = ranking[1] + ' s';
    }
    if(ranking[2] != undefined){
        ter.innerText = ranking[2] + ' s';
    }

}
