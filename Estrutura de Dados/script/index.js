//---PRIMEIRO EXEMPLO---


    n1 = prompt("Digite um numero:", "");
    n2 = prompt("Digite outro numero:", "");

if(n1 > n2){
    alert("O primeiro numero e maior que o segundo.");
}
else{
    alert("O primeiro numero nao e maior que o segundo.");
}

alert("FIM");


//---SEGUNDO EXEMPLO---


var hora = new Date () . getHours();
    if (hora < 12)
        alert("bom dia");
    if (hora >= 12 && hora < 18)
        alert("boa tarde");
    if (hora >= 18)
        alert("boa noite");


//---TERCEIRO EXEMPLO---


nota = prompt("Digite uma nota entre 0 e 10:", "");

if(nota > 7){
    alert("Você obteve um desempenho 'excelente' !");
}
    else {
        if( nota > 5){
            alert("Seu desempenho foi razoavel. Você passou!");
        }
        else {
            alert("Se lascou!");
        }
    }


//---PRIMEIRO EXERCÍCIO---

var escolha = prompt("Pão de Mel, Digite 1. \nSalgado, Digite 2. \nRefrigerante, Digite 3. \nAbraço, Digite 4. \nObrigado, Digite 5.");

if (escolha == 1)
    alert("Você me deve um Pão de Mel!");
else if (escolha == 2)
    alert("Que tal um Lanche?");
else if (escolha == 3)
    alert("Racha uma coca?");
else if (escolha ==4)
    alert("Você ganha um abraço!");
else if (escolha == 5)
    alert("Agradecido?");
else alert("Menu invalido!");

//---FOR---

for (i = 0; i< 10; i = i + 1){
    document.write("<p>Linha" + i);
}

// ---EXEMPLO 1---

var i;
for (i=0; i < 10; i++){
alert("A variável i agora vale: "+ i);
}
    alert("A variável i terminou valendo " + i);


//---EXEMPLO 3---

for (i=1; i <= 6; i++){
    document.write("<H" + i + ">Cabeçalho de nível" + i + "</H" + i + ">")
}

//---EXERCÍCIO 1---

var at = prompt("Entre com a temp. em C°")
    for (var i =1; i <= at; i++){
        document.write(i + " = ");
        document.write(i * 9 / 5 + 32);
        document.write("F");
        document.write("<br>");
    }