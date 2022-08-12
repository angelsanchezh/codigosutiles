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

let baserect = prompt("Dame el valor de la base");
let alturarect = prompt("dame el valor de la altura");
let arearect = parseFloat(baserect * alturarect);

alert("El valor del area del rectangulo es :" + arearect);

break
case 4:

let basetri = prompt("Dame el valor de la base");
let alturatri = prompt("dame el valor de la altura");
let areatri = parseFloat((basetri * alturatri)/2);

alert("El valor de la altura  es :" + areatri);




}

}