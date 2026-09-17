let producto = {
    nombre: "hola",
    precio: 120
}

console.log(producto);

producto.nombre = "celular";
console.log(producto);

producto.proveedor = "Tech";
console.log(producto);

for ( let atributo in producto){
    console.log(atributo);
}

let producto1 = {
    nombre: "hola",
    precio: 120,
    contacto : {
        correo: "probando",
        telefono: "0999999999"
    }

}
 console.log(producto1);