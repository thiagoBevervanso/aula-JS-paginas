

function alerta(){
    alert("Alerta");
}

function consoleAlerta(){
    console.log("Alerta");
}

function soma()
{
    x=eval (document.prova.c1.value)+eval(document.prova.c2.value)+eval(document.prova.c3.value);
    document.prova.c4.value=x;
}

function multiplica()
{
    y=eval(document.prova.c1.value)*eval(document.prova.c2.value)*eval(document.prova.c3.value);
    document.prova.c4.value=y;
}

function campo_obrigatorio(x)
    {
        if(x.value=="")
        {
            alert("O campo "+ x.name + " não pode ficar em branco")
        }
    }
function abre1()
{
    window.open("https://www.google.com");
}
function abre2()
{
    window.open("https://www.google.com", "simples", "width=350", "heigh=400");
}
function abre3()
{
    window.open()
    {window.open("https://www.google.com", "simples", "menubar,scrollbars,width=300,height=200");
}
}
function recuperarPS(){
    var paragrafos = document.getElementsByTagName("P");
    var i=0;
    while (i<paragrafos.length)
    {
        i++;
        alert(paragrafos[i].innerHTML);

    }
}

function definircores(){
var paragrafos = document.getElementsByTagName("p");
var cores = ["blue", "red", "green", "yellow"];
var i;
for(i=0;i<paragrafos.length;i++){
    paragrafos[i].style.backgroundColor = cores[i];
}
}
function aparecer(){
    var paragrafos = document.getElementsByClassName("oculto");
    var i;
    for(i=0; i<paragrafos.length; i++){
        paragrafos[i].style.display = "block";
    }
}function remover(){
    var paragrafos = document.getElementsByClassName("oculto");
    var i;
    for(i=0; i<paragrafos.length; i++){
        paragrafos[i].style.display = "none";
    }
}
function encontrar(){
    var botao = document.querySelector("[type=button]");
    botao.style.color = "red"
     
}

function Armazem(){
    var campos = document.getElementsByTagName("input");
    var i;
    var novalinha = document.createElement("tr");
    for(i=0; i<campos.length; i++){
        var novacoluna= document.createElement("td");
        novacoluna.innerHTML=campos[i].value;
        novalinha.appendChild(novacoluna);
    }
    var tabela =document.getElementById("tabela");
    tabela.appendChild(novalinha);
}
    function LivroCores(){
        var L = document.getElementsByClassName("livros");
        var P = document.getElementsByClassName("Paginas");
        var i;
        for(i=0; i<L.length; i++){
            L[i].style.backgroundColor = "blue";
        }
        for (i=0; i<P.length; i++){
            P[i].style.backgroundColor = "white";
        }
    }
    function PaginaCores(){
        var P = document.getElementsByClassName("Paginas");
        var L = document.getElementsByClassName("livros");
        for (i=0; i<P.length; i++){
            P[i].style.backgroundColor = "green";
        }
            for (i=0; i<L.length; i++){
                P[i].style.backgroundColor ="white";
            }
    }
    

    var computador = 0;
var jogador = 0;
var i=0;  
var tentativas=0;


function geranumero(){
    var element = document.getElementById('texto');
    element.value = '';

    computador = parseInt(Math.random()* 100);
    tentativas = 0;
    console.log('numero escolhido pelo computador: '+ computador);
    
}
 geranumero();

 function verifica(){
    var element = document.getElementById('texto');
    var texto = element.value;

        if(texto > 100 || texto < 0)
        {
        alert(' A aposta não é valida, leia direito');
        return;
        }
            if(texto > computador){
                tentativas++;
                alert('O seu numero é maior que o do Roboto');
            }
            else if(texto < computador)
            {
                tentativas++;
                alert(' O seu numero é menor que o do Roboto');
            }
            else 
            {
                alert('Voce acertou, no total vc teve '+tentativas+' erros!');
                geranumero();
            }
    
 }