////////////////////////////////////////////////////
//                                                //
//  Jogo da Palavra Misteriosa                    //
//                                                //
////////////////////////////////////////////////////



var respostas = ["demasiado","plenitude","excelente"];
var letra, resposta=respostas[0];

var palavra = "";
var palavraMisturada = resposta.split( "" );

//
function aleatorizar( palavra ){
    palavra.sort( randOrder );
}

function randOrder(){
    return .5 - Math.random();
}
aleatorizar( palavraMisturada );
// A funcao acima aleatoriza a palavra

//
function verifica(){
    document.getElementById("letra1").value=palavraMisturada[0];
    document.getElementById("letra2").value=palavraMisturada[1];
    document.getElementById("letra3").value=palavraMisturada[2];
    document.getElementById("letra4").value=palavraMisturada[3];
    document.getElementById("letra5").value=palavraMisturada[4];
    document.getElementById("letra6").value=palavraMisturada[5];
    document.getElementById("letra7").value=palavraMisturada[6];
    document.getElementById("letra8").value=palavraMisturada[7];
    document.getElementById("letra9").value=palavraMisturada[8];

}
// A funcao acima coloca as letras da resposta embaralhada na grade


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
function iniciarJogo(){
    // Jennifer
    verifica();
    
    // David
    carregarCronometro( 1000 /* Intervalo em milisegundos para mudar o valor do cronometro. *//* );
}


novo.onclick = iniciarJogo;
*/ //Funcao com bug, mas necessária para reiniciar o jogo

//
function ApagarResposta(){
    var campo = document.querySelector( "#RESULTADO p" );
    
    campo.innerText = "";
}
// Funcao para deixar a resposta em branco

function Assembly( elemento ){
    var letra = pegarValue( elemento );

    console.log( letra );
    palavra = juntarLetra( palavra, letra );

    var resposta = document.querySelector( '#RESULTADO p' );

    escreverTexto( resposta, palavra );

    verificarPalavra();
}
// Eu fiz essa funcao em ingles, mas ela serve para basicamente montar a resposta ao longo dos cliques na grade

//
function pegarValue( elemento ){
    return elemento.value;
}
// Pega a propriedade ou atributo "value" de um botao que ela recebe como parametro

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

//
function juntarLetra( palavra, letra ){
    palavra += letra;
    return palavra;
}
// Retorna uma palavra acrescida da letra

//
function escreverTexto( elemento, texto ){
    elemento.innerText = texto;
}
// Escreve o texto em um elemento

/*
function apagarLetra( palavra ){
    palavra = palavra - palavra[ palavra.length - 1 ];
    return palavra;
}
*/ //Era para apagar a ultima letra da resposta. Se alguem quiser implementar

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
*/ //Exemplo de como funciona a funcao setTimeout. Se alguem quiser brincar com ela


//
function impedirZoom(){
    var viewport = document.querySelector( 'meta[name="viewport"]' );
    viewport.content = 'user-scalable=NO, width=device-width, initial-scale=1.0';
}
// Quando o jogo é rodado no celular, o jogador pode decidir ser meio doido e clicar repetidamente na tela e dar zoom direto. Isso dai ia acabar com a experiencia do jogo, entao quis impedir o zoom com essa funcao

//
function verificarPalavra(){
    if( document.querySelector( '#RESULTADO p' ).innerText == resposta ){
        alert( "Você é demais! A palavra era " + resposta + "." );
    }
}
// Dispara uma mensagem de vitoria quando a palavra confere com a resposta

/*
function removerLetra( pai, posicao ){
    posicao--;
    var letra = '?';
    if( pai.hasChildNodes() ){
        letra = pai.removeChild( pai.childNodes[posicao] );
    }
    return letra;
}
*/ //Queria mexer com isso ainda. Era pra remover os botoes da grade ao longo dos cliques do jogador e retornar os mesmos


//
function apagar( string, intervalo ){
    var temporizador = window.setInterval( function(){
        if( k == string.length ){
            window.clearInterval( temporizador );
        }
        k++;
    }, intervalo );
}
// Essa funcao pode servir para apagar as letras da resposta em camera lenta, mas ainda ta bugada



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
