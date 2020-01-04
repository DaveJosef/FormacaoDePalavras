////////////////////////////////////////////////////
//                                                //
//  Jogo da Palavra Misteriosa                    //
//                                                //
////////////////////////////////////////////////////



//console.log( 'Pronto!\n' );

//var letra, resposta = "ACBFDEIHG";

//var palavra = "";
//palavraMisturada = resposta.split( "" );

//var palavraMisturada = ;

//var botoes = document.querySelector( ".painel-palavra" ).children;

//botoes[0].classList.add = "botaopressionado";

const menu = {
    elemento: document.querySelector( ".guia" )
};
// objeto que contem o elemento referente ao menu do site

const resposta = {
    elemento: document.querySelector( ".painel-resposta" ),
    vocabulario: [
        "palavras",
        "que",
        "a",
        "gente",
        "escolher"
    ],
    aleatorizar: function( palavra ){
        palavra.sort( function randOrder(){
            return .5 - Math.random();
        } );
    },
    verificarPalavra: function(){
        if( document.querySelector( '#RESULTADO p' ).innerText == resposta ){
            alert( "Você é demais! A palavra era " + resposta + "." );
        }
        else{
            alert( "Ainda não :/" );
        }
    }
};
// objeto responsavel pela manipulacao da palavra

const relogio = {
    elemento: document.querySelector( ".cronometro" ),
    carregarCronometro: function( ms, limiteM, limiteS ){
        var m = 0;
        var s = 0;
    
        var cronometro = document.querySelector( ".cronometro h3" );
        if( cronometro == null ){
            return "ERROR";
        }
    
        var temporizador = window.setInterval( function(){
            if( ( m == limiteM ) && ( s == limiteS ) ){
                alert( "TEMPO!" );
            }
            if( s >= 60 ){
                m++;
                s = 0;
            }
            escreverTexto( cronometro, m + ":" + s );
            s++;
        }, ms );
    }
};
// objeto com metodos do reloginho

const controle = {
    elemento: document.querySelector( "#FUNDODOJOGO" ),
    palavra: "",
    //palavraMisturada: resposta.aleatorizar( resposta.vocabulario[0].split( "" ) ),
    Assembly: function( elemento ){
        var letra = pegarValue( elemento );
    
        console.log( letra );
        
        palavra = juntarLetra( palavra, letra );
    
        var resposta = document.querySelector( '#RESULTADO p' );
    
        escreverTexto( resposta, palavra );
    
        verificarPalavra();
    },
    pegarValue: function( elemento ){
        return elemento.value;
    },
    colocarValues: function( ms ){
        var grade = document.querySelector( ".painel-palavra" ).children;
    
        var i = 0;
        var montagem = window.setInterval( function(){
            if( i == grade.length ){
                alert( "parow!" );
                window.clearInterval(montagem);
                return 0;
            }
            grade[i].value = controle.vocabulario[0].split( "" )[i];
            i++;
        }, ms );
    },
    juntarLetra: function( palavra, letra ){
        palavra += letra;
        return palavra;
    },
    escreverTexto: function( elemento, texto ){
        elemento.innerText = texto;
    },
    apagarLetra: function( palavra ){
        palavra = palavra.substring( 0, ( palavra.length - 1 ) );
        return palavra;
    },
    impedirZoom: function(){
        var viewport = document.querySelector( 'meta[name="viewport"]' );
        viewport.content = 'user-scalable=NO, width=device-width, initial-scale=1.0';
    }
};
// objeto com tudo relacionado ao controle principal do site

/*
function randOrder(){
    return ;
}
aleatorizar( palavraMisturada );
*/

/*
function alertaMeio(){
    console.log( 'Você clicou no meio!' );
}
*/
/*
function Assembly( elemento ){
    var letra = pegarValue( elemento );

    console.log( letra );
    //palavra = palavra.join("");
    palavra = juntarLetra( palavra, letra );

    var resposta = document.querySelector( '#RESULTADO p' );

    escreverTexto( resposta, palavra );

    verificarPalavra();
}
*/
/*
function pegarValue( elemento ){
    return elemento.value;
}
*/
/*
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
/*
function juntarLetra( palavra, letra ){
    palavra += letra;
    return palavra;
}
*/
/*
function escreverTexto( elemento, texto ){
    elemento.innerText = texto;
    //elemento.id = "RESULTADO";
}
*/
/*
function apagarLetra( palavra ){
    palavra = palavra.substring( 0, ( palavra.length - 1 ) );
    return palavra;
}
*/
/*
function carregarCronometro( ms, limiteM, limiteS ){
    var m = 0;
    var s = 0;

    var cronometro = document.querySelector( ".cronometro h3" );
    if( cronometro == null ){
        return "ERROR";
    }

    var temporizador = window.setInterval( function(){
        if( ( m == limiteM ) && ( s == limiteS ) ){
            alert( "TEMPO!" );
        }
        if( s >= 60 ){
            m++;
            s = 0;
        }
        escreverTexto( cronometro, m + ":" + s );
        s++;
    }, ms );
}
*/
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
/*
function impedirZoom(){
    var viewport = document.querySelector( 'meta[name="viewport"]' );
    viewport.content = 'user-scalable=NO, width=device-width, initial-scale=1.0';
}
*/
/*
function verificarPalavra(){
    if( document.querySelector( '#RESULTADO p' ).innerText == resposta ){
        alert( "Você é demais! A palavra era " + resposta + "." );
    }
    else{
        alert( "Ainda não :/" );
    }
}
*/
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
/*
function apagar( string, intervalo ){
    var temporizador = window.setInterval( function(){
        if( k == string.length ){
            window.clearInterval( temporizador );
        }
        k++;
    }, intervalo );
}
*/

//var cronometro = document.querySelector( ".cronometro" );

//cronometro.onload = carregarCronometro( 1000, 1, 0 );


//var botaoNova = document.querySelector( ".novapalavra" );

//botaoNova.onclick = colocarValues();


//var botaoRepetir = document.querySelector( ".apagarresposta" );


//var resposta = document.querySelector( '#RESULTADO p' );
//botaoRepetir.onclick = apagarLetra( resposta );

document.onload = controle.impedirZoom;
//controle.elemento.children[]

/*
if( painelCarregado == true ){
    // codigo de formacao aqui
}
*/

