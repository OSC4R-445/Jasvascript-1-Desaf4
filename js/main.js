/**
 * Declaracion de variables
 */

let medicamentos = []
let precios =[]

let anotherOne = false
alert("en breve se le va a pedir ingresar el nombre del/los medicamento(s)");
do {
    alert("porfavor ingrese el nombre del medicamento");
    
} while (anotherOne);

for (let i = 0; i < medicamentos.length; i++) {
    console.log(`Nombre medicamento: ${medicamentos[i]}, precio: ${precios[i]};`);
}