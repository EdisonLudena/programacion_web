console.log("Operadores");
precioLaptop = 1200;
precioCelular = 800;

console.log("Suma");
suma = precioLaptop + precioCelular;
console.log("Resultado: ", suma);


console.log("Resta");
resta = precioLaptop - precioCelular;
console.log("Resultado: ", suma);

console.log("Multiplicacion");
multiplicacion = precioLaptop * precioCelular;
console.log("Resultado: ", multiplicacion);


console.log("Division");
division = precioLaptop / precioCelular;
console.log("Resultado: ", division);

console.log("Modulo");
stockTotal = 50;
cajas = 7;
modulo = stockTotal % cajas;
console.log("Resultado: ", modulo); 


console.log("Potencia");
potencia = precioCelular ** 2;
console.log("Resultado: ", potencia);

console.log("OPERADORES DE COMPARACION");
console.log("Igualdad debil", precioLaptop == "1200");
console.log("Igualdad estricta", precioLaptop === 1200);
console.log("Desigualdad debil", precioLaptop != "1800");
console.log("Igualdad estricta", precioLaptop !== 1700);
console.log("Mayor que", precioLaptop > precioCelular);
console.log("Menor que", precioLaptop < precioCelular);
console.log("Mayor  igual que", precioLaptop >= 1200);
console.log("Menor igual que", precioLaptop <= 1200); 


console.log("Operadores Logicos");
enStock = false;
ofertaActiva = true;

console.log("AND", enStock && ofertaActiva);
console.log("OR", enStock || ofertaActiva);
console.log("Negacion", !enStock);
console.log("Negacion", !ofertaActiva);