const inputNombre = document.getElementById("nombreProducto");
const inputStock = document.getElementById("stockProducto");
const inputPrecio = document.getElementById("precioProducto");
const inputFecha = document.getElementById("fechaIngreso");
const inputColor = document.getElementById("colorProducto");
const inputImagen = document.getElementById("imagenProducto");

const btnAgregar = document.getElementById("btnAgregar");
const listaInventario = document.getElementById("listaInventario");
const mensajeAlerta = document.getElementById("mensajeAlerta");
const contadorStock = document.getElementById("contadorStock");

const IMAGEN_DEFAULT = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55"><rect width="55" height="55" fill="%23eeeeee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="9" fill="%23888888">Sin Foto</text></svg>';


let totalProductos = 0;
let productoEnEdicion = null;

establecerFechaActual();
btnAgregar.addEventListener("click", procesarFormulario);

function procesarFormulario() {
    const nombre = inputNombre.value.trim();
    const stock = inputStock.value.trim();
    const precio = inputPrecio.value.trim();
    const fecha = inputFecha.value;
    const color = inputColor.value;
    const archivoImagen = inputImagen.files[0];

    if (nombre === "" || stock === "" || precio === "" || fecha === "") {
        mostrarMensaje("Completa todos los campos.", "#e74c3c");
        return;
    }

    if (parseInt(stock) < 0 || parseFloat(precio) < 0) {
        mostrarMensaje("El stock y el precio no puede ser negativo.", "#e74c3c");
        return;
    }
    if (archivoImagen) {
        const lector = new FileReader();
        lector.onload = function (e) {
            const urlImagen = e.target.result;
            ejecutarGuardado(nombre, stock, precio, fecha, color, urlImagen);
        };
        lector.readAsDataURL(archivoImagen);
    } else {
        const urlImagenExistente = productoEnEdicion 
            ? productoEnEdicion.dataset.imagen 
            : IMAGEN_DEFAULT;
        ejecutarGuardado(nombre, stock, precio, fecha, color, urlImagenExistente);
    }
}

function ejecutarGuardado(nombre, stock, precio, fecha, color, urlImagen) {
    if (productoEnEdicion !== null) {
        
        productoEnEdicion.dataset.nombre = nombre;
        productoEnEdicion.dataset.stock = stock;
        productoEnEdicion.dataset.precio = precio;
        productoEnEdicion.dataset.fecha = fecha;
        productoEnEdicion.dataset.color = color;
        productoEnEdicion.dataset.imagen = urlImagen;

        productoEnEdicion.style.backgroundColor = color;
        productoEnEdicion.querySelector(".img-producto").src = urlImagen;
        productoEnEdicion.querySelector(".titulo-producto").textContent = nombre;
        
        const precioFormateado = parseFloat(precio).toFixed(2);
        productoEnEdicion.querySelector(".meta-producto").innerHTML = 
            `Stock: ${stock} u. | <span class="precio-tag">$${precioFormateado}</span> | Ingreso: ${fecha}`;

        productoEnEdicion = null;
        btnAgregar.textContent = "Registrar Producto";
        btnAgregar.style.backgroundColor = "#d35400";

        mostrarMensaje("Producto Actualizado", "#2980b9");

    } else {
        crearNodoProducto(nombre, stock, precio, fecha, color, urlImagen);
        
        totalProductos++;
        actualizarContador();
        mostrarMensaje("Producto registrado ", "#27ae60");
    }

    limpiarFormulario();
}

function crearNodoProducto(nombre, stock, precio, fecha, color, urlImagen) {
    const nuevoItem = document.createElement("li");
    nuevoItem.className = "item-producto";
    nuevoItem.style.backgroundColor = color;

    nuevoItem.dataset.nombre = nombre;
    nuevoItem.dataset.stock = stock;
    nuevoItem.dataset.precio = precio;
    nuevoItem.dataset.fecha = fecha;
    nuevoItem.dataset.color = color;
    nuevoItem.dataset.imagen = urlImagen;

    const contenedorInfo = document.createElement("div");
    contenedorInfo.className = "info-contenedor";

    const img = document.createElement("img");
    img.src = urlImagen;
    img.alt = nombre;
    img.className = "img-producto";

    const detalles = document.createElement("div");
    detalles.className = "detalles-producto";

    const titulo = document.createElement("span");
    titulo.className = "titulo-producto";
    titulo.textContent = nombre;

    const precioFormateado = parseFloat(precio).toFixed(2);
    const meta = document.createElement("span");
    meta.className = "meta-producto";
    meta.innerHTML = `Stock: ${stock} u. | <span class="precio-tag">$${precioFormateado}</span> | Ingreso: ${fecha}`;

    detalles.appendChild(titulo);
    detalles.appendChild(meta);

    contenedorInfo.appendChild(img);
    contenedorInfo.appendChild(detalles);

    const contenedorAcciones = document.createElement("div");
    contenedorAcciones.className = "acciones-contenedor";

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-editar";

    btnEditar.addEventListener("click", function () {
        inputNombre.value = nuevoItem.dataset.nombre;
        inputStock.value = nuevoItem.dataset.stock;
        inputPrecio.value = nuevoItem.dataset.precio;
        inputFecha.value = nuevoItem.dataset.fecha;
        inputColor.value = nuevoItem.dataset.color;

        productoEnEdicion = nuevoItem;

        btnAgregar.textContent = "Guardar Cambios";
        btnAgregar.style.backgroundColor = "#2980b9";

        mostrarMensaje("Editando producto seleccionado...", "#2980b9");
        inputNombre.focus();
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-eliminar";

    btnEliminar.addEventListener("click", function () {
        if (productoEnEdicion === nuevoItem) {
            productoEnEdicion = null;
            btnAgregar.textContent = "Registrar Producto";
            btnAgregar.style.backgroundColor = "#d35400";
            limpiarFormulario();
        }

        nuevoItem.remove();
        totalProductos--;
        actualizarContador();
        mostrarMensaje("Producto eliminado.", "#d35400");
    });

    contenedorAcciones.appendChild(btnEditar);
    contenedorAcciones.appendChild(btnEliminar);

    nuevoItem.appendChild(contenedorInfo);
    nuevoItem.appendChild(contenedorAcciones);

    listaInventario.appendChild(nuevoItem);
}

function mostrarMensaje(texto, color) {
    mensajeAlerta.textContent = texto;
    mensajeAlerta.style.color = color;
}

function actualizarContador() {
    contadorStock.textContent = totalProductos;
}

function establecerFechaActual() {
    const hoy = new Date().toISOString().split("T")[0]; 
    inputFecha.value = hoy;
}

function limpiarFormulario() {
    inputNombre.value = "";
    inputStock.value = "";
    inputPrecio.value = "";
    inputImagen.value = "";
    inputColor.value = "#fff3e0";
    establecerFechaActual();
    inputNombre.focus();
}