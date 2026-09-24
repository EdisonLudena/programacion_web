let parrafo = null;


document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Producto agregado al inventario desde javascript";
    document.getElementById('contenedor').appendChild(parrafo);
});


document.getElementById('eliminar').addEventListener('click', () => {
    if(parrafo) parrafo.remove();
});


function mostrarMensaje(){
    alert("Bienvenido al sistema");
};

document.getElementById('parrafo').addEventListener('dblclick', () => {
    alert("Doble click");
});


document.getElementById('nombre').addEventListener('input', (e) => {
    console.log("Nombre: ", e.target.value);
});