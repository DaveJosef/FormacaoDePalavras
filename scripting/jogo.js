////////////////////////////////////////////////////
//                                                //
//  Jogo da Palavra Misteriosa                    //
//                                                //
////////////////////////////////////////////////////



console.log( 'Pronto!\n' );

var respostas = ["demasiado","plenitude","excelente"];
var letra, resposta=respostas[0];

var palavra = "";
palavraMisturada = resposta.split( "" );

//var palavraMisturada = ;

var botoes = document.querySelector( ".painel-palavra" ).children;

//botoes[0].classList.add = "botaopressionado";

function aleatorizar( palavra ){
    palavra.sort( randOrder );
}

function randOrder(){
    return .5 - Math.random();
}
aleatorizar( palavraMisturada );

/*
function alertaMeio(){
    console.log( 'Você clicou no meio!' );
}
*/
//FUNÇÃO PARA COLOCAR A PALAVRA EMBARALHADA NA GRADE
if(document.getElementById("novo") !== null){
    document.getElementById("novo").addEventListener("click", function verifica(){
    document.getElementById("letra1").value=palavraMisturada[0];
    document.getElementById("letra2").value=palavraMisturada[1];
    document.getElementById("letra3").value=palavraMisturada[2];
    document.getElementById("letra4").value=palavraMisturada[3];
    document.getElementById("letra5").value=palavraMisturada[4];
    document.getElementById("letra6").value=palavraMisturada[5];
    document.getElementById("letra7").value=palavraMisturada[6];
    document.getElementById("letra8").value=palavraMisturada[7];
    document.getElementById("letra9").value=palavraMisturada[8];

})}

function ApagarResposta(){
    var campo = document.querySelector( "#RESULTADO p" );
    
    campo.innerText = "";
}

function Assembly( elemento ){
    var letra = pegarValue( elemento );

    console.log( letra );
    //palavra = palavra.join("");
    palavra = juntarLetra( palavra, letra );

    var resposta = document.querySelector( '#RESULTADO p' );

    escreverTexto( resposta, palavra );

    verificarPalavra();
}

function pegarValue( elemento ){
    return elemento.value;
}
/*
-----------------------------
//(DAVID) COMENTEI A SEGUINTE FUNÇÃO PQ ESTAVA BUGANDO A GRADE, CASO VC ACHE QUE AGORA ELA SE TORNOU OBSOLETA DE FATO, TEM A LIBERDADE DE APAGAR
-----------------------------
function colocarValues(){
    var grade = document.querySelector( ".painel-palavra" ).children;

    var i = 0;
    var montagem = window.setInterval( function(){
        if( i == grade.length ){
            alert( "parow!" );
            window.clearInterval(montagem);
            return 0;
        }
        grade[i].value = palavraMisturada[i];
        i++;
    }, 2000 );
}
*/
function juntarLetra( palavra, letra ){
    palavra += letra;
    return palavra;
}

function escreverTexto( elemento, texto ){
    elemento.innerText = texto;
    //elemento.id = "RESULTADO";
}
/*
function apagarLetra( palavra ){
    palavra = palavra - palavra[ palavra.length - 1 ];
    return palavra;
}
*/
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
/*
var counter = 10;
var timer = setInterval(function() {
  if( counter <= 0 ) {
    clearInterval( timer );
  }
  
  console.log( counter-- );
}, 1000);

/*
function MontarCronometro( elemento ){
    var counter = 0;
    function myTimer() {
      var timer = setTimeout( function() {
        console.log( counter++ );
        if( counter < 11 ) {
          var texto = counter/60;
      
          texto = juntarLetra( texto, ':' );
          texto = juntarLetra( texto, counter );
          escreverTexto( elemento, texto );
          
          myTimer();
        }
      }, 1000 );
    }
      
    myTimer();
}
*/
/*
var palavra = "";
var tamanho = 5;

function juntarLetra( letra, palavra, tamanho ){
    if( palavra.length < tamanho ){
        palavra = palavra + letra;
        return 1;
    }
}

function pegarLetra( elemento ){
    return elemento.value;
}
*/
function impedirZoom(){
    var viewport = document.querySelector( 'meta[name="viewport"]' );
    viewport.content = 'user-scalable=NO, width=device-width, initial-scale=1.0';
}
var cont=0;
function verificarPalavra(){
    cont++;
    if( document.querySelector( '#RESULTADO p' ).innerText == resposta ){
        alert( "Você é demais! A palavra era " + resposta + "." );
    }
}
/*
function removerLetra( pai, posicao ){
    posicao--;
    var letra = '?';
    if( pai.hasChildNodes() ){
        letra = pai.removeChild( pai.childNodes[posicao] );
    }
    return letra;
}
*/
// Sobre o Painel
/*
function pegarLetraAleatoria( palavra ){
    let posicaoDaLetra = Math.random( 0, palavra.length );
    return palavra[ posicaoDaLetra ];
}

function montarPainel( parent, palavra, botoes ){

}
*/

function apagar( string, intervalo ){
    var temporizador = window.setInterval( function(){
        if( k == string.length ){
            window.clearInterval( temporizador );
        }
        k++;
    }, intervalo );
}

var cronometro = document.querySelector( ".cronometro" );

cronometro.onload = carregarCronometro( 1000 );


var botaoNova = document.querySelector( ".novapalavra" );

//botaoNova.onclick = colocarValues();


var jogo = document.querySelector( "#FUNDODOJOGO" );

jogo.onload = ApagarResposta();
