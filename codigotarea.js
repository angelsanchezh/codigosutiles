
function CallMenu(){

    let numerodeEjer = parseInt(prompt("escoge el numero de ejercicio que quieres ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolaresescoge una opcion \r\n 9.Empresa contrata personal \r\n 10. Nombre y edad de 3 personas \r\n 11. Bono por antiguedad \r\n 12. Incremento salario profesor \r\n 13. Califiaciones de alumnnos \r\n 14. Contabilizar lote de N focos \r\n 15. Determinar si persoan puede votar "));

    if(isNaN(numerodeEjer)){
        alert("por favor ingresa un valor numerico")
    }else{ Menudeejer(numerodeEjer)}

}

function Menudeejer(numerodeEjer){
switch(numerodeEjer){

case 1:
    let valor1 = parseFloat(prompt("dame el primer valor"));
    let valor2 = parseFloat(prompt("dame el segundo valor"));
alert("la suma es: " + (valor1 + valor2));

break

case 2:

let nota1 = parseFloat(prompt("dame la nota 1"));
let nota2 = parseFloat(prompt("dame la nota 2"));
let nota3 = parseFloat(prompt("dame la nota 3"));
let nota4 = parseFloat(prompt("dame la nota 4"));
let susti = "Caballero te vas al susti"
var promediodenotas = parseFloat((nota1+nota2+nota3+nota4)/4);

if(promediodenotas > 20){
    alert("no seas payaso, no puedes promediar mas de 20, pon tus notas reales");
}
else if(promediodenotas < 13){
    alert(susti)
}
else{
    alert("Bien jugador tu promedio es " + promediodenotas + " Puedes ir a la PLAYITA")
}

break

case 3:

let baserect = prompt("Dame el valor de la base del rectangulo");
let alturarect = prompt("dame el valor de la altura del rectangulo");
let arearect = parseFloat(baserect * alturarect);

alert("El valor del area del rectangulo es :" + arearect);

break

case 4:

let basetri = prompt("Dame el valor de la base del triangulo");
let alturatri = prompt("dame el valor de la altura del triangulo");
let areatri = parseFloat((basetri * alturatri)/2);

alert("El valor del area del triagulo es :" + areatri);

break

case 5:

let radio = prompt("Dame el valor del radio del circulo ");
var valorpi = 3.141592;
let areacir = parseFloat(valorpi * (radio**2));

alert("El valor del area del circulo  es :" + areacir);

break

case 6:

let horastrabajadas = prompt("Cuantas horas trabajaste esta semana? ");
let costodehora = prompt("Costo de hora");
let sueldo = horastrabajadas * costodehora ; 

if(horastrabajadas < 48){

    alert("Te pagaremos cuando completes las 48 horas de ley");
}

else if(horastrabajadas > 48){
    alert("No seas patero anda a tu casa, no pagamos horas extras");
}
else{
alert("Tu sueldo es : " + sueldo); }

break

case 7:

let cantidadtela = prompt("Cuantos Metros de tela necesitas ?");
var pulgadas = 0.0254;
let conversion = cantidadtela * pulgadas;

alert("Necesitas pedir : " + conversion + " pulgadas");

break

case 8:

let soles = prompt("Cuantos soles tienes")
var tipodecambio = prompt("ingresa el tipo de cambio")
let cambio = soles / tipodecambio;

alert("Te daran: " + cambio + " dolares ");

break

case 9:

let nameyape = prompt("Cual es tu nombre y apellido");
var fechanac = parseInt(prompt("cual es tu fecha de nacimiento"));

var fechaactual = new Date(); 
var year = fechaactual.getFullYear();


var resultadoss = (year - fechanac);


    alert("Hola"+ nameyape + "Tu edad es : " + resultadoss + "Es correcto ?");

case 10:

const nom1 = prompt("ingresa el primer nombre");
const enom1 = parseInt(prompt("ingresa la edad de la primera persona"));

const nom2 = prompt("ingresa el segundo nombre");
const enom2 = parseInt(prompt("ingresa la edad de la segunda persona"));

const nom3 = prompt("ingresa el nombre de la tercera persona");
const enom3 = parseInt(prompt("ingresa la edad de la tercera persona"));

if(enom1<enom2) {
    
        alert("El menor de las personas es :" + nom1 + " y tiene " + enom1 + " de edad");
    } else if(enom2<enom3){ alert("El menor de las personas es :" + nom2 + " y tienes " + enom2 + " de edad");
    } else{alert("El menor de las personas es :" + nom3 + " y tienes " + enom3 + " de edad")

    }
break
case 11:
    
let trabaj1 = prompt("Cual es tu nombre ? ");
let tiempotra = parseInt(prompt("desde que año trabajas"));
var salario = parseInt(prompt("Cual es su sueldo"));

var fechatra = new Date(); 
var yeartra = fechatra.getFullYear();

let bonif = (yeartra - tiempotra);

var bono1 = salario + 100
var bono2 = salario + 200
var bono3 = salario + 1000

if(bonif <= 3){
    alert("Gracias " + trabaj1 + " por trabajar mas de " + bonif + " años tu salario es : " + salario + " USD." + " Pero recibiras un bono, hoy recibiras : " + bono1 + " USD");
}
//else if(bonif <= 3){

  //  alert("Gracias " + trabaj1 + " por trabajar mas de " + bonif + " años tu salario es : " + salario + " USD." + " Pero recibiras un bono, hoy recibiras : " + bono2 + " USD");
//}
else if(bonif > 5){
   alert("Gracias " + trabaj1 + " por trabajar mas de " + bonif + " años tu salario es : " + salario + " USD." + " Pero recibiras un bono, hoy recibiras : " + bono3 + " USD");
}
else{
    alert("aun no cumples tu primer año para recibir el bono")
}




}

}





//for (let i = 0 ; i <= 10 ; i++ ){
  //  console.log("Iterador" + i)}

 // for (let j = 0 ; j <= 10 ; j++ ){
  //console.log("Jotas" + j)}


  //const productos = [ 
    //{ name:"laptop", price: 1500, },
    //{ name:"celular", price:2300, }, 
    //{ name:"monitor", price:1000, }, 
//]; 

//console.log(productos.[1]);

//productos.forEach((productos)=>{
     //dentro del for Ecach podemos hacer lo que queramos console.log(productos[2]) })

    // const div = document.getElementById("container")
     
    //const nuediv =  Array.from(div)
    //console.log("div" , div);