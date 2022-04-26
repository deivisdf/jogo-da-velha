var jogador,vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
mudarJogador('X');
function escolherQuadrado(id){

    if(vencedor !== null){
       return;
    }
    
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if(jogador ==='X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaQuadrado(quadrado1,quadrado2,quadrado3)){
         mudaCorQuadrado(quadrado1,quadrado2,quadrado3);
         mudaVencedor(quadrado1);
         return;
    } 
    
    if(checaQuadrado(quadrado4,quadrado5,quadrado6)){
        mudaCorQuadrado(quadrado4,quadrado5,quadrado6);
        mudaVencedor(quadrado4);
        return;
    }

    if(checaQuadrado(quadrado7,quadrado8,quadrado9)){
        mudaCorQuadrado(quadrado7,quadrado8,quadrado9);
        mudaVencedor(quadrado7);
        return;
    }

    if(checaQuadrado(quadrado1,quadrado4,quadrado7)){
        mudaCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudaVencedor(quadrado1);
        return;
    }

    if(checaQuadrado(quadrado2,quadrado5,quadrado8)){
        mudaCorQuadrado(quadrado2,quadrado5,quadrado8);
        mudaVencedor(quadrado2);
        return;
    }

    if(checaQuadrado(quadrado3,quadrado6,quadrado9)){
        mudaCorQuadrado(quadrado3,quadrado6,quadrado9);
        mudaVencedor(quadrado3);
        return;
    }

    if(checaQuadrado(quadrado1,quadrado5,quadrado9)){
        mudaCorQuadrado(quadrado1,quadrado5,quadrado9);
        mudaVencedor(quadrado1);
        return;
    }

    if(checaQuadrado(quadrado3,quadrado5,quadrado7)){
        mudaCorQuadrado(quadrado3,quadrado5,quadrado7);
        mudaVencedor(quadrado3);
        
    }


}

function mudaVencedor(q){
    vencedor = q.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function checaQuadrado(q1,q2,q3){
  var eigual = false;

  if( q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
    eigual = true;
  }

  return eigual;

}

function mudaCorQuadrado(q1,q2,q3){
    q1.style.backgroundColor = '#0F0';
    q2.style.backgroundColor = '#0F0';
    q3.style.backgroundColor = '#0F0';

}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

function reiniciar(){
   vencedor = null;
   vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var q = document.getElementById(i);
        q.style.backgroundColor = '#eee';
        q.style.color = '#eee';
        q.innerHTML = '-';
       
        
    }

    mudarJogador('X');
}