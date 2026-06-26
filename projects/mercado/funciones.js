function mercado(){

let perecederos;
let no_perecederos;
let lunes,martes,miercoles,jueves,viernes,sabado,domingo;
let lunes1,martes1,miercoles1,jueves1,viernes1,sabado1,domingo1;
let total;

lunes=prompt("que gasto tendra tu el lunes en productos perecederos");
lunes1=prompt("y en productos no perecederos");
document.getElementById("demo").innerHTML=lunes +" €";
document.getElementById("demo1").innerHTML=lunes1 + " €";

martes=prompt("y el martes");
martes1=prompt("y en productos no perecederos");
document.getElementById("demo2").innerHTML=martes +" €";
document.getElementById("demo3").innerHTML=martes1 + " €";

miercoles=prompt("dime y el miercoles");
miercoles1=prompt(" y en productos no perecederos");
document.getElementById("demo4").innerHTML=miercoles +" €";
document.getElementById("demo5").innerHTML=miercoles1 + " €";

jueves=prompt("el jueves es un buen dia para comprar");
jueves1=prompt("no olvides las lentejas de no perecederos");
document.getElementById("demo6").innerHTML=jueves +" €";
document.getElementById("demo7").innerHTML=jueves1 + " €";

viernes=prompt("llego el viernes");
viernes1=prompt("y en productos no perecederos");
document.getElementById("demo8").innerHTML=viernes +" €";
document.getElementById("demo9").innerHTML=viernes1 + " €";

sabado=prompt("Hoy sabado libre que compraras hoy ");
sabado1=prompt("y en productos no perecederos");
document.getElementById("demo10").innerHTML=sabado +" €";
document.getElementById("demo11").innerHTML=sabado1 + " €";

domingo=prompt("Feliz domingo, que comprar hoy");
domingo1=prompt("y en productos no perecederos");
document.getElementById("demo12").innerHTML=domingo +" €";
document.getElementById("demo13").innerHTML=domingo1 + " €";

perecederos=Number(lunes)+Number(martes)+Number(miercoles)+Number(jueves)+Number(viernes)+Number(sabado)+Number(domingo);

document.getElementById("demo14").innerHTML="<h1>" +     perecederos + " €" +"</h1>";

no_perecederos=Number(lunes1)+Number(martes1)+Number(miercoles1)+Number(jueves1)+Number(viernes1)+Number(sabado1)+Number(domingo1);


document.getElementById("demo15").innerHTML= "<h1>" + no_perecederos + " €" +"</h1>";

total=Number(perecederos)+Number(no_perecederos);
document.getElementById("demo16").innerHTML= "<h1>" + total+ " €" +"</h1>";


}