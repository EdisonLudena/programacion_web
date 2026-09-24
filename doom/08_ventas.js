const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorProductos');
let productos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const precio = parseFloat(document.getElementById('precio').value.trim());

  if (nombre && descripcion && !isNaN(precio)) {
    const nuevoProducto = { id: Date.now(), nombre, descripcion, precio };
    productos.push(nuevoProducto);
    renderizarProducto(nuevoProducto);
    formulario.reset();
  }
});

function renderizarProducto({ id, nombre, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'producto';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>${descripcion}</p>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.producto');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    productos = productos.filter(p => p.id !== id);
    tarjeta.remove();
  }
});
