/*function CallMenu(){

let nro_ejercicio = parseInt(prompt("escoge el numero de ejercicio que quieres ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolaresescoge una opcion \r\n 9.Empresa contrata personal \r\n 10. Nombre y edad de 3 personas \r\n 11. Bono por antiguedad \r\n 12. Incremento salario profesor \r\n 13. Califiaciones de alumnnos \r\n 14. Contabilizar lote de N focos \r\n 15. Determinar si persoan puede votar "));

if(isNaN(nro_ejercicio)){
    alert("por favor ingrese valores numericos")
    }
else{ Menu_Ejercicios(nro_ejercicio)
}
}

function Menu_Ejercicios(nro_ejercicio){

switch(nro_ejercicio){

    case 1:
        let valor1 = parseFloat(prompt("ingrese el valor 1 a sumar:"));
        let valor2 = parseFloat(prompt("ingrese el valor 2 a sumar:"));
        alert("La suma es : " + (valor1+valor2))
}

} */ 

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
let tipodecambio = 3.94
let cambio = soles / tipodecambio;

alert("Te daran: " + cambio + " dolares ");


}

}





//for (let i = 0 ; i <= 10 ; i++ ){
  //  console.log("Iterador" + i)}

 // for (let j = 0 ; j <= 10 ; j++ ){
  //console.log("Jotas" + j)}