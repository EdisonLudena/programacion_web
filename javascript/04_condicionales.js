let stock = 35;
if (stock < 30){
    console.log("Inventario alto");
}

let codigoAcceso = "a123";
if (codigoAcceso === "a23"){
    console.log("Acceso permitido");
} else {
    console.log("Codigo incorrecto");
}

let bateria = 100;
if(bateria >= 90){
    console.log("Bateria llena");
} else if (bateria >= 60){
    console.log("Bateria media");
} else {
    console.log("Bateria baja");
}


let edad = 17;
let permiso = true;

if(edad >= 18){
    if(permiso){
        console.log("autorizado")
    } else {
        console.log("no autorizado");
    }
} else {
    console.log("Menor de edad");
}

let producto = 2;

switch(producto){
    case 1:
        console.log("Producto principal");
        break;
    case 2:
        console.log("Accesorio de entrada");
        break;
    default:
        console.log("Producto no encontrado");
}

let precio1 = 100;
let precio2 = 200;
let precio3 = 300;

if(precio1 < precio2 && precio3 ){
    console.log("se cumple")
}


let pr1 = prompt("iNGRESE EL NOMBRE 1: ");
let pr2 = prompt("Nombre 2");
let pr3 = prompt("Nombre 3");

console.log(pr1);
console.log(pr2);
console.log(pr3);
