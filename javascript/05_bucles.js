for(let i = 0; i<=10; i++){
    console.log("Numero: ", i);
}

console.log("///////////////////////////////////////////");

let total = 0;

for (let i = 0; i<=3; i++){
    total += i;
    // 0 + 0 ; 0
    // 0 + 1; 1
    // 1 + 2 = 3
    // 3 + 3; 6
}
console.log("Resultado", total)

let palabra = "hola";
for (let i = 0; i< palabra.length; i++){
    console.log("Caracter", palabra[i])
}

let arreglo = [1,7,64,4,5];
let indice = 0;

while(indice < arreglo.length){
    console.log("Cantidad", indice + 1, "es", arreglo[indice]);
    indice ++;
}

let x = 0;
do{
    console.log("Unidades restantes", x);
    x--;
} while(x != 0);