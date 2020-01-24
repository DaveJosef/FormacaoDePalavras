/////////////////////////////////////
//                                //
//  Jogo da Palavra Misteriosa   //
//                              //
/////////////////////////////////

// aleatoriza na grade a palavra, verifica 

var respostas = ["demasiado","plenitude","excelente"];
var letra, resposta=respostas[0];

var palavra = "";
var palavraMisturada = resposta.split( "" );

function aleatorizar( palavra ){
    palavra.sort( randOrder );
}
// A funcao abaixo coloca as letras da resposta embaralhada na grade
function randOrder(){
    return .5 - Math.random();
}
aleatorizar( palavraMisturada );

novo.onclick =function verifica(){
    document.getElementById("letra1").value=palavraMisturada[0];
    document.getElementById("letra2").value=palavraMisturada[1];
    document.getElementById("letra3").value=palavraMisturada[2];
    document.getElementById("letra4").value=palavraMisturada[3];
    document.getElementById("letra5").value=palavraMisturada[4];
    document.getElementById("letra6").value=palavraMisturada[5];
    document.getElementById("letra7").value=palavraMisturada[6];
    document.getElementById("letra8").value=palavraMisturada[7];
    document.getElementById("letra9").value=palavraMisturada[8];
    cronometro();
}

// Dispara uma mensagem de vitoria quando a palavra confere com a resposta
function verificarPalavra(){
    if( document.querySelector( '#RESULTADO p' ).innerText == resposta ){
        alert( "Você é demais! A palavra era " + resposta + "." );
        pararTempo();
    }
}


//Função do cronometro e de Parar o cronometro

var intervalo;
function cronometro() {
	//document.getElementById('novo').style.display = "none";
	var segundos = 1;
	var minutos = 0;
	intervalo = window.setInterval(function(){
		if (segundos == 60){ 
            minutos++;
            segundos = 0; 
		}
		if (minutos == 60){ 
            parar();
            alert("O tempo limite foi atingido!!!!");
		}

		if (segundos < 10) document.getElementById("segundo").innerHTML = "0" + segundos + "s"; 
		else document.getElementById("segundo").innerHTML = segundos + "s";

		if (minutos < 10) document.getElementById("minuto").innerHTML = "0" + minutos + "m";
		else document.getElementById("minuto").innerHTML = minutos + "m";	
			
		segundos++;

	},1000);
}
function pararTempo(){
    window.clearInterval(intervalo);
}

//mostrar palavra.

mostrar.onclick= function mostrarPalavra(){
    alert("A resposta certa é " + resposta);
}

function carregarCronometro( ms ){
    var m = 0;
    var s = 0;

    var cronometro = document.querySelector( ".cronometro h3" );
    if( cronometro == null ){
        return "ERROR";
    }

    var temporizador = window.setInterval( function(){
        if( s >= 60 ){
            m++;
            s = 0;
        }
        escreverTexto( cronometro, m + ":" + s );
        s++;
    }, ms );
}


// Funcao para deixar a resposta em branco
repetir.onclick=function ApagarResposta(){
    var campo = document.querySelector( "#RESULTADO p" );
    palavra= "";
    escreverTexto( campo, palavra );
}


function Assembly( elemento ){
    var letra = pegarValue( elemento );

    console.log( letra );
    palavra = juntarLetra( palavra, letra );

    var resposta = document.querySelector( '#RESULTADO p' );

    escreverTexto( resposta, palavra );

    verificarPalavra();
}
// Eu fiz essa funcao em ingles, mas ela serve para basicamente montar a resposta ao longo dos cliques na grade


function pegarValue( elemento ){
    return elemento.value;
}
// Pega a propriedade ou atributo "value" de um botao que ela recebe como parametro


function juntarLetra( palavra, letra ){
    palavra += letra;
    return palavra;
}
// Retorna uma palavra acrescida da letra


function escreverTexto( elemento, texto ){
    elemento.innerText = texto;
}
// Escreve o texto em um elemento


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


function impedirZoom(){
    var viewport = document.querySelector( 'meta[name="viewport"]' );
    viewport.content = 'user-scalable=NO, width=device-width, initial-scale=1.0';
}
/* Quando o jogo é rodado no celular, o jogador pode decidir ser meio doido e clicar repetidamente na tela e dar zoom direto. 
Isso dai ia acabar com a experiencia do jogo, entao quis impedir o zoom com essa funcao*/