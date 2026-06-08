function IMC(){
let peso;
let altura;
let imc;

peso=prompt("coloque su peso en Kg");
altura=prompt("coloque su altura en metros");
imc=peso/(altura*altura);
alert("SU imc es de:" + imc.toFixed(2));


if(imc<18.5){
    document.getElementById("demo").innerHTML="su peso es insufiente";
   
   
}else if(imc>=18.5 && imc <=24.9){
    document.getElementById("demo").innerHTML="su peso es adecuado";
  
}else if(imc>=25.9 && imc <=29.9){
    document.getElementById("demo").innerHTML="su peso es sobrepeso";
   

}else if(imc>=30 && imc <=39.9){
    document.getElementById("demo").innerHTML="su peso es obesidad II";
    
}else{
    document.getElementById("demo").innerHTML="su peso es obesidad III";
   
}

}