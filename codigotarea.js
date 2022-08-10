function callMenu () {

let nro_ejercicio = parseInt(prompt("escoge el numero de ejercicio que quieres ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolaresescoge una opcion \r\n 9.Empresa contrata personal \r\n 10. Nombre y edad de 3 personas \r\n 11. Bono por antiguedad \r\n 12. Incremento salario profesor \r\n 13. Califiaciones de alumnnos \r\n 14. Contabilizar lote de N focos \r\n 15. Determinar si persoan puede votar "));

if(isNaN(nro_ejercicio)){
    alert("por favor ingrese valores numericos");
    }
else{ Menu_Ejercicios(nro_ejercicio)
}
}

function Menu_Ejercicios(nro_ejercicio){

switch(nro_ejercicio){

    case 1:
        let valor1 = parseFloat(prompt("ingrese el valor 1 a sumar:"));
        let valor2 = parseFloat(prompt("ingrese el valor 2 a sumar:"));
        alert(ej1_sumarValores(valor1,valor2));


}

}
