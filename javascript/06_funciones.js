function mostrar(){
    console.log("Hola Mundo")
}

mostrar();

mostrar();

mostrar();


function calcular(precio, cantidad){
    return (precio * cantidad)/2;
}

let total = calcular(10,10);
console.log(total);

function calcular2(n1, n2){
    return "pr " + n1 + " pr " + n2;
}

console.log(calcular2("hola", "mundo"));

function verficar(precio){
    if(precio < 500){
        console.log("En oferta");
    } else {
        console.log("Regular");
    }
}
verficar(350);
verficar(900);
